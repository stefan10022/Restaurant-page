function component () {
    const element = document.querySelector("#content");
    const contact = document.createElement("div");
    const paragraph = document.createElement("p");
    paragraph.innerText = "23434564654";
    contact.append(paragraph);
    element.append(contact);
}

export default component;