import fooString from "./foo";
import barString from "./bar-cjs";

import {appendImageTo} from "./imageappender";

console.log(fooString, barString);

const button = document.querySelector("button#add");
button.addEventListener("click", () => appendImageTo(".content"));
