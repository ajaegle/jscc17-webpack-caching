import fooString from "./foo";
import barString from "./bar-cjs";

import { printStuffToConsoleUsingRx } from "./using-rx";

// import {appendImageTo} from "./imageappender"

console.log(fooString, barString);

printStuffToConsoleUsingRx();

const button = document.querySelector("button#add");
const clickHandler = () => System.import("./imageappender").then(module => module.appendImageTo(".content"));
button.addEventListener("click", clickHandler);
