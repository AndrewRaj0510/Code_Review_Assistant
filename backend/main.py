from fastapi import FastAPI, UploadFile, Form
from fastapi.middleware.cors import CORSMiddleware
from review_engine import CodeReviewer

import os
import requests
from dotenv import load_dotenv
from fastapi import FastAPI, HTTPException, Body

from pathlib import Path
env_path = Path(__file__).parent / ".env"
load_dotenv(dotenv_path=env_path)

print("OPENAI_API_BASE:", os.getenv("OPENAI_API_BASE"))
print("MODEL_NAME:", os.getenv("MODEL_NAME"))

app = FastAPI()

@app.get("/")
def root():
    return {"message": "Code Review Assistant API is running."}

# CORS setup (allow frontend to connect later)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Change this later for security
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

reviewer = CodeReviewer()

@app.post("/review")
def review_code(code: str = Body(..., embed=True)):
    """
    Sends the given code to the local LM Studio model for review.
    """
    lmstudio_url = os.getenv("OPENAI_API_BASE") + "/chat/completions"
    model_name = os.getenv("MODEL_NAME")

    headers = {"Content-Type": "application/json"}

    payload = {
        "model": model_name,
        "messages": [
            {
                "role": "system",
                "content": "You are an expert code reviewer. Analyze the code, find issues, and suggest improvements."
            },
            {"role": "user", "content": code}
        ],
        "temperature": 0.2,
    }

    try:
        response = requests.post(lmstudio_url, headers=headers, json=payload)
        response.raise_for_status()
        data = response.json()
        return {"review": data["choices"][0]["message"]["content"]}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))