// Intentionally importing full RxJS
import Rx from "rxjs";
// import { map } from 'rxjs/operator/map';
export function printStuffToConsoleUsingRx() {
  Rx.Observable.of(1,2,3).subscribe(console.log);
}
