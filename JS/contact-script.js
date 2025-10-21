// Initialize EmailJS
emailjs.init("zTFz29WcYt1J2pwvr");

const contactForm = document.querySelector("#contact form");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // Send to your inbox
  emailjs.sendForm("service_1oqb5d8", "template_f7vskyi", this).then(
    () => {
      console.log("Message sent to inbox!");
      alert("Your message has been sent!");
    },
    (error) => {
      console.error("Inbox send error:", error);
      alert("Failed to send message. Try again.");
    }
  );

  // Send auto-reply to visitor
  emailjs.sendForm("service_1oqb5d8", "template_svtc5dm", this).then(
    () => {
      console.log("Auto-reply sent!");
    },
    (error) => {
      console.error("Auto-reply error:", error);
    }
  );

  // Reset the form
  this.reset();
});
