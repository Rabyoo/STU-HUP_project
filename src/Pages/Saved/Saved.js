import React, {useEffect} from "react";
import "./Saved.css";

// Images
import c1 from "../Courses/imgs/1.jpg"
import c2 from "../Courses/imgs/2.jpg"
import c3 from "../Courses/imgs/3.jpg"
import c4 from "../Courses/imgs/4.jpg"

import prof from "./imgs/prof.png"
import courseVideo from "./videos/course video.mp4";
import { Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar";

// Aos
import Aos from "aos";
import "aos/dist/aos.css";


const Saved = () => {
    useEffect(() => {
      Aos.init({
        duration: 1500,
      });
    }, []);
  return (
    <>
      <NavBar />
      <main className="body mb-[230px] w-[100%] h-[100%]">
        <div className="part-left">
          <div className="title">
            <h1>Saved Courses</h1>
          </div>
          <div className="courses">
            <div data-aos="fade-up" className="course">
              <div className="img">
                <img style={{ width: "220px" }} src={c1} alt="course" />
              </div>
              <div className="text">
                <h2>TypeFace Design</h2>
                <p>Expert: Gary Saltz</p>
                <Link to="/payment">Buy</Link>
              </div>
              <div className="icon">
                <i
                  title="Saved to Favorite"
                  className="fa-solid fa-bookmark"></i>
              </div>
            </div>
            <div data-aos="fade-up" className="course">
              <div className="img">
                <img style={{ width: "220px" }} src={c2} alt="course" />
              </div>
              <div className="text">
                <h2>TypeFace Design</h2>
                <p>Expert: Gary Saltz</p>
                <Link to="/payment">Buy</Link>
              </div>
              <div className="icon">
                <i
                  title="Saved to Favorite"
                  className="fa-solid fa-bookmark"></i>
              </div>
            </div>
            <div data-aos="fade-up" className="course">
              <div className="img">
                <img style={{ width: "220px" }} src={c3} alt="course" />
              </div>
              <div className="text">
                <h2>TypeFace Design</h2>
                <p>Expert: Gary Saltz</p>
                <Link to="/payment">Buy</Link>
              </div>
              <div className="icon">
                <i
                  title="Saved to Favorite"
                  className="fa-solid fa-bookmark"></i>
              </div>
            </div>
          </div>
        </div>
        <div data-aos="fade-left" className="part-right">
          <div className="video">
            <video
              width="90%"
              height="300px"
              src={courseVideo}
              typeof="video/mp4"
              controls></video>
          </div>
          <div className="text">
            <h2>BuildingiOS15 App</h2>
            <div className="profile">
              <img
                style={{ width: "45px", height: "45px" }}
                src={prof}
                alt="img"
              />
              <p>Expert: Tom</p>
            </div>
            <div className="data">
              <i className="fa-regular fa-clock"></i>
              <p>Duration: 1h 13m</p>
              <i className="fa-solid fa-star"></i>
              <p>Rating: 5.0/5.0</p>
            </div>
            <h2>Course Description</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br />{" "}
              Dolorem eum ad, itaque blanditiis ea earum, ullam <br /> ab
              provident, aperiam.
            </p>
            <div className="btn">
              <Link to="/overview">Preview</Link>
              <Link to="/payment">Buy Now</Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Saved;
