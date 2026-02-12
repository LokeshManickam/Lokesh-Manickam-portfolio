const form = document.getElementById("contactForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    mobile: document.getElementById("mobile").value,
    message: document.getElementById("message").value
  };

  try {
    const res = await fetch(
      "https://portfolio-backend-iaxw.onrender.com/api/contact",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      }
    );

    const result = await res.json();

    if (res.ok) {
      alert("✅ Message sent successfully!");
      form.reset();
    } else {
      alert("❌ Failed: " + result.message);
    }

  } catch (err) {
    console.error("Frontend Error:", err);
    alert("❌ Failed to send message");
  }
});
