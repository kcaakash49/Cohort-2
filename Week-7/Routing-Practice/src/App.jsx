import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import React, { Suspense } from "react";
// import Dashboard from "./component/Dashboard";
// import Contact from "./component/Contact";
const Dashboard = React.lazy(() => import("./component/Dashboard"));
const Contact = React.lazy(() => import("./component/Contact"));

function App() {
  return (
    <div>
      <BrowserRouter>
        <AppBar />
        <Suspense fallback="loading ...">
          <Routes>
            <Route path="/" element={<Dashboard />}></Route>
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

function AppBar() {
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => {
          // window.location.href = "/"; //not right way to perform client side routing as it will fetch html js from server again and again.
          navigate("/");
        }}
      >
        Dashboard
      </button>
      <button
        onClick={() => {
          // window.location.href = "/contact";
          navigate("/contact");
        }}
      >
        Contact
      </button>
    </div>
  );
}
export default App;
