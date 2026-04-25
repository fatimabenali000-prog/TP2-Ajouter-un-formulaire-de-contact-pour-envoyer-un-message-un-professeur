
let maDiv = document.createElement("div");


let p = document.createElement("p");

p.textContent = "Ceci est un paragraphe";

maDiv.appendChild(p);

document.body.appendChild(maDiv);

p.textContent = "Le texte a été modifié";

p.style.backgroundColor = "lightblue";
p.style.textAlign = "center";

maDiv.addEventListener("click", function () {
    p.textContent = "Un clic a été détecté";
});