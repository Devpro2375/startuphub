from fastapi import FastAPI
from google.oauth2 import service_account
from googleapiclient.discovery import build
import json
import os

app = FastAPI()

# Load credentials from Hugging Face Secrets
google_credentials = json.loads(os.getenv("GOOGLE_CREDENTIALS"))
creds = service_account.Credentials.from_service_account_info(
    google_credentials, scopes=["https://www.googleapis.com/auth/calendar.readonly"]
)

# Initialize Google Calendar API
service = build("calendar", "v3", credentials=creds)

# User preferences
user_interests = ["AI", "startup", "funding"]
preferred_locations = ["bangalore", "mumbai", "delhi", "pune", "chennai"]
event_types = ["webinar", "workshop", "accelerator", "summit"]

# Function to fetch events from Google Calendar
def get_events():
    events_result = service.events().list(
        calendarId="primary", maxResults=10, singleEvents=True, orderBy="startTime"
    ).execute()
    return events_result.get("items", [])

# Function to filter and format events
def filter_events(events):
    recommended = []
    for event in events:
        title = event.get("summary", "").lower()
        location = event.get("location", "No location specified")
        date = event["start"].get("dateTime", event["start"].get("date"))

        if any(keyword in title for keyword in user_interests + event_types) and any(
            city in location.lower() for city in preferred_locations
        ):
            recommended.append({"title": event["summary"], "date": date, "location": location})

    return recommended

@app.get("/")
def home():
    return {"message": "Welcome to the Startup Event Recommender API!"}

@app.get("/recommend_events")
def recommend_events():
    return {"message": "API is working!"}  # Just a test response for now

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=7860)


@app.get("/routes")
def list_routes():
    return {"available_routes": [route.path for route in app.routes]}
    

import uvicorn

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=7860)
