Shery.mouseFollower();
Shery.makeMagnet(".magnet");

Shery.hoverWithMediaCircle(".hoverWithMedia", {
  images: [
    "project-caputure/Ola Clone.PNG",
    "project-caputure/classic vintage car.PNG",
    "project-caputure/Sidcup golf.PNG",
    "project-caputure/totalmart.PNG",
    "project-caputure/weather app.PNG",
  ],
});

// Email Notification
function sendMail() {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    contactno: document.getElementById("contactno").value,
    message: document.getElementById("message").value,
  };

  const serviceID = "service_lcl7kdv";
  const templateID = "template_ofr1ng9";

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("contactno").value = "";
      document.getElementById("message").value = "";
      console.log(res);
      alert("Your message sent successfully!!");
    })
    .catch((err) => console.log(err));
}

// Mobile Menu Button
var mobileMenuBtn = document.querySelector("#mobile-menu-btn");
var mobileMenu = document.querySelector(".mobile-menu");
mobileMenuBtn.addEventListener("click", () => {
  if (mobileMenu.style.display === "none") {
    mobileMenu.style.display = "flex";
    // mobileMenuBtn.innerHTML = "Close";
    setTimeout(function () {
      mobileMenu.style.display = "none";
    }, 4000);
  } else {
    mobileMenu.style.display = "none";
    // mobileMenuBtn.innerHTML = "Menu";
  }
});
