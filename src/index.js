import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Registration from "./components/usersdocs/Registration";
import Login from "./components/usersdocs/Login";
import Dashboard from "./components/Dashboard";
import Chatbox from "./components/chatroom/Chatbox";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import Products from "./components/productsdemo/Products";
import Sliderone from "./components/slider/Sliderone";
import ReadingMaterials from "./components/materials/ReadingMaterials";
import FinishedProjects from "./components/projects/FinishedProjects";

const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="dashboard" element={<Dashboard />}></Route>
        <Route path="registration" element={<Registration />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="chatbox" element={<Chatbox />}></Route>
        <Route path="products" element={<Products />}></Route>
        <Route path="sliderone" element={<Sliderone />}></Route>
        <Route path="readingmaterials" element={<ReadingMaterials />}></Route>
        <Route path="finishedprojects" element={<FinishedProjects />}></Route>
      </Routes>
    </BrowserRouter>
  </Provider>,
  document.getElementById("noor")
);
