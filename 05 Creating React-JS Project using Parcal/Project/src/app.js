import { createRoot } from "react-dom/client"


const h1 = <h1>First React-JS Project Using Parcel</h1> ;
const root = createRoot(document.querySelector(".root")) ;
root.render(h1);