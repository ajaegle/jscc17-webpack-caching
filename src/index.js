import fooString from "./foo";
import barString from "./bar-cjs";

import {appendImageTo} from "./imageappender";

console.log(fooString, barString);

appendImageTo(".content");
appendImageTo(".content");
