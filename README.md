# TravelWorld

TravelWorld is an AI-powered travel assistant built using HTML, CSS, JavaScript, Node.js, Express.js, and Google's Gemini API. It helps users plan trips, discover destinations, estimate travel budgets, recommend hotels, suggest local attractions, provide packing tips, and answer travel-related questions through an interactive chat interface.

Unlike a general AI chatbot, TravelWorld is specifically designed to provide travel-focused assistance and personalized recommendations.

---

## Features

- AI-powered travel assistant
- Destination recommendations
- Personalized travel itineraries
- Budget planning
- Hotel recommendations
- Transportation guidance
- Restaurant and local food suggestions
- Packing recommendations
- Weather and travel advice
- Safety tips
- Interactive chat interface
- User-provided Gemini API Key
- Conversation history
- Responsive user interface

---

## Technologies Used

### Frontend

- HTML5
- CSS3
- JavaScript

### Backend

- Node.js
- Express.js
- CORS

### AI

- Google Gemini API
- @google/genai

---

## Project Structure

```
TravelWorld
│
├── index.html
├── style.css
├── script.js
├── index.js
├── package.json
├── package-lock.json
└── README.md
```

---

## Prerequisites

Before running this project, ensure you have installed:

- Node.js (v18 or above recommended)
- npm

Download Node.js:

https://nodejs.org

---

## Installation

### Step 1

Clone the repository

```bash
[git clone https://github.com/Yug-Gupta1212/Travel-world.git]
```

### Step 2

Navigate to the project directory

```bash
cd TravelWorld
```

### Step 3

Install dependencies

```bash
npm install
```

This installs:

- express
- cors
- @google/genai

---

## Running the Project

### Start the backend

```bash
node index.js
```

The server will start at

```
http://localhost:3000
```

Keep this terminal running while using the application.

---

### Open the frontend

Open the project using Visual Studio Code.

Install the **Live Server** extension.

Right-click on **index.html** and select

```
Open with Live Server
```

The application will open in your browser.

---

# Gemini API Setup

TravelWorld does not include a Gemini API key.

Each user must use their own Gemini API key.

### Step 1

Visit

https://aistudio.google.com/app/apikey

### Step 2

Create a free Gemini API Key.

### Step 3

Launch TravelWorld.

### Step 4

Click

```
Gemini API Key
```

from the sidebar.

### Step 5

Paste your Gemini API key.

### Step 6

Click

```
Save
```

The key is stored locally inside your browser using Local Storage.

No API key is stored inside the project source code.

Users do not need to modify `index.js` or any other source file.

---

## Usage

Example prompts

```
Plan a 5 day trip to Goa under ₹25,000.
```

```
Suggest a honeymoon destination in India.
```

```
Best places to visit in Himachal Pradesh.
```

```
Create a 7 day itinerary for Kerala.
```

```
Suggest budget hotels in Jaipur.
```

```
What should I pack for Ladakh in December?
```

```
Best restaurants near Mall Road, Shimla.
```

---

## How It Works

```
User

    │

    ▼

TravelWorld Frontend

    │

    ▼

User enters Gemini API Key

    │

    ▼

Express Server

    │

    ▼

Google Gemini API

    │

    ▼

Travel Response
```

---

## Dependencies

Install all dependencies

```bash
npm install
```

Or install individually

```bash
npm install express
```

```bash
npm install cors
```

```bash
npm install @google/genai
```

---

## Future Improvements

- User authentication
- Saved trips
- Export itinerary as PDF
- Google Maps integration
- Weather API integration
- Flight search
- Hotel booking APIs
- Voice assistant
- Dark mode
- Multi-language support
- Database integration
- Recent chats
- Travel history

---

## Contributing

1. Fork the repository.

2. Create a new branch.

```bash
git checkout -b feature-name
```

3. Commit your changes.

```bash
git commit -m "Add feature"
```

4. Push to GitHub.

```bash
git push origin feature-name
```

5. Open a Pull Request.

---

## License

This project is licensed under the MIT License.

---

## Author

Yug Gupta

GitHub

```
https://github.com/YOUR_USERNAME
```

LinkedIn

```
https://linkedin.com/in/YOUR_PROFILE
```

---

## Notes

- A valid Gemini API Key is required.
- Users should obtain their own free Gemini API key from Google AI Studio.
- The API key is stored locally in the browser and is never included in the repository.
- Do not commit personal API keys to GitHub.
- Keep the backend server running while using the application.

---

If you find this project useful, consider starring the repository.
