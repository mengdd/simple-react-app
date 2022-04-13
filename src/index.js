import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Page1 from './components/page1';
import Page2 from './components/page2';
import Page3 from './components/page3';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="page1" element={<Page1 />} />
      <Route path="page2" element={<Page2 />} />
      <Route path="page3" element={<Page3 />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);