import fooString from "./foo";
import barString from "./bar-cjs";

console.log(fooString, barString);

const button = document.querySelector("button#add");
const clickHandler = () => System.import("./imageappender").then(module => module.appendImageTo(".content"));
button.addEventListener("click", clickHandler);
