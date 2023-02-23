const createImage = (index) => {
  const wrapperImage = document.createElement("div");
  wrapperImage.className = "p-4";
  const image = document.createElement("img");
  image.className = "mx-auto";
  image.width = "220";
  image.src = `../../assets/img/js/${index}.PNG`;
  wrapperImage.appendChild(image);

  return wrapperImage;
};

export { createImage };
