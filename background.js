const backimages = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];

const chosenImage = backimages[Math.floor(Math.random() * backimages.length)];
const bgImage = document.createElement("img");
bgImage.src = `background/${chosenImage}`;
document.body.appendChild(bgImage);
