const createImage = (folder, index) => {
  const wrapperImage = document.createElement("div");
  wrapperImage.className = "p-4";
  const image = document.createElement("img");
  image.className = "mx-auto";
  image.width = "220";
  image.src = `https://tresele.blob.core.windows.net/treselewebsite/diplomas/${folder}/${index}.PNG`;
  image.crossOrigin = "anonymous";
  wrapperImage.appendChild(image);

  return wrapperImage;
};

const listImages = (folder, numImages) => {
  const imageseArray = [];

  for (let index = 0; index <= numImages; index++) {
    imageseArray.push(createImage(folder, index));
  }

  return imageseArray;
};

const createNewElement = (element, classes, text) => {
  const newElement = document.createElement(element);
  newElement.className = classes;
  newElement.textContent = text;

  return newElement;
};

export { listImages, createNewElement };
