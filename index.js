import { GoogleGenAI } from "@google/genai";
import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.post("/gemini", async (req, res) => {

    try {

        const { prompt, apiKey, history } = req.body;

        if (!apiKey) {
            return res.status(400).send("Gemini API Key is required.");
        }

        const ai = new GoogleGenAI({
            apiKey: apiKey
        });

        let contents = [
            {
                role: "user",
                parts: [
                    {
                        text: `
You are TravelWorld, an AI Travel Assistant.

Only answer travel-related questions.

You can help with:

Trip Planning
Destinations
Hotels
Flights
Budget Planning
Restaurants
Weather
Visa Information
Packing Tips
Tourist Attractions
Transportation
Solo Trips
Family Trips
Luxury Trips
Road Trips
Adventure Trips

Behave like Gemini.

Be conversational.

Ask follow-up questions if required.

Remember previous messages.

Never use Markdown symbols like ** or ##.

If the question is unrelated to travel, politely reply:

"I'm TravelWorld. I can only help with travel-related questions."
`
                    }
                ]
            }
        ];

        if (history && history.length > 0) {

            history.forEach(item => {

                contents.push({
                    role: item.role,
                    parts: [
                        {
                            text: item.text
                        }
                    ]
                });

            });

        } else {

            contents.push({
                role: "user",
                parts: [
                    {
                        text: prompt
                    }
                ]
            });

        }

        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: contents
        });

        res.send(response.text);

    } catch (err) {

        console.log(err);

        res.status(500).send("Something went wrong.");

    }

});

app.listen(3000, () => {

    console.log("Server running on http://localhost:3000");

});