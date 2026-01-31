import os
import requests
from dotenv import load_dotenv

load_dotenv()

API_KEY = os.getenv("HEYGEN_API_KEY")
BASE_URL = "https://api.heygen.com/v2"

def list_avatars():
    headers = {
        "X-Api-Key": API_KEY,
        "accept": "application/json"
    }
    
    print("🔍 Fetching available avatars from HeyGen...")
    response = requests.get(f"{BASE_URL}/avatars", headers=headers)
    
    if response.status_code == 200:
        avatars = response.json().get("data", {}).get("avatars", [])
        print(f"✅ Found {len(avatars)} avatars.")
        # List first 10 for selection
        for i, avatar in enumerate(avatars[:15]):
            print(f"- [{i}] Name: {avatar.get('avatar_name')} | ID: {avatar.get('avatar_id')}")
    else:
        print(f"❌ Error: {response.status_code}")
        print(response.text)

if __name__ == "__main__":
    if not API_KEY:
        print("❌ HEYGEN_API_KEY not found in .env")
    else:
        list_avatars()
