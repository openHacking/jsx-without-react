import { render } from "../runtime/jsx-runtime";
import App from "./App";
import { JSDOM } from "jsdom";
// our jsdom document
const dom = new JSDOM(`<!DOCTYPE html><body><div id='root'/></body>`);
const { document } = dom.window;
const rootElement = document.getElementById("root");
render(<App />, rootElement);
console.log(document.body.innerHTML);