const buttons = document.querySelectorAll(".Follow");

// Loop through each button and add a click event listener
buttons.forEach(button => {
    button.addEventListener("click", () => {
        if (button.textContent === "Follow") {
            button.innerHTML = "<b>Unfollow</b>";

        } else {
            button.innerHTML = "<b>Follow</b>";
        }
    });
});
const h=document.querySelector("h1");
const butt=document.querySelector(".theme");
const body = document.body;
butt.addEventListener("click", () => {
    if (butt.textContent === "Dark") {
        butt.innerHTML = "<b>Light</b>";
        body.style.backgroundColor = "cadetblue"; 
        h.style.color="aqua"// Dark mode background
    } else {
        butt.innerHTML = "<b>Dark</b>";
        body.style.backgroundColor = "Aliceblue"; // Light mode background
        h.style.color = "midnightblue"; 
    }
});
