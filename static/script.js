function sendMessage() {
    const input = document.getElementById("user-input");
    const chatBox = document.getElementById("chat-box");
  
    const userText = input.value;
    if (userText.trim() === "") return;
  
    const userMessage = `<div><strong>You:</strong> ${userText}</div>`;
    chatBox.innerHTML += userMessage;
  
    const novaResponse = getNovaResponse(userText);
    const novaMessage = `<div><strong>Nova:</strong> ${novaResponse}</div>`;
    chatBox.innerHTML += novaMessage;
  
    input.value = "";
    chatBox.scrollTop = chatBox.scrollHeight;
  }
  
  function getNovaResponse(question) {
    if (question.toLowerCase().includes("sun")) {
      return "The Sun is a giant ball of burning gas, mainly hydrogen and helium.";
    } else if (question.toLowerCase().includes("mars")) {
      return "Mars is the 4th planet from the Sun. It’s known as the Red Planet.";
    } else if (question.toLowerCase().includes("weather")) {
      return "Weather is the atmospheric condition at a specific time and place.";
    } else {
      return "That's interesting! Let me find more about it for you soon.";
    }
  }
  
  // 🌌 Theme toggle logic
  function toggleTheme() {
    const body = document.body;
    const themeBtn = document.getElementById("theme-btn");
  
    if (body.classList.contains("earth-theme")) {
      body.classList.remove("earth-theme");
      body.classList.add("space-theme");
      themeBtn.textContent = "Switch to Earth Theme";
    } else {
      body.classList.remove("space-theme");
      body.classList.add("earth-theme");
      themeBtn.textContent = "Switch to Space Theme";
    }
  }
  