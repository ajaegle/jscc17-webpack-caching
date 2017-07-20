import fooString from "./foo";
import barString from "./bar-cjs";
import imagename from "./webpack.jpg";
console.log(fooString, barString);

const image = document.createElement("img");
image.src = imagename;

const contentTarget = document.querySelector(".content");
contentTarget.appendChild(image);
