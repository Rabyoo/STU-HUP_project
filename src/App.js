import { Routes, Route } from "react-router-dom";
import "./App.css";

// Pages
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Loppy from "./Pages/Loppy/Loppy";
import Room from "./Pages/Room/Room";
import SignUp from "./Pages/SignUp/SignUp";
import OverView from "./Pages/OverView/OverView";
import Courses from "./Pages/Courses/Courses";
import NavBar from "./Pages/NavBar/NavBar";
import Saved from "./Pages/Saved/Saved";
import Payment from "./Pages/Payment/Payment";
import FeaturedCourses from "./Pages/FeaturedCourses/FeaturedCourses";

// Imported Images
import _2 from "./Assets/imgs/1.png";
import _3 from "./Assets/imgs/3780.jpg";
import _4 from "./Assets/imgs/medium-shot-man-portrait-with-graduation-cap.jpg";
import _5 from "./Assets/imgs/education-learning-knowledge-banner-frame.jpg";
import Cart from "./Pages/Cart/Cart";
// import _6 from "./imgs/7.jpg";

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/loppy" element={<Loppy />} />
        <Route path="/overview" element={<OverView />} />
        <Route path="/room" element={<Room />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/saved" element={<Saved />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/featured" element={<FeaturedCourses />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>

    </div>
  );
}

export default App;
