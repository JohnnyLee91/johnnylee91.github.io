const logo = document.querySelector("img");

logo.onclick = () => {
    let logoSrc = logo.getAttribute("src");
    if(logoSrc === "images/firefox-logo.png") {
        logo.setAttribute("src", "images/firefox2.png");
    } else {
        logo.setAttribute("src", "images/firefox-logo.png");
    }
}

if (!localStorage.getItem("name"))
    setUsername()
document.querySelector("strong").textContent = localStorage.getItem("name");
document.querySelector("strong").onclick = () => setUsername();

function setUsername() {
    const username = prompt("Please enter your name.")
    if (!username)
        setUsername()
    localStorage.setItem("name", username);
}