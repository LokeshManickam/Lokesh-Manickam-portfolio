document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("contactForm");
    const submitBtn = document.getElementById("submitBtn");

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        // Collect form data
        const data = {
            name: document.getElementById("name").value.trim(),
            mobile: document.getElementById("mobile").value.trim(),
            email: document.getElementById("email").value.trim(),
            message: document.getElementById("message").value.trim()
        };

        // Basic validation
        if (!data.name || !data.email || !data.mobile) {
            alert("Please fill all required fields");
            return;
        }

        // 🔥 UX Improvement: Disable button & show loading
        submitBtn.disabled = true;
        submitBtn.innerText = "Sending...";

        try {
            const response = await fetch("https://portfolio-backend-iaxw.onrender.com/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });

            const result = await response.json();

            if (result.success) {
                alert("Message sent successfully!");
                form.reset();
            } else {
                alert("Failed to send message");
            }

        } catch (error) {
            console.error("Error:", error);
            alert("Server not reachable");
        }

        // 🔁 Re-enable button after response
        submitBtn.disabled = false;
        submitBtn.innerText = "Send Message";
    });
});
