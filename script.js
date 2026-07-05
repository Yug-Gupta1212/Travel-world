const chatBox = document.getElementById("chatBox");
const input = document.getElementById("prompt");

let chatHistory = [];

input.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        sendMessage();
    }
});

// ---------- Settings ----------

function openSettings() {

    document.getElementById("settings").style.display = "flex";

    const saved = localStorage.getItem("geminiKey");

    if (saved) {

        document.getElementById("apiKey").value = saved;

    }

}

function closeSettings() {

    document.getElementById("settings").style.display = "none";

}

function saveApiKey() {

    const key = document.getElementById("apiKey").value.trim();

    if (key === "") {

        alert("Please enter your Gemini API Key");

        return;

    }

    localStorage.setItem("geminiKey", key);

    alert("API Key Saved Successfully");

    closeSettings();

}

// ---------- Suggestions ----------

function fillPrompt(text) {

    input.value = text;

    input.focus();

}

// ---------- Chat ----------

function addMessage(text, type) {

    const div = document.createElement("div");

    div.className = `message ${type}`;

    div.innerHTML = text.replace(/\n/g, "<br>");

    chatBox.appendChild(div);

    chatBox.scrollTop = chatBox.scrollHeight;

}

async function sendMessage() {

    const prompt = input.value.trim();

    if (prompt === "") return;

    const apiKey = localStorage.getItem("geminiKey");

    if (!apiKey) {

        alert("Please add your Gemini API Key first.");

        openSettings();

        return;

    }

    addMessage(prompt, "user");

    chatHistory.push({

        role: "user",

        text: prompt

    });

    input.value = "";

    const typing = document.createElement("div");

    typing.className = "message bot typing";

    typing.id = "typing";

    typing.innerHTML = "✈️ TravelWorld is thinking...";

    chatBox.appendChild(typing);

    chatBox.scrollTop = chatBox.scrollHeight;

    try {

        const res = await fetch("http://localhost:3000/gemini", {

            method: "POST",

            headers: {

                "Content-Type": "application/json"

            },

            body: JSON.stringify({

                prompt,

                apiKey,

                history: chatHistory

            })

        });

        const reply = await res.text();

        document.getElementById("typing").remove();

        addMessage(reply, "bot");

        chatHistory.push({

            role: "model",

            text: reply

        });

    }

    catch (err) {

        document.getElementById("typing").remove();

        addMessage("❌ Unable to connect to the server.", "bot");

        console.log(err);

    }

}

// ---------- New Chat ----------

async function newChat() {

    chatHistory = [];

    chatBox.innerHTML = `

        <div class="message bot">

            👋 Hello!

            <br><br>

            Welcome to <b>TravelWorld</b>.

            <br><br>

            Where would you like to travel today?

        </div>

    `;

}