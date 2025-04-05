# Startup Event Recommender API

This is a FastAPI-based backend application that fetches and filters startup-related events from Google Calendar. It recommends events based on user interests, location preferences, and event types.

## Features

- Fetches events using the Google Calendar API
- Filters events based on:
  - Keywords like "AI", "startup", "funding", etc.
  - Preferred cities like Bangalore, Mumbai, etc.
  - Types of events like webinars, summits, accelerators
- API endpoint for getting recommended events

## Technologies Used

- Python
- FastAPI
- Google Calendar API
- FuzzyWuzzy (for fuzzy matching, optional)
- Docker (for deployment)
- Hugging Face Spaces (optional hosting)


