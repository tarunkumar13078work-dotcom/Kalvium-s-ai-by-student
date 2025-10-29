// Kalvium's AI Assistant - Professional Edition
// Enhanced with modern features and better UX

// Predefined Q&A database
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

// Global state management
const state = {
    voiceEnabled: true,
    isDarkTheme: true,
    messageHistory: []
};

// DOM elements
const chatWindow = document.getElementById("chat-window");
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");
const clearChatBtn = document.getElementById("clear-chat");
const voiceToggleBtn = document.getElementById("voice-toggle");
const themeToggleBtn = document.getElementById("theme-toggle");
const sidebarToggle = document.getElementById("sidebar-toggle");
const sidebar = document.getElementById("faq-menu");
const faqSearch = document.getElementById("faq-search");

// Utility: Normalize text for better matching
function normalize(text) {
    return text.toLowerCase().replace(/[^a-z0-9 ]/g, "").trim();
}

// Find answer with fuzzy matching support
function findAnswer(question) {
    const normalizedQuestion = normalize(question);
    
    // Exact match
    for (let q in qaList) {
        if (normalize(q) === normalizedQuestion) {
            return qaList[q];
        }
    }
    
    // Partial match (contains)
    for (let q in qaList) {
        if (normalize(q).includes(normalizedQuestion) || normalizedQuestion.includes(normalize(q))) {
            return qaList[q];
        }
    }
    
    return null;
}

// Text-to-Speech with better voice selection
function speak(text) {
    if (!state.voiceEnabled || !('speechSynthesis' in window)) return;
    
    // Cancel any ongoing speech
    window.speechSynthesis.cancel();
    
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.pitch = 1;
    utterance.rate = 1;
    utterance.volume = 1;
    
    // Try to use a better voice if available
    const voices = window.speechSynthesis.getVoices();
    const preferredVoice = voices.find(v => v.name.includes('Google') || v.name.includes('Female')) || voices[0];
    if (preferredVoice) {
        utterance.voice = preferredVoice;
    }
    
    window.speechSynthesis.speak(utterance);
}

// Get current timestamp
function getTimestamp() {
    const now = new Date();
    return now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
}

// Create message wrapper with avatar
function createMessageWrapper(isUser = false) {
    const wrapper = document.createElement("div");
    wrapper.className = `message-wrapper ${isUser ? 'user-wrapper' : 'bot-wrapper'}`;
    
    const avatar = document.createElement("div");
    avatar.className = `message-avatar ${isUser ? 'user-avatar' : 'bot-avatar'}`;
    avatar.innerHTML = isUser ? '<i class="fas fa-user"></i>' : '<i class="fas fa-robot"></i>';
    
    const messageContainer = document.createElement("div");
    messageContainer.style.display = 'flex';
    messageContainer.style.flexDirection = 'column';
    messageContainer.style.gap = '5px';
    messageContainer.style.maxWidth = '70%';
    
    if (isUser) {
        wrapper.appendChild(messageContainer);
        wrapper.appendChild(avatar);
    } else {
        wrapper.appendChild(avatar);
        wrapper.appendChild(messageContainer);
    }
    
    return { wrapper, messageContainer };
}

// Create typing indicator
function createTypingIndicator() {
    const { wrapper, messageContainer } = createMessageWrapper(false);
    
    const indicator = document.createElement("div");
    indicator.className = "typing-indicator";
    indicator.innerHTML = '<div class="typing-dot"></div><div class="typing-dot"></div><div class="typing-dot"></div>';
    
    messageContainer.appendChild(indicator);
    return wrapper;
}

// Remove welcome message
function removeWelcomeMessage() {
    const welcomeMsg = chatWindow.querySelector('.welcome-message');
    if (welcomeMsg) {
        welcomeMsg.style.animation = 'fadeOut 0.3s ease';
        setTimeout(() => welcomeMsg.remove(), 300);
    }
}

// Send message function
function sendMessage(msg) {
    if (!msg || !msg.trim()) return;
    
    removeWelcomeMessage();
    
    const message = msg.trim();
    
    // Create user message
    const { wrapper: userWrapper, messageContainer: userContainer } = createMessageWrapper(true);
    const userMsg = document.createElement("div");
    userMsg.className = "user-msg";
    userMsg.textContent = message;
    userContainer.appendChild(userMsg);
    
    const userTime = document.createElement("div");
    userTime.className = "message-time";
    userTime.textContent = getTimestamp();
    userContainer.appendChild(userTime);
    
    chatWindow.appendChild(userWrapper);
    chatWindow.scrollTop = chatWindow.scrollHeight;
    
    userInput.value = "";
    userInput.focus();
    
    // Show typing indicator
    const typingIndicator = createTypingIndicator();
    chatWindow.appendChild(typingIndicator);
    chatWindow.scrollTop = chatWindow.scrollHeight;
    
    // Simulate bot thinking time
    setTimeout(() => {
        typingIndicator.remove();
        
        const answer = findAnswer(message) || "I'm sorry, I don't have an answer for that question yet. Please try asking something else or select a question from the FAQ sidebar.";
        
        // Create bot message
        const { wrapper: botWrapper, messageContainer: botContainer } = createMessageWrapper(false);
        const botMsg = document.createElement("div");
        botMsg.className = "bot-msg";
        botMsg.textContent = answer;
        botContainer.appendChild(botMsg);
        
        const botTime = document.createElement("div");
        botTime.className = "message-time";
        botTime.textContent = getTimestamp();
        botContainer.appendChild(botTime);
        
        chatWindow.appendChild(botWrapper);
        chatWindow.scrollTop = chatWindow.scrollHeight;
        
        // Store in history
        state.messageHistory.push({ user: message, bot: answer, timestamp: getTimestamp() });
        
        // Speak the answer
        speak(answer);
        
    }, 1000 + Math.random() * 500); // Random delay for more natural feel
}

