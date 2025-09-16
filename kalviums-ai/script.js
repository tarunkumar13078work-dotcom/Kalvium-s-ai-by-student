// Predefined Q&A with at least 50 entries
const qaList = {
    "What courses do you offer?": "Noorul Islam University offers undergraduate and postgraduate programs in engineering, technology, and management, including a BE in AI & ML.",
    "College timing?": "College hours are typically 9 AM to 5 PM, Monday through Friday.",
    "Contact info?": "You can reach us at Email: admin@noorulislam.edu or Phone: +91-12345-67890.",
    "Where is the college located?": "Noorul Islam University is located in Thuckalay, Tamil Nadu, India.",
    "Admission process?": "You can apply online through the college admission portal or visit the admissions office for guidance.",
    "Does the college have hostels?": "Yes, the college has separate hostel facilities for male and female students on campus.",
    "What is the fee structure?": "Fees vary by program. Check the official prospectus or college website for detailed fee structures.",
    "How is campus life?": "Campus life is vibrant, with events, student clubs, sports, and cultural activities throughout the year.",
    "Are scholarships available?": "Yes, merit-based and need-based scholarships are available. Contact the college scholarship office for details.",
    "What clubs or activities exist?": "The campus has various technical, cultural, and sports clubs, including coding clubs, arts, and music groups.",
    "How do I apply for admission?": "Fill out the online admission form on the college website and submit the required documents before the deadline.",
    "What is the placement assistance?": "The college has a placement cell that helps students prepare for interviews and connects with recruiting companies.",
    "How do I reach the campus?": "The campus is accessible by bus and train. The nearest city is Nagercoil, from where you can take a bus or taxi.",
    "What events are held on campus?": "The college hosts annual technical fests, cultural fests, hackathons, and sports events each year.",
    "What is Kalvium?": "Kalvium is an online learning platform that teaches AI & ML through guided, hands-on projects.",
    "How do Kalvium projects work?": "Each project comes with step-by-step instructions and automated feedback so you can learn by doing.",
    "How do I submit a project?": "Once you've completed the tasks, submit your project on the Kalvium platform for evaluation.",
    "Which course am I taking?": "You are enrolled in the AI & ML foundational course on Kalvium.",
    "How are exercises graded?": "Kalvium uses automated testing and grading for exercises, giving you instant feedback on your code.",
    "Can I access the platform on mobile?": "Yes, Kalvium's platform is mobile-responsive and works on tablets and phones.",
    "How does Kalvium help in AI & ML learning?": "Kalvium provides structured projects and real-world applications to build practical AI/ML skills.",
    "Are there any community support groups?": "Yes, Kalvium has discussion forums and study groups where learners can help each other.",
    "Can I redo a project if I make mistakes?": "Absolutely, you can redo and resubmit projects until you are satisfied with your solution.",
    "What skills will I gain from Kalvium?": "You will learn Python programming, AI/ML fundamentals, data analysis, and project development skills.",
    "Does Kalvium offer internships?": "Kalvium occasionally shares internship opportunities with industry partners. Check their announcements for details.",
    "How do I contact support?": "Use the Kalvium help section or contact support via the platform's help icon or email support@kalvium.com.",
    "Is Kalvium free or paid?": "Kalvium is a paid platform; courses require subscription or one-time enrollment fees.",
    "Can I collaborate with others on projects?": "Kalvium projects are generally done individually, but you can discuss ideas with peers on the forum.",
    "Will I receive a certificate?": "Yes, upon completion of your course, Kalvium provides a certificate of completion.",
    "In which programming languages are projects available?": "Most Kalvium projects are in Python, since it is widely used for AI and ML.",
    "What is programming?": "Programming is writing instructions (code) for a computer to perform specific tasks.",
    "What is Python?": "Python is a popular high-level programming language known for its simplicity and readability.",
    "What is AI & ML?": "AI (Artificial Intelligence) is the field of making machines intelligent; ML (Machine Learning) is about learning from data.",
    "What is an algorithm?": "An algorithm is a step-by-step set of instructions for solving a problem.",
    "What is a variable?": "A variable is a symbol or name that holds data which can change as the program runs.",
    "What is a function?": "A function is a reusable block of code designed to perform a particular task.",
    "What is a loop?": "A loop is a way to repeat a block of code multiple times until a condition is met.",
    "What is object-oriented programming (OOP)?": "OOP is a programming style that uses classes and objects to organize code.",
    "What is a class and an object?": "A class is like a blueprint for creating objects, and an object is an instance of that class.",
    "What are data structures?": "Data structures are ways of organizing data (like arrays, lists, trees, or dictionaries) for efficient use.",
    "What is recursion?": "Recursion is when a function calls itself to solve a smaller piece of the problem until a base case is reached.",
    "What is machine learning?": "Machine learning is a subset of AI where algorithms learn patterns from data to make predictions or decisions.",
    "What is a neural network?": "A neural network is a computing system inspired by the human brain's network of neurons, used in machine learning.",
    "What is a dataset?": "A dataset is a collection of data, often organized in tables or files, used for training and testing machine learning models.",
    "What is version control?": "Version control is a system (like Git) that tracks changes to code and allows collaboration on software projects.",
    "What is a for loop?": "A for loop repeats a block of code for each item in a list or range, or a set number of times.",
    "What is a while loop?": "A while loop repeats code as long as a given condition remains true.",
    "What are lists in Python?": "Lists in Python are ordered collections that can hold multiple items, such as numbers or strings.",
    "What are dictionaries in Python?": "Dictionaries in Python are collections of key-value pairs, allowing you to associate values with unique keys.",
    "What is an IDE?": "An IDE (Integrated Development Environment) is software like VSCode or PyCharm used for writing and testing code.",
    "What is Git?": "Git is a version control system that helps developers track and manage changes to their code.",
    "What is JSON?": "JSON (JavaScript Object Notation) is a lightweight data interchange format often used to send data between a server and web application.",
    "What is an API?": "API stands for Application Programming Interface; it's a set of rules that allows programs to communicate with each other."
};

