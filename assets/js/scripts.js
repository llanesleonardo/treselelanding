import { listImages, createNewElement } from "./addElements.js";

const foldersImagesObject = {
  js: {
    nombre: "js",
    noImages: 10,
  },
  htmlCss: {
    nombre: "htmlCss",
    noImages: 5,
  },
  wordpress: {
    nombre: "wordpress",
    noImages: 8,
  },
};

const imageNodesJS = listImages(
  foldersImagesObject.js.nombre,
  foldersImagesObject.js.noImages
);
const imageNodesHTMLCSS = listImages(
  foldersImagesObject.htmlCss.nombre,
  foldersImagesObject.htmlCss.noImages
);

const imageNodesWordpress = listImages(
  foldersImagesObject.wordpress.nombre,
  foldersImagesObject.wordpress.noImages
);

const nodoBase = document.getElementById("divImages");

/** */
const owlBase = createNewElement("div", "p-1 owl-carousel", "");
nodoBase.append(createNewElement("p", "text-center h5 mt-5", "Javascript"));
nodoBase.append(owlBase);
owlBase.append(...imageNodesJS);

const owlBase2 = createNewElement("div", "p-1 owl-carousel", "");
nodoBase.append(createNewElement("p", "text-center h5 mt-5", "HTML y CSS"));
nodoBase.append(owlBase2);
owlBase2.append(...imageNodesHTMLCSS);

const owlBase3 = createNewElement("div", "p-1 owl-carousel", "");
nodoBase.append(createNewElement("p", "text-center h5 mt-5", "WORDPRESS"));
nodoBase.append(owlBase3);
owlBase3.append(...imageNodesWordpress);
