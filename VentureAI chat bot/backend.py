from fastapi import FastAPI
from pydantic import BaseModel
from huggingface_hub import InferenceClient
import gradio as gr

# Initialize FastAPI
app = FastAPI()

client = InferenceClient("HuggingFaceH4/zephyr-7b-beta")

class Message(BaseModel):
    message: str
    history: list
    system_message: str
    max_tokens: int
    temperature: float
    top_p: float

# Respond function as in your Gradio code
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

# Run the FastAPI app (e.g., uvicorn server)
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