// Get chat elements
const chatWindow = document.getElementById("chat-window");
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");

// Normalize text (lowercase, remove punctuation) for matching
function normalize(text) {
    return text.toLowerCase().replace(/[^a-z0-9 ]/g, "").trim();
}

// Find answer by matching normalized question
function findAnswer(question) {
    const normalizedQuestion = normalize(question);
    for (let q in qaList) {
        if (normalize(q) === normalizedQuestion) {
            return qaList[q];
        }
    }
    return null;
}

// Function to send message
function sendMessage(msg) {
    if (!msg) return;

    // Create and display user message
    const userMsg = document.createElement("div");
    userMsg.classList.add("user-msg");
    userMsg.textContent = msg;
    chatWindow.appendChild(userMsg);
    setTimeout(() => userMsg.classList.add("show"), 10);
    chatWindow.scrollTop = chatWindow.scrollHeight;

    userInput.value = "";

    // Simulate bot typing indicator
    const botMsg = document.createElement("div");
    botMsg.classList.add("bot-msg");
    botMsg.textContent = "Typing...";
    chatWindow.appendChild(botMsg);
    setTimeout(() => botMsg.classList.add("show"), 10);
    chatWindow.scrollTop = chatWindow.scrollHeight;

    // Generate answer after delay
    setTimeout(() => {
        const answer = findAnswer(msg) || "Sorry, I don't know the answer to that yet!";
        botMsg.textContent = answer;
        chatWindow.scrollTop = chatWindow.scrollHeight;
    }, 800);
}

// Event listener for send button
sendBtn.addEventListener("click", () => sendMessage(userInput.value));

// Event listener for Enter key
userInput.addEventListener("keydown", e => {
    if (e.key === "Enter") {
        sendMessage(userInput.value);
    }
});

// FAQ toggle and click-to-send
document.querySelectorAll(".faq-toggle").forEach(btn => {
    btn.addEventListener("click", () => {
        const questions = btn.nextElementSibling;
        questions.classList.toggle("open");
        // Toggle plus/minus sign
        if (btn.textContent.includes('[+]')) {
            btn.textContent = btn.textContent.replace('[+]', '[-]');
        } else {
            btn.textContent = btn.textContent.replace('[-]', '[+]');
        }
    });
});

document.querySelectorAll(".faq-q").forEach(q => {
    q.addEventListener("click", () => {
        sendMessage(q.textContent);
    });
});
// ... keep your qaList and existing code ...

// Speak text using Web Speech API
function speak(text) {
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'en-US'; // you can change language
        utterance.pitch = 1; // default 1 (0–2)
        utterance.rate = 1; // default 1 (0.1–10)
        utterance.volume = 1; // 0–1
        // optional: choose a specific voice if available
        // const voices = window.speechSynthesis.getVoices();
        // utterance.voice = voices.find(v => v.name.includes("Female")) || voices[0];
        window.speechSynthesis.speak(utterance);
    } else {
        console.log("Sorry, your browser does not support speech synthesis.");
    }
}

// Function to send message
function sendMessage(msg) {
    if (!msg) return;

    // User message
    const userMsg = document.createElement("div");
    userMsg.classList.add("user-msg");
    userMsg.textContent = msg;
    chatWindow.appendChild(userMsg);
    setTimeout(() => userMsg.classList.add("show"), 10);
    chatWindow.scrollTop = chatWindow.scrollHeight;

    userInput.value = "";

    // Bot typing simulation
    const botMsg = document.createElement("div");
    botMsg.classList.add("bot-msg");
    botMsg.textContent = "Typing...";
    chatWindow.appendChild(botMsg);
    setTimeout(() => botMsg.classList.add("show"), 10);
    chatWindow.scrollTop = chatWindow.scrollHeight;

    setTimeout(() => {
        const answer = findAnswer(msg) || "Sorry, I don't know the answer to that yet!";
        botMsg.textContent = answer;
        chatWindow.scrollTop = chatWindow.scrollHeight;

        // 🔊 Speak the answer
        speak(answer);

    }, 800);
}
