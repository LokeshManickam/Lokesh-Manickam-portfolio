const API_URL = "https://portfolio-backend-iaxw.onrender.com/api/contact";

const form = document.getElementById("contactForm");
const btn = document.getElementById("submitBtn");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  // UX improvement (interviewers notice this 👀)
  btn.disabled = true;
  btn.innerText = "Sending...";

  const formData = {
    name: document.getElementById("name").value,
    mobile: document.getElementById("mobile").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value
  };

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    });

    const data = await response.json();

    if (data.success) {
      alert("Message sent successfully!");
      form.reset();
    } else {
      alert("Failed to send message.");
    }

  } catch (error) {
    console.error("Frontend Error:", error);
    alert("Server not reachable");
  } finally {
    // Re-enable button
    btn.disabled = false;
    btn.innerText = "Send Message";
  }
});
