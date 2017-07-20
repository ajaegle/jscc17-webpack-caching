import imagename from "./webpack.jpg";

export function appendImageTo(selector) {
  const image = document.createElement("img");
  image.src = imagename;

  const contentTarget = document.querySelector(selector);
  contentTarget.appendChild(image);
}
