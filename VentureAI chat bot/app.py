import gradio as gr
from huggingface_hub import InferenceClient
from fastapi import FastAPI
from pydantic import BaseModel
import uvicorn

# Initialize FastAPI app
app = FastAPI()

# Initialize Hugging Face Inference Client
client = InferenceClient("HuggingFaceH4/zephyr-7b-beta")

# Define the request data model
class Message(BaseModel):
    message: str
    history: list
    system_message: str
    max_tokens: int
    temperature: float
    top_p: float

# Define the response function from Gradio
def respond(message, history, system_message, max_tokens, temperature, top_p):
    messages = [{"role": "system", "content": system_message}]
    
    for val in history:
        if val[0]:
            messages.append({"role": "user", "content": val[0]})
        if val[1]:
            messages.append({"role": "assistant", "content": val[1]})

    messages.append({"role": "user", "content": message})

    response = ""
    for message in client.chat_completion(
        messages,
        max_tokens=max_tokens,
        stream=True,
        temperature=temperature,
        top_p=top_p,
    ):
        token = message.choices[0].delta.content
        response += token
        yield response

# FastAPI endpoint for chat communication
@app.post("/chat")
async def chat(request: Message):
    response = respond(
        request.message,
        request.history,
        request.system_message,
        request.max_tokens,
        request.temperature,
        request.top_p
    )
    return {"response": response}

# Run the FastAPI server using uvicorn
if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
