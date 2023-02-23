import { createImage } from "./addImage.js";

const imageNodes = [];

for (let index = 0; index <= 10; index++) {
  imageNodes.push(createImage(index));
  console.log(imageNodes);
}

const nodoBase = document.getElementById("divImages");
const owlBase = document.createElement("div");
owlBase.className = "owl-carousel";
nodoBase.append(owlBase);
owlBase.append(...imageNodes);
