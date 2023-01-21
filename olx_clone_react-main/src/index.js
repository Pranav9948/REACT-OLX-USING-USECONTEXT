import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import firebase from "./firebase/config";
import Context from './store/Context'
import reportWebVitals from "./reportWebVitals";
import { firebaseContext } from './store/Context';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <firebaseContext.Provider value={{firebase}}>
    <Context>
      <App />
    </Context>
  </firebaseContext.Provider>,


);
reportWebVitals();










//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );



