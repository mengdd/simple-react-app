import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

export default function App() {
  return (
    <div>
      <h1>Bookkeeper</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/page1">Page1</Link> |{" "}
        <Link to="/page2">Page2</Link>
      </nav>
    </div>
  );
}
