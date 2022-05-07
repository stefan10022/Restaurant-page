import picture from "./1-200x300.jpg";

function component() {
    const element = document.querySelector("#content");
    const home = document.createElement("div");
    const myImg = new Image();
    myImg.src = picture;
    const paragraph = document.createElement("p");
    paragraph.innerText = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet et doloremque asperiores quia, fugiat molestiae veritatis ex quos ea voluptatum id sint vel officiis quae hic atque quam nulla accusamus explicabo laboriosam molestias unde quaerat. Ducimus molestias pariatur ab accusamus!";
    home.append(myImg, paragraph);
    element.append(home);
}

export default component;