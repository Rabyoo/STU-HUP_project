import React, { useEffect } from "react";
import "./Courses.css";
import { Link } from "react-router-dom";
import { FaLongArrowAltLeft } from "react-icons/fa";

//Imported Images
import course1 from "./imgs/1.jpg";
import course2 from "./imgs/2.jpg";
import course3 from "./imgs/3.jpg";
import course4 from "./imgs/4.jpg";
import course5 from "./imgs/5.jpg";
import course6 from "./imgs/6.jpg";
import course7 from "./imgs/7.jpg";
import course8 from "./imgs/8.jpg";
import course9 from "./imgs/9.jpg";
import course10 from "./imgs/10.jpg";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";

// Aos
import Aos from "aos";
import "aos/dist/aos.css";

const Courses = () => {
  useEffect(() => {
    Aos.init({
      duration: 1500,
    });
  }, []);
  return (
    <>
      <NavBar />
      <div class="text-center p-10">
        <Link
          to="/"
          className="font-bold text-2xl mb-4 absolute left-[15%] underline text-[#0fd0c8]">
          <FaLongArrowAltLeft /> Go to back Home
        </Link>
        <br />
        <h1 className="text-3xl font-semibold underline">Courses</h1>
      </div>

      <section
        id="Projects"
        class="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
        <div class="w-72 bg-gray-100 shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
          <a data-aos="fade-up" href="#">
            <img
              src={course1}
              alt="Product"
              class="h-80 w-72 object-cover rounded-t-xl"
            />
            <div class="px-4 py-3 w-72">
              <span class="text-gray-400 mr-3 uppercase text-xs">Brand</span>
              <p class="text-lg font-bold text-black truncate block capitalize">
                Product Name
              </p>
              <div class="flex items-center">
                <p class="text-lg font-semibold text-black cursor-auto my-3">
                  $149
                </p>
                <del>
                  <p class="text-sm text-gray-600 cursor-auto ml-2">$199</p>
                </del>
                <div class="ml-auto">
                  <Link to="/cart" className="bg-[#0fd0c8] p-2 rounded pointer">
                    Add to Cart
                  </Link>
                  <br />
                  <br />
                  <Link
                    to="/payment"
                    className="bg-[#0fd0c8] p-2 rounded pointer">
                    By Now
                  </Link>
                  <br />
                  <br />
                  <Link to="/overview" className="font-bold underline">
                    OverView
                  </Link>
                </div>
              </div>
            </div>
          </a>
        </div>

        <div class="w-72 bg-gray-100 shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
          <a data-aos="fade-up" href="#">
            <img
              src={course2}
              alt="Product"
              class="h-80 w-72 object-cover rounded-t-xl"
            />
            <div class="px-4 py-3 w-72">
              <span class="text-gray-400 mr-3 uppercase text-xs">Brand</span>
              <p class="text-lg font-bold text-black truncate block capitalize">
                Product Name
              </p>
              <div class="flex items-center">
                <p class="text-lg font-semibold text-black cursor-auto my-3">
                  $149
                </p>
                <del>
                  <p class="text-sm text-gray-600 cursor-auto ml-2">$199</p>
                </del>
                <div class="ml-auto">
                  <Link to="/cart" className="bg-[#0fd0c8] p-2 rounded pointer">
                    Add to Cart
                  </Link>
                  <br />
                  <br />
                  <Link
                    to="/payment"
                    className="bg-[#0fd0c8] p-2 rounded pointer">
                    By Now
                  </Link>
                  <br />
                  <br />
                  <Link to="/overview" className="font-bold underline">
                    OverView
                  </Link>
                </div>
              </div>
            </div>
          </a>
        </div>

        <div class="w-72 bg-gray-100 shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
          <a data-aos="fade-up" href="#">
            <img
              src={course3}
              alt="Product"
              class="h-80 w-72 object-cover rounded-t-xl"
            />
            <div class="px-4 py-3 w-72">
              <span class="text-gray-400 mr-3 uppercase text-xs">Brand</span>
              <p class="text-lg font-bold text-black truncate block capitalize">
                Product Name
              </p>
              <div class="flex items-center">
                <p class="text-lg font-semibold text-black cursor-auto my-3">
                  $149
                </p>
                <del>
                  <p class="text-sm text-gray-600 cursor-auto ml-2">$199</p>
                </del>
                <div class="ml-auto">
                  <Link to="/cart" className="bg-[#0fd0c8] p-2 rounded pointer">
                    Add to Cart
                  </Link>
                  <br />
                  <br />
                  <Link
                    to="/payment"
                    className="bg-[#0fd0c8] p-2 rounded pointer">
                    By Now
                  </Link>
                  <br />
                  <br />
                  <Link to="/overview" className="font-bold underline">
                    OverView
                  </Link>
                </div>
              </div>
            </div>
          </a>
        </div>

        <div class="w-72 bg-gray-100 shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
          <a data-aos="fade-up" href="#">
            <img
              src={course4}
              alt="Product"
              class="h-80 w-72 object-cover rounded-t-xl"
            />
            <div class="px-4 py-3 w-72">
              <span class="text-gray-400 mr-3 uppercase text-xs">Brand</span>
              <p class="text-lg font-bold text-black truncate block capitalize">
                Product Name
              </p>
              <div class="flex items-center">
                <p class="text-lg font-semibold text-black cursor-auto my-3">
                  $149
                </p>
                <del>
                  <p class="text-sm text-gray-600 cursor-auto ml-2">$199</p>
                </del>
                <div class="ml-auto">
                  <Link to="/cart" className="bg-[#0fd0c8] p-2 rounded pointer">
                    Add to Cart
                  </Link>
                  <br />
                  <br />
                  <Link
                    to="/payment"
                    className="bg-[#0fd0c8] p-2 rounded pointer">
                    By Now
                  </Link>
                  <br />
                  <br />
                  <Link to="/overview" className="font-bold underline">
                    OverView
                  </Link>
                </div>
              </div>
            </div>
          </a>
        </div>

        <div class="w-72 bg-gray-100 shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
          <a data-aos="fade-up" href="#">
            <img
              src={course5}
              alt="Product"
              class="h-80 w-72 object-cover rounded-t-xl"
            />
            <div class="px-4 py-3 w-72">
              <span class="text-gray-400 mr-3 uppercase text-xs">Brand</span>
              <p class="text-lg font-bold text-black truncate block capitalize">
                Product Name
              </p>
              <div class="flex items-center">
                <p class="text-lg font-semibold text-black cursor-auto my-3">
                  $149
                </p>
                <del>
                  <p class="text-sm text-gray-600 cursor-auto ml-2">$199</p>
                </del>
                <div class="ml-auto">
                  <Link to="/cart" className="bg-[#0fd0c8] p-2 rounded pointer">
                    Add to Cart
                  </Link>
                  <br />
                  <br />
                  <Link
                    to="/payment"
                    className="bg-[#0fd0c8] p-2 rounded pointer">
                    By Now
                  </Link>
                  <br />
                  <br />
                  <Link to="/overview" className="font-bold underline">
                    OverView
                  </Link>
                </div>
              </div>
            </div>
          </a>
        </div>

        <div class="w-72 bg-gray-100 shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
          <a data-aos="fade-up" href="#">
            <img
              src={course6}
              alt="Product"
              class="h-80 w-72 object-cover rounded-t-xl"
            />
            <div class="px-4 py-3 w-72">
              <span class="text-gray-400 mr-3 uppercase text-xs">Brand</span>
              <p class="text-lg font-bold text-black truncate block capitalize">
                Product Name
              </p>
              <div class="flex items-center">
                <p class="text-lg font-semibold text-black cursor-auto my-3">
                  $149
                </p>
                <del>
                  <p class="text-sm text-gray-600 cursor-auto ml-2">$199</p>
                </del>
                <div class="ml-auto">
                  <Link to="/cart" className="bg-[#0fd0c8] p-2 rounded pointer">
                    Add to Cart
                  </Link>
                  <br />
                  <br />
                  <Link
                    to="/payment"
                    className="bg-[#0fd0c8] p-2 rounded pointer">
                    By Now
                  </Link>
                  <br />
                  <br />
                  <Link to="/overview" className="font-bold underline">
                    OverView
                  </Link>
                </div>
              </div>
            </div>
          </a>
        </div>

        <div class="w-72 bg-gray-100 shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
          <a data-aos="fade-up" href="#">
            <img
              src={course7}
              alt="Product"
              class="h-80 w-72 object-cover rounded-t-xl"
            />
            <div class="px-4 py-3 w-72">
              <span class="text-gray-400 mr-3 uppercase text-xs">Brand</span>
              <p class="text-lg font-bold text-black truncate block capitalize">
                Product Name
              </p>
              <div class="flex items-center">
                <p class="text-lg font-semibold text-black cursor-auto my-3">
                  $149
                </p>
                <del>
                  <p class="text-sm text-gray-600 cursor-auto ml-2">$199</p>
                </del>
                <div class="ml-auto">
                  <Link to="/cart" className="bg-[#0fd0c8] p-2 rounded pointer">
                    Add to Cart
                  </Link>
                  <br />
                  <br />
                  <Link
                    to="/payment"
                    className="bg-[#0fd0c8] p-2 rounded pointer">
                    By Now
                  </Link>
                  <br />
                  <br />
                  <Link to="/overview" className="font-bold underline">
                    OverView
                  </Link>
                </div>
              </div>
            </div>
          </a>
        </div>

        <div class="w-72 bg-gray-100 shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
          <a data-aos="fade-up" href="#">
            <img
              src={course8}
              alt="Product"
              class="h-80 w-72 object-cover rounded-t-xl"
            />
            <div class="px-4 py-3 w-72">
              <span class="text-gray-400 mr-3 uppercase text-xs">Brand</span>
              <p class="text-lg font-bold text-black truncate block capitalize">
                Product Name
              </p>
              <div class="flex items-center">
                <p class="text-lg font-semibold text-black cursor-auto my-3">
                  $149
                </p>
                <del>
                  <p class="text-sm text-gray-600 cursor-auto ml-2">$199</p>
                </del>
                <div class="ml-auto">
                  <Link to="/cart" className="bg-[#0fd0c8] p-2 rounded pointer">
                    Add to Cart
                  </Link>
                  <br />
                  <br />
                  <Link
                    to="/payment"
                    className="bg-[#0fd0c8] p-2 rounded pointer">
                    By Now
                  </Link>
                  <br />
                  <br />
                  <Link to="/overview" className="font-bold underline">
                    OverView
                  </Link>
                </div>
              </div>
            </div>
          </a>
        </div>

        <div class="w-72 bg-gray-100 shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
          <a data-aos="fade-up" href="#">
            <img
              src={course9}
              alt="Product"
              class="h-80 w-72 object-cover rounded-t-xl"
            />
            <div class="px-4 py-3 w-72">
              <span class="text-gray-400 mr-3 uppercase text-xs">Brand</span>
              <p class="text-lg font-bold text-black truncate block capitalize">
                Product Name
              </p>
              <div class="flex items-center">
                <p class="text-lg font-semibold text-black cursor-auto my-3">
                  $149
                </p>
                <del>
                  <p class="text-sm text-gray-600 cursor-auto ml-2">$199</p>
                </del>
                <div class="ml-auto">
                  <Link to="/cart" className="bg-[#0fd0c8] p-2 rounded pointer">
                    Add to Cart
                  </Link>
                  <br />
                  <br />
                  <Link
                    to="/payment"
                    className="bg-[#0fd0c8] p-2 rounded pointer">
                    By Now
                  </Link>
                  <br />
                  <br />
                  <Link to="/overview" className="font-bold underline">
                    OverView
                  </Link>
                </div>
              </div>
            </div>
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Courses;
