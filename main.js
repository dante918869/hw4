// #1

const btn = document.getElementById("btn");
const div = document.getElementById("div");
btn.addEventListener("click", () => {
  div.remove();
});

// #2

const newDiv = document.createElement("div");
newDiv.classList.add("card");

const h2 = document.createElement("h2");
h2.textContent = "Gandalf";

const link = document.createElement("a");
link.textContent = "go to profile";

newDiv.append(h2, link);

document.body.append(newDiv);

// #3

const questiones = document.querySelectorAll(".question");
questiones.style.color = "red";
const answers = document.querySelectorAll(".card");
const answer = document.querySelectorAll(".share");

answer.forEach.addEventListener("click", () => {
  if ((e.classList.contains = "incorrect")) {
    e.style.color = "red";
  } else {
    e.style.color = "green";
  }
});
