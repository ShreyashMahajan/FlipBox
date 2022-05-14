import { BrowserRouter } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { AuthProvider } from "./context/authContext/authContext";
import { CategoryProvider } from "./context/categoryContext/categoryContext";
import { VideoListProvider } from "./context/videoListContext/videoListContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
   <AuthProvider>
   <CategoryProvider>
   <VideoListProvider>
   <App />
   </VideoListProvider>
   </CategoryProvider>
   </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
