const successMssg = document.getElementById("success-mssg");
const failedMssg = document.getElementById("failed-mssg");

// Initialize EmailJS
emailjs.init("zTFz29WcYt1J2pwvr");

const contactForm = document.querySelector("#contact form");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // Send to your inbox
  emailjs.sendForm("service_1oqb5d8", "template_f7vskyi", this).then(
    () => {
      successMssg.style.display = "block";
      successMssg.textContent = "Sent! I'll respond as soon as possible 👌";

      // Hide after 4 seconds
      setTimeout(() => {
        successMssg.style.display = "none";
      }, 4000);
    },
    (error) => {
      failedMssg.style.display = "block";
      failedMssg.textContent = "Aw Snap! Something went wrong 😔";

      // Hide after 4 seconds
      setTimeout(() => {
        failedMssg.style.display = "none";
      }, 4000);
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

  this.reset();
});