// Clear chat function
function clearChat() {
    if (state.messageHistory.length === 0) return;
    
    if (confirm('Are you sure you want to clear the chat history?')) {
        chatWindow.innerHTML = `
            <div class="welcome-message">
                <i class="fas fa-robot welcome-icon"></i>
                <h2>Welcome to Kalvium's AI Assistant!</h2>
                <p>I'm here to help you with questions about college, Kalvium, and programming basics.</p>
                <p>Select a question from the FAQ sidebar or type your own question below.</p>
            </div>
        `;
        state.messageHistory = [];
    }
}

// Toggle voice
function toggleVoice() {
    state.voiceEnabled = !state.voiceEnabled;
    const icon = voiceToggleBtn.querySelector('i');
    
    if (state.voiceEnabled) {
        icon.className = 'fas fa-volume-up';
        voiceToggleBtn.classList.add('active');
    } else {
        window.speechSynthesis.cancel();
        icon.className = 'fas fa-volume-mute';
        voiceToggleBtn.classList.remove('active');
    }
}

// Toggle theme
function toggleTheme() {
    state.isDarkTheme = !state.isDarkTheme;
    document.body.classList.toggle('light-theme');
    const icon = themeToggleBtn.querySelector('i');
    icon.className = state.isDarkTheme ? 'fas fa-moon' : 'fas fa-sun';
}

// FAQ search functionality
function searchFAQs() {
    const searchTerm = normalize(faqSearch.value);
    const allQuestions = document.querySelectorAll('.faq-q');
    let hasVisibleQuestions = false;
    
    document.querySelectorAll('.faq-category').forEach(category => {
        const questions = category.querySelectorAll('.faq-q');
        let categoryHasVisible = false;
        
        questions.forEach(q => {
            const questionText = normalize(q.textContent);
            if (questionText.includes(searchTerm) || searchTerm === '') {
                q.classList.remove('hidden');
                categoryHasVisible = true;
                hasVisibleQuestions = true;
            } else {
                q.classList.add('hidden');
            }
        });
        
        // Auto-expand categories with matches
        const questionsDiv = category.querySelector('.faq-questions');
        const toggleBtn = category.querySelector('.faq-toggle');
        if (searchTerm && categoryHasVisible) {
            questionsDiv.classList.add('open');
            toggleBtn.classList.add('active');
        }
    });
}

// Event Listeners
sendBtn.addEventListener("click", () => sendMessage(userInput.value));

userInput.addEventListener("keydown", e => {
    if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        sendMessage(userInput.value);
    }
});

clearChatBtn.addEventListener("click", clearChat);
voiceToggleBtn.addEventListener("click", toggleVoice);
themeToggleBtn.addEventListener("click", toggleTheme);

if (sidebarToggle) {
    sidebarToggle.addEventListener("click", () => {
        sidebar.classList.toggle("collapsed");
    });
}

faqSearch.addEventListener("input", searchFAQs);

// FAQ toggle functionality
document.querySelectorAll(".faq-toggle").forEach(btn => {
    btn.addEventListener("click", () => {
        const questions = btn.nextElementSibling;
        const isOpen = questions.classList.contains("open");
        
        // Close all other categories
        document.querySelectorAll(".faq-questions").forEach(q => {
            if (q !== questions) {
                q.classList.remove("open");
            }
        });
        document.querySelectorAll(".faq-toggle").forEach(b => {
            if (b !== btn) {
                b.classList.remove("active");
            }
        });
        
        // Toggle current category
        questions.classList.toggle("open");
        btn.classList.toggle("active");
    });
});

// FAQ question click handlers
document.querySelectorAll(".faq-q").forEach(q => {
    q.addEventListener("click", () => {
        const questionText = q.textContent.replace(/^\s*[\s\S]*?\s/, '').trim(); // Remove icon
        userInput.value = questionText;
        sendMessage(questionText);
        
        // Close sidebar on mobile after selection
        if (window.innerWidth <= 968) {
            sidebar.classList.add("collapsed");
        }
    });
});

// Load voices for speech synthesis
if ('speechSynthesis' in window) {
    window.speechSynthesis.onvoiceschanged = () => {
        window.speechSynthesis.getVoices();
    };
}

// Initialize voice toggle state
voiceToggleBtn.classList.add('active');

// Auto-focus input on load
window.addEventListener('load', () => {
    userInput.focus();
});
