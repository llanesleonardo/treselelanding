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
  nodejs: {
    nombre: "nodejs",
    noImages: 6,
  },
  reactjs: {
    nombre: "reactjs",
    noImages: 3,
  },
  db: {
    nombre: "db",
    noImages: 5,
  },
  devOps: {
    nombre: "devOps",
    noImages: 8,
  },
  cloud: {
    nombre: "cloud",
    noImages: 1,
  },
  bi: {
    nombre: "bi",
    noImages: 3,
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

const imageNodesNodeJs = listImages(
  foldersImagesObject.nodejs.nombre,
  foldersImagesObject.nodejs.noImages
);

const imageNodesReactJs = listImages(
  foldersImagesObject.reactjs.nombre,
  foldersImagesObject.reactjs.noImages
);

const imageNodesDb = listImages(
  foldersImagesObject.db.nombre,
  foldersImagesObject.db.noImages
);

const imageNodesDevOps = listImages(
  foldersImagesObject.devOps.nombre,
  foldersImagesObject.devOps.noImages
);

const imageNodesCloud = listImages(
  foldersImagesObject.cloud.nombre,
  foldersImagesObject.cloud.noImages
);

const imagesNodeBi = listImages(
  foldersImagesObject.bi.nombre,
  foldersImagesObject.bi.noImages
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

const owlBase4 = createNewElement("div", "p-1 owl-carousel", "");
nodoBase.append(createNewElement("p", "text-center h5 mt-5", "NODE JS"));
nodoBase.append(owlBase4);
owlBase4.append(...imageNodesNodeJs);

const owlBase5 = createNewElement("div", "p-1 owl-carousel", "");
nodoBase.append(createNewElement("p", "text-center h5 mt-5", "REACT JS"));
nodoBase.append(owlBase5);
owlBase5.append(...imageNodesReactJs);

const owlBase6 = createNewElement("div", "p-1 owl-carousel", "");
nodoBase.append(createNewElement("p", "text-center h5 mt-5", "DATABASES"));
nodoBase.append(owlBase6);
owlBase6.append(...imageNodesDb);

const owlBase7 = createNewElement("div", "p-1 owl-carousel", "");
nodoBase.append(createNewElement("p", "text-center h5 mt-5", "DevOps"));
nodoBase.append(owlBase7);
owlBase7.append(...imageNodesDevOps);

const owlBase8 = createNewElement("div", "p-1 owl-carousel", "");
nodoBase.append(createNewElement("p", "text-center h5 mt-5", "Cloud Hostings"));
nodoBase.append(owlBase8);
owlBase8.append(...imageNodesCloud);

const owlBase9 = createNewElement("div", "p-1 owl-carousel", "");
nodoBase.append(
  createNewElement("p", "text-center h5 mt-5", "Business Intelligence")
);
nodoBase.append(owlBase9);
owlBase9.append(...imagesNodeBi);
