
// Function to open selected AI tool

function openTool(tool) {

    const workspace = document.getElementById("workspace");

    if (tool === "summarizer") {

        workspace.innerHTML = `
            <h2>AI Text Summarizer</h2>

            <textarea id="userInput"
            placeholder="Enter your long text here..."></textarea>

            <br><br>

            <button onclick="processText()">
                Summarize Text
            </button>

            <div id="result"></div>
        `;

    }

    else if (tool === "email") {

        workspace.innerHTML = `
            <h2>AI Email Classifier</h2>

            <textarea id="userInput"
            placeholder="Enter your email message..."></textarea>

            <br><br>

            <button onclick="processEmail()">
                Classify Email
            </button>

            <div id="result"></div>
        `;

    }

    else if (tool === "tasks") {

        workspace.innerHTML = `
            <h2>Smart Task Generator</h2>

            <textarea id="userInput"
            placeholder="Describe your work or ideas..."></textarea>

            <br><br>

            <button onclick="processTasks()">
                Generate Tasks
            </button>

            <div id="result"></div>
        `;

    }

    else if (tool === "report") {

        workspace.innerHTML = `
            <h2>AI Report Generator</h2>

            <textarea id="userInput"
            placeholder="Enter information for your report..."></textarea>

            <br><br>

            <button onclick="processReport()">
                Generate Report
            </button>

            <div id="result"></div>
        `;

    }

}


// Temporary demo functionality

function showResult(message) {

    const result = document.getElementById("result");

    result.innerHTML = `<p>${message}</p>`;

}



// Text Summarizer - Backend Connection


async function processText() {

    const text = document.getElementById("userInput").value;

    if (text.trim() === "") {
        showResult("Please enter some text.");
        return;
    }

    showResult("Sending text to backend...");

    try {

        const response = await fetch("http://localhost:8080/api/process", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                text: text
            })

        });

        if (!response.ok) {
            throw new Error("Backend request failed");
        }

        const result = await response.text();

        showResult(result);

    } catch (error) {

        showResult("Error connecting to backend!");

        console.error(error);

    }

}



// Email Classifier
function processEmail() {

    const text = document.getElementById("userInput").value;

    if (text.trim() === "") {
        showResult("Please enter an email.");
        return;
    }

    showResult("Your email is ready for AI classification!");

}


// Task Generator
function processTasks() {

    const text = document.getElementById("userInput").value;

    if (text.trim() === "") {
        showResult("Please enter your ideas.");
        return;
    }

    showResult("Your tasks are ready for AI generation!");

}


// Report Generator
function processReport() {

    const text = document.getElementById("userInput").value;

    if (text.trim() === "") {
        showResult("Please enter some information.");
        return;
    }

    showResult("Your report is ready for AI generation!");

}
