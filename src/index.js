import mainPage from "./components/home/home";
import contactPage from "./components/contact/contact";

const homeBtn = document.querySelector("#home");
const contactBtn = document.querySelector("#contact");

function displayPage(page) {
  const e = document.querySelector("#content");
  let first = e.firstElementChild;
  while (first) {
    first.remove();
    first = e.firstElementChild;
  }
  page();
}

homeBtn.addEventListener("click", () => displayPage(mainPage));
contactBtn.addEventListener("click", () => displayPage(contactPage));
