import React, { useEffect } from "react";
import "./Home.css";

// images
import img1 from "../../Assets/imgs/1.png";
import img2 from "../../Assets/imgs/arya_5_free_courses_ai_chatgpt_t.png";
import img3 from "../../Assets/imgs/education-learning-knowledge-banner-frame.jpg";
import img4 from "../../Assets/imgs/stream-3.png";
import img5 from "../../Assets/imgs/stream-2.png";
import mainImg from "./imgs/img1.jpg";
import _1 from "./imgs/2.jpg";
import _2 from "./imgs/3.jpg";
import _3 from "./imgs/4.jpg";
import _4 from "./imgs/5.jpg";
import _5 from "./imgs/6.jpg";
import _6 from "./imgs/7.jpg";
import _7 from "./imgs/8.jpg";

import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import Header from "../../Components/Header/Header";
import NavBar from "../NavBar/NavBar";

// Aos
import Aos from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    Aos.init({
      duration: 1500,
    });
  }, []);
  return (
    <>
      <Header />
      <NavBar />
      <br />
      <br />

      <div className="title">
        <center
          data-aos="fade-up"
          className="text-4xl font-semibold mt-8 underline">
          Our Works
        </center>
        <br />
        <center>
          <p data-aos="fade-up" className="text-xl font-medium">
            Welcome Sir!
          </p>
        </center>
      </div>

      <section className=" relative left-[4%]">
        <section class="text-gray-700 body-font">
          <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div
              data-aos="fade-left"
              class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                Before they sold out
                <br class="hidden lg:inline-block" />
                readymade gluten
              </h1>
              <p class="mb-8 leading-relaxed">
                Copper mug try-hard pitchfork pour-over freegan heirloom neutra
                air plant cold-pressed tacos poke beard tote bag. Heirloom echo
                park mlkshk tote bag selvage hot chicken authentic tumeric
                truffaut hexagon try-hard chambray.
              </p>
              <div class="flex justify-center">
                <Link
                  to="/aboutus"
                  class="inline-flex text-white bg-[#11ab9e] border-0 py-2 px-6 focus:outline-none rounded text-lg">
                  About us
                </Link>
                <Link
                  to="learnmore"
                  class="ml-4 inline-flex text-gray-700 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg">
                  Learn More
                </Link>
              </div>
            </div>
            <div
              data-aos="fade-right"
              class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img
                class="object-cover object-center rounded"
                alt="hero"
                src={mainImg}
              />
            </div>
          </div>
        </section>

        <section
          data-aos="fade-up"
          class="text-gray-700 body-font border-t border-gray-200">
          <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-col text-center w-full mb-20">
              <h2 class="text-xs text-[#11ab9e] tracking-widest font-medium title-font mb-1">
                ROOF PARTY POLAROID
              </h2>
              <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900">
                Master Cleanse Reliac Heirloom
              </h1>
            </div>
            <div class="flex flex-wrap -m-4">
              <div class="p-4 md:w-1/3">
                <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                  <div class="flex items-center mb-3">
                    <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-[#11ab9e] text-white flex-shrink-0">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-5 h-5"
                        viewBox="0 0 24 24">
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                      </svg>
                    </div>
                    <h2 class="text-gray-900 text-lg title-font font-medium">
                      Shooting Stars
                    </h2>
                  </div>
                  <div class="flex-grow">
                    <p class="leading-relaxed text-base">
                      Blue bottle crucifix vinyl post-ironic four dollar toast
                      vegan taxidermy. Gastropub indxgo juice poutine.
                    </p>
                    <a class="mt-3 text-[#11ab9e] inline-flex items-center">
                      Learn More
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-4 h-4 ml-2"
                        viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div class="p-4 md:w-1/3">
                <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                  <div class="flex items-center mb-3">
                    <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-[#11ab9e] text-white flex-shrink-0">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-5 h-5"
                        viewBox="0 0 24 24">
                        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>
                    </div>
                    <h2 class="text-gray-900 text-lg title-font font-medium">
                      The Catalyzer
                    </h2>
                  </div>
                  <div class="flex-grow">
                    <p class="leading-relaxed text-base">
                      Blue bottle crucifix vinyl post-ironic four dollar toast
                      vegan taxidermy. Gastropub indxgo juice poutine.
                    </p>
                    <a class="mt-3 text-[#11ab9e] inline-flex items-center">
                      Learn More
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-4 h-4 ml-2"
                        viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div class="p-4 md:w-1/3">
                <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                  <div class="flex items-center mb-3">
                    <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-[#11ab9e] text-white flex-shrink-0">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-5 h-5"
                        viewBox="0 0 24 24">
                        <circle cx="6" cy="6" r="3"></circle>
                        <circle cx="6" cy="18" r="3"></circle>
                        <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                      </svg>
                    </div>
                    <h2 class="text-gray-900 text-lg title-font font-medium">
                      Neptune
                    </h2>
                  </div>
                  <div class="flex-grow">
                    <p class="leading-relaxed text-base">
                      Blue bottle crucifix vinyl post-ironic four dollar toast
                      vegan taxidermy. Gastropub indxgo juice poutine.
                    </p>
                    <a class="mt-3 text-[#11ab9e] inline-flex items-center">
                      Learn More
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-4 h-4 ml-2"
                        viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          data-aos="fade-up"
          class="text-gray-700 body-font border-t border-gray-200">
          <div class="container px-5 py-24 mx-auto flex flex-wrap">
            <div class="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
              <img
                alt="feature"
                class="object-cover object-center h-full w-full"
                src={_1}
              />
            </div>
            <div class="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
              <div class="flex flex-col mb-10 lg:items-start items-center">
                <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-[#11ab9e] mb-5">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-6 h-6"
                    viewBox="0 0 24 24">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <div class="flex-grow">
                  <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                    Shooting Stars
                  </h2>
                  <p class="leading-relaxed text-base">
                    Blue bottle crucifix vinyl post-ironic four dollar toast
                    vegan taxidermy. Gastropub indxgo juice poutine.
                  </p>
                  <a class="mt-3 text-[#11ab9e] inline-flex items-center">
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-4 h-4 ml-2"
                      viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div class="flex flex-col mb-10 lg:items-start items-center">
                <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-[#11ab9e] mb-5">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-6 h-6"
                    viewBox="0 0 24 24">
                    <circle cx="6" cy="6" r="3"></circle>
                    <circle cx="6" cy="18" r="3"></circle>
                    <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                  </svg>
                </div>
                <div class="flex-grow">
                  <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                    The Catalyzer
                  </h2>
                  <p class="leading-relaxed text-base">
                    Blue bottle crucifix vinyl post-ironic four dollar toast
                    vegan taxidermy. Gastropub indxgo juice poutine.
                  </p>
                  <a class="mt-3 text-[#11ab9e] inline-flex items-center">
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-4 h-4 ml-2"
                      viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div class="flex flex-col mb-10 lg:items-start items-center">
                <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-[#11ab9e] mb-5">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-6 h-6"
                    viewBox="0 0 24 24">
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <div class="flex-grow">
                  <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                    Neptune
                  </h2>
                  <p class="leading-relaxed text-base">
                    Blue bottle crucifix vinyl post-ironic four dollar toast
                    vegan taxidermy. Gastropub indxgo juice poutine.
                  </p>
                  <a class="mt-3 text-[#11ab9e] inline-flex items-center">
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-4 h-4 ml-2"
                      viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          data-aos="fade-up"
          class="text-gray-700 body-font border-t border-gray-200">
          <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-wrap w-full mb-20 flex-col items-center text-center">
              <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                Pitchfork Kickstarter Taxidermy
              </h1>
              <p class="lg:w-1/2 w-full leading-relaxed text-base">
                Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
                gentrify, subway tile poke farm-to-table.
              </p>
            </div>
            <div class="flex flex-wrap -m-4">
              <div class="xl:w-1/3 md:w-1/2 p-4">
                <div class="border border-gray-300 p-6 rounded-lg">
                  <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-[#11ab9e] mb-4">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-6 h-6"
                      viewBox="0 0 24 24">
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                  </div>
                  <h2 class="text-lg text-gray-900 font-medium title-font mb-2">
                    Shooting Stars
                  </h2>
                  <p class="leading-relaxed text-base">
                    Fingerstache flexitarian street art 8-bit waist co, subway
                    tile poke farm.
                  </p>
                </div>
              </div>
              <div class="xl:w-1/3 md:w-1/2 p-4">
                <div class="border border-gray-300 p-6 rounded-lg">
                  <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-[#11ab9e] mb-4">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-6 h-6"
                      viewBox="0 0 24 24">
                      <circle cx="6" cy="6" r="3"></circle>
                      <circle cx="6" cy="18" r="3"></circle>
                      <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                    </svg>
                  </div>
                  <h2 class="text-lg text-gray-900 font-medium title-font mb-2">
                    The Catalyzer
                  </h2>
                  <p class="leading-relaxed text-base">
                    Fingerstache flexitarian street art 8-bit waist co, subway
                    tile poke farm.
                  </p>
                </div>
              </div>
              <div class="xl:w-1/3 md:w-1/2 p-4">
                <div class="border border-gray-300 p-6 rounded-lg">
                  <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-[#11ab9e] mb-4">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-6 h-6"
                      viewBox="0 0 24 24">
                      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>
                  <h2 class="text-lg text-gray-900 font-medium title-font mb-2">
                    Neptune
                  </h2>
                  <p class="leading-relaxed text-base">
                    Fingerstache flexitarian street art 8-bit waist co, subway
                    tile poke farm.
                  </p>
                </div>
              </div>
              <div class="xl:w-1/3 md:w-1/2 p-4">
                <div class="border border-gray-300 p-6 rounded-lg">
                  <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-[#11ab9e] mb-4">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-6 h-6"
                      viewBox="0 0 24 24">
                      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7"></path>
                    </svg>
                  </div>
                  <h2 class="text-lg text-gray-900 font-medium title-font mb-2">
                    Melanchole
                  </h2>
                  <p class="leading-relaxed text-base">
                    Fingerstache flexitarian street art 8-bit waist co, subway
                    tile poke farm.
                  </p>
                </div>
              </div>
              <div class="xl:w-1/3 md:w-1/2 p-4">
                <div class="border border-gray-300 p-6 rounded-lg">
                  <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-[#11ab9e] mb-4">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-6 h-6"
                      viewBox="0 0 24 24">
                      <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
                    </svg>
                  </div>
                  <h2 class="text-lg text-gray-900 font-medium title-font mb-2">
                    Bunker
                  </h2>
                  <p class="leading-relaxed text-base">
                    Fingerstache flexitarian street art 8-bit waist co, subway
                    tile poke farm.
                  </p>
                </div>
              </div>
              <div class="xl:w-1/3 md:w-1/2 p-4">
                <div class="border border-gray-300 p-6 rounded-lg">
                  <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-[#11ab9e] mb-4">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-6 h-6"
                      viewBox="0 0 24 24">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    </svg>
                  </div>
                  <h2 class="text-lg text-gray-900 font-medium title-font mb-2">
                    Ramona Falls
                  </h2>
                  <p class="leading-relaxed text-base">
                    Fingerstache flexitarian street art 8-bit waist co, subway
                    tile poke farm.
                  </p>
                </div>
              </div>
            </div>
            <button class="flex mx-auto mt-16 text-white bg-[#11ab9e] border-0 py-2 px-8 focus:outline-nonerounded text-lg">
              Leanr More
            </button>
          </div>
        </section>
        <section
          data-aos="fade-up"
          class="text-gray-700 body-font border-t border-gray-200">
          <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-col text-center w-full mb-20">
              <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                Our Team
              </h1>
              <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
                Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
                gentrify, subway tile poke farm-to-table. Franzen you probably
                haven't heard of them.
              </p>
            </div>
            <div class="flex flex-wrap -m-2">
              <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <img
                    alt="team"
                    class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                    src={_1}
                  />
                  <div class="flex-grow">
                    <h2 class="text-gray-900 title-font font-medium">
                      Holden Caulfield
                    </h2>
                    <p class="text-gray-500">UI Designer</p>
                  </div>
                </div>
              </div>
              <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <img
                    alt="team"
                    class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                    src={_2}
                  />
                  <div class="flex-grow">
                    <h2 class="text-gray-900 title-font font-medium">
                      Henry Letham
                    </h2>
                    <p class="text-gray-500">CTO</p>
                  </div>
                </div>
              </div>
              <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <img
                    alt="team"
                    class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                    src={_3}
                  />
                  <div class="flex-grow">
                    <h2 class="text-gray-900 title-font font-medium">
                      Oskar Blinde
                    </h2>
                    <p class="text-gray-500">Founder</p>
                  </div>
                </div>
              </div>
              <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <img
                    alt="team"
                    class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                    src={_4}
                  />
                  <div class="flex-grow">
                    <h2 class="text-gray-900 title-font font-medium">
                      John Doe
                    </h2>
                    <p class="text-gray-500">DevOps</p>
                  </div>
                </div>
              </div>
              <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <img
                    alt="team"
                    class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                    src={_5}
                  />
                  <div class="flex-grow">
                    <h2 class="text-gray-900 title-font font-medium">
                      Martin Eden
                    </h2>
                    <p class="text-gray-500">Software Engineer</p>
                  </div>
                </div>
              </div>
              <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <img
                    alt="team"
                    class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                    src={_6}
                  />
                  <div class="flex-grow">
                    <h2 class="text-gray-900 title-font font-medium">
                      Boris Kitua
                    </h2>
                    <p class="text-gray-500">UX Researcher</p>
                  </div>
                </div>
              </div>
              <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <img
                    alt="team"
                    class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                    src={_6}
                  />
                  <div class="flex-grow">
                    <h2 class="text-gray-900 title-font font-medium">
                      Atticus Finch
                    </h2>
                    <p class="text-gray-500">QA Engineer</p>
                  </div>
                </div>
              </div>
              <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <img
                    alt="team"
                    class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                    src={_7}
                  />
                  <div class="flex-grow">
                    <h2 class="text-gray-900 title-font font-medium">
                      Alper Kamu
                    </h2>
                    <p class="text-gray-500">System</p>
                  </div>
                </div>
              </div>
              <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <img
                    alt="team"
                    class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                    src={_5}
                  />
                  <div class="flex-grow">
                    <h2 class="text-gray-900 title-font font-medium">
                      Rodrigo Monchi
                    </h2>
                    <p class="text-gray-500">Product Manager</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          data-aos="fade-up"
          class="text-gray-700 body-font overflow-hidden border-t border-gray-200">
          <div class="container px-5 py-24 mx-auto flex flex-wrap">
            <div class="lg:w-1/4 mt-48 hidden lg:block">
              <div class="mt-px border-t border-gray-300 border-b border-l rounded-tl-lg rounded-bl-lg overflow-hidden">
                <p class="bg-gray-100 text-gray-900 h-12 text-center px-4 flex items-center justify-start -mt-px">
                  Fingerstache disrupt
                </p>
                <p class="text-gray-900 h-12 text-center px-4 flex items-center justify-start">
                  Franzen hashtag
                </p>
                <p class="bg-gray-100 text-gray-900 h-12 text-center px-4 flex items-center justify-start">
                  Tilde art party
                </p>
                <p class="text-gray-900 h-12 text-center px-4 flex items-center justify-start">
                  Banh mi cornhole
                </p>
                <p class="bg-gray-100 text-gray-900 h-12 text-center px-4 flex items-center justify-start">
                  Waistcoat squid hexagon
                </p>
                <p class="text-gray-900 h-12 text-center px-4 flex items-center justify-start">
                  Pinterest occupy authentic
                </p>
                <p class="bg-gray-100 text-gray-900 h-12 text-center px-4 flex items-center justify-start">
                  Brooklyn helvetica
                </p>
                <p class="text-gray-900 h-12 text-center px-4 flex items-center justify-start">
                  Long Feature Two
                </p>
                <p class="bg-gray-100 text-gray-900 h-12 text-center px-4 flex items-center justify-start">
                  Feature One
                </p>
              </div>
            </div>
            <div class="flex lg:w-3/4 w-full flex-wrap lg:border border-gray-300 rounded-lg">
              <div class="lg:w-1/3 lg:mt-px w-full mb-10 lg:mb-0 border-2 border-gray-300 lg:border-none rounded-lg lg:rounded-none">
                <div class="px-2 text-center h-48 flex flex-col items-center justify-center">
                  <h3 class="tracking-widest">START</h3>
                  <h2 class="text-5xl text-gray-900 font-medium leading-none mb-4 mt-2">
                    Free
                  </h2>
                  <span class="text-sm text-gray-600">Next 3 months</span>
                </div>
                <p class="bg-gray-100 text-gray-600 h-12 text-center px-2 flex items-center -mt-px justify-center border-t border-gray-300">
                  Schlitz single-origin
                </p>
                <p class="text-gray-600 text-center h-12 flex items-center justify-center">
                  <span class="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                      class="w-3 h-3"
                      viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                </p>
                <p class="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-center">
                  <span class="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                      class="w-3 h-3"
                      viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                </p>
                <p class="h-12 text-gray-600 px-6 text-center leading-relaxed flex items-center justify-center">
                  Feature
                </p>
                <p class="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-center">
                  <span class="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                      class="w-3 h-3"
                      viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                </p>
                <p class="text-gray-600 text-center h-12 flex items-center justify-center">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.2"
                    class="w-5 h-5 text-gray-500"
                    viewBox="0 0 24 24">
                    <path d="M18 6L6 18M6 6l12 12"></path>
                  </svg>
                </p>
                <p class="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-center">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.2"
                    class="w-5 h-5 text-gray-500"
                    viewBox="0 0 24 24">
                    <path d="M18 6L6 18M6 6l12 12"></path>
                  </svg>
                </p>
                <p class="text-gray-600 text-center h-12 flex items-center justify-center">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.2"
                    class="w-5 h-5 text-gray-500"
                    viewBox="0 0 24 24">
                    <path d="M18 6L6 18M6 6l12 12"></path>
                  </svg>
                </p>
                <p class="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-center">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.2"
                    class="w-5 h-5 text-gray-500"
                    viewBox="0 0 24 24">
                    <path d="M18 6L6 18M6 6l12 12"></path>
                  </svg>
                </p>
                <div class="border-t border-gray-300 p-6 text-center rounded-bl-lg">
                  <Link
                    to="/payment"
                    class="flex items-center mt-auto text-white bg-[#11ab9e] border-0 py-2 px-4 w-full focus:outline-none hover:bg-indigo-600 rounded">
                    By Now
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-4 h-4 ml-auto"
                      viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                  <p class="text-xs text-gray-500 mt-3">
                    Literally you probably haven't heard of them jean shorts.
                  </p>
                </div>
              </div>
              <div class="lg:w-1/3 lg:-mt-px w-full mb-10 lg:mb-0 border-2 rounded-lg border-[#11ab9e] relative">
                <span class="bg-[#11ab9e] text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">
                  POPULAR
                </span>
                <div class="px-2 text-center h-48 flex flex-col items-center justify-center">
                  <h3 class="tracking-widest">PRO</h3>
                  <h2 class="text-5xl text-gray-900 font-medium flex items-center justify-center leading-none mb-4 mt-2">
                    $38
                    <span class="text-gray-600 text-base ml-1">/mo</span>
                  </h2>
                  <span class="text-sm text-gray-600">
                    Charging $456 per year
                  </span>
                </div>
                <p class="bg-gray-100 text-gray-600 h-12 text-center px-2 flex items-center -mt-px justify-center border-t border-gray-300">
                  Schlitz single-origin
                </p>
                <p class="text-gray-600 text-center h-12 flex items-center justify-center">
                  <span class="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                      class="w-3 h-3"
                      viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                </p>
                <p class="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-center">
                  <span class="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                      class="w-3 h-3"
                      viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                </p>
                <p class="h-12 text-gray-600 text-center leading-relaxed flex items-center justify-center">
                  Feature
                </p>
                <p class="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-center">
                  <span class="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                      class="w-3 h-3"
                      viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                </p>
                <p class="text-gray-600 text-center h-12 flex items-center justify-center">
                  <span class="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                      class="w-3 h-3"
                      viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                </p>
                <p class="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-center">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.2"
                    class="w-5 h-5 text-gray-500"
                    viewBox="0 0 24 24">
                    <path d="M18 6L6 18M6 6l12 12"></path>
                  </svg>
                </p>
                <p class="text-gray-600 text-center h-12 flex items-center justify-center">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.2"
                    class="w-5 h-5 text-gray-500"
                    viewBox="0 0 24 24">
                    <path d="M18 6L6 18M6 6l12 12"></path>
                  </svg>
                </p>
                <p class="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-center">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.2"
                    class="w-5 h-5 text-gray-500"
                    viewBox="0 0 24 24">
                    <path d="M18 6L6 18M6 6l12 12"></path>
                  </svg>
                </p>
                <div class="p-6 text-center border-t border-gray-300">
                  <Link
                    to="/payment"
                    class="flex items-center mt-auto text-white bg-[#11ab9e] border-0 py-2 px-4 w-full focus:outline-none rounded">
                    By Now
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-4 h-4 ml-auto"
                      viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                  <p class="text-xs text-gray-500 mt-3">
                    Literally you probably haven't heard of them jean shorts.
                  </p>
                </div>
              </div>
              <div class="lg:w-1/3 w-full lg:mt-px border-2 border-gray-300 lg:border-none rounded-lg lg:rounded-none">
                <div class="px-2 text-center h-48 flex flex-col items-center justify-center">
                  <h3 class="tracking-widest">BUSINESS</h3>
                  <h2 class="text-5xl text-gray-900 font-medium flex items-center justify-center leading-none mb-4 mt-2">
                    $54
                    <span class="text-gray-600 text-base ml-1">/mo</span>
                  </h2>
                  <span class="text-sm text-gray-600">
                    Charging $648 per year
                  </span>
                </div>
                <p class="bg-gray-100 text-gray-600 h-12 text-center px-2 flex items-center -mt-px justify-center border-t border-gray-300">
                  Schlitz single-origin
                </p>
                <p class="text-gray-600 text-center h-12 flex items-center justify-center">
                  <span class="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                      class="w-3 h-3"
                      viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                </p>
                <p class="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-center">
                  <span class="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                      class="w-3 h-3"
                      viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                </p>
                <p class="h-12 text-gray-600 text-center leading-relaxed flex items-center justify-center">
                  Feature
                </p>
                <p class="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-center">
                  <span class="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                      class="w-3 h-3"
                      viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                </p>
                <p class="text-gray-600 text-center h-12 flex items-center justify-center">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.2"
                    class="w-5 h-5 text-gray-500"
                    viewBox="0 0 24 24">
                    <path d="M18 6L6 18M6 6l12 12"></path>
                  </svg>
                </p>
                <p class="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-center">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.2"
                    class="w-5 h-5 text-gray-500"
                    viewBox="0 0 24 24">
                    <path d="M18 6L6 18M6 6l12 12"></path>
                  </svg>
                </p>
                <p class="text-gray-600 text-center h-12 flex items-center justify-center">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.2"
                    class="w-5 h-5 text-gray-500"
                    viewBox="0 0 24 24">
                    <path d="M18 6L6 18M6 6l12 12"></path>
                  </svg>
                </p>
                <p class="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-center">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.2"
                    class="w-5 h-5 text-gray-500"
                    viewBox="0 0 24 24">
                    <path d="M18 6L6 18M6 6l12 12"></path>
                  </svg>
                </p>
                <div class="p-6 text-center border-t border-gray-300">
                  <Link
                    to="/payment"
                    class="flex items-center mt-auto text-white bg-[#11ab9e] border-0 py-2 px-4 w-full focus:outline-nonerounded">
                    By Now
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-4 h-4 ml-auto"
                      viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                  <p class="text-xs text-gray-500 mt-3">
                    Literally you probably haven't heard of them jean shorts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          data-aos="fade-up"
          class="text-gray-700 body-font border-t border-gray-200">
          <div class="container px-5 py-24 mx-auto">
            <div class="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                class="inline-block w-8 h-8 text-gray-400 mb-8"
                viewBox="0 0 975.036 975.036">
                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
              </svg>
              <p class="leading-relaxed text-lg">
                Edison bulb retro cloud bread echo park, helvetica stumptown
                taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee
                ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut
                adaptogen squid fanny pack vaporware. Man bun next level
                coloring book skateboard four loko knausgaard. Kitsch keffiyeh
                master cleanse direct trade indigo juice before they sold out
                gentrify plaid gastropub normcore XOXO 90's pickled cindigo jean
                shorts. Slow-carb next level shoindigoitch ethical authentic, yr
                scenester sriracha forage franzen organic drinking vinegar.
              </p>
              <span class="inline-block h-1 w-10 rounded bg-[#11ab9e] mt-8 mb-6"></span>
              <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">
                HOLDEN CAULFIELD
              </h2>
              <p class="text-gray-500">Senior Product Designer</p>
            </div>
          </div>
        </section>
      </section>

      <section
        data-aos="fade-up"
        class="pt-20 lg:pt-[120px] pb-10 lg:pb-20 relative left-[6.5%]">
        <div class="container">
          <div class="flex flex-wrap justify-center -mx-4">
            <div class="w-full px-4">
              <div class="text-center mx-auto mb-[60px] lg:mb-20 max-w-[510px]">
                <span class="font-semibold text-lg text-primary mb-2 block">
                  Our Blogs
                </span>
                <h2
                  class="
                  font-bold
                  text-3xl
                  sm:text-4xl
                  md:text-[40px]
                  text-dark
                  mb-4
                  ">
                  Our Recent News
                </h2>
                <p class="text-base text-body-color">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some form.
                </p>
              </div>
            </div>
          </div>
          <div class="flex flex-wrap -mx-4">
            <div class="w-full md:w-1/2 lg:w-1/3 px-4">
              <div class="max-w-[370px] mx-auto mb-10">
                <div class="rounded overflow-hidden mb-8">
                  <img
                    src="https://cdn.tailgrids.com/1.0/assets/images/blogs/blog-01/image-01.jpg"
                    alt="image"
                    class="w-full"
                  />
                </div>
                <div className="relative top-[-80px]">
                  <span
                    class="
                     bg-primary
                     rounded
                     inline-block
                     text-center
                     py-1
                     px-4
                     text-xs
                     leading-loose
                     font-semibold
                     text-white
                     mb-5
                     ">
                    Dec 22, 2023
                  </span>
                  <h3>
                    <a
                      href="javascript:void(0)"
                      class="
                        font-semibold
                        text-xl
                        sm:text-2xl
                        lg:text-xl
                        xl:text-2xl
                        mb-4
                        inline-block
                        text-dark
                        hover:text-primary
                        ">
                      Meet AutoManage, the best AI management tools
                    </a>
                  </h3>
                  <p class="text-base text-body-color">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </div>
            </div>
            <div class="w-full md:w-1/2 lg:w-1/3 px-4">
              <div class="max-w-[370px] mx-auto mb-10">
                <div class="rounded overflow-hidden mb-8">
                  <img
                    src="https://cdn.tailgrids.com/1.0/assets/images/blogs/blog-01/image-02.jpg"
                    alt="image"
                    class="w-full"
                  />
                </div>
                <div className="relative top-[-80px]">
                  <span
                    class="
                     bg-primary
                     rounded
                     inline-block
                     text-center
                     py-1
                     px-4
                     text-xs
                     leading-loose
                     font-semibold
                     text-white
                     mb-5
                     ">
                    Mar 15, 2023
                  </span>
                  <h3>
                    <a
                      href="javascript:void(0)"
                      class="
                        font-semibold
                        text-xl
                        sm:text-2xl
                        lg:text-xl
                        xl:text-2xl
                        mb-4
                        inline-block
                        text-dark
                        hover:text-primary
                        ">
                      How to earn more money as a wellness coach
                    </a>
                  </h3>
                  <p class="text-base text-body-color">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </div>
            </div>
            <div class="w-full md:w-1/2 lg:w-1/3 px-4">
              <div class="max-w-[370px] mx-auto mb-10">
                <div class="rounded overflow-hidden mb-8">
                  <img
                    src="https://cdn.tailgrids.com/1.0/assets/images/blogs/blog-01/image-03.jpg"
                    alt="image"
                    class="w-full"
                  />
                </div>
                <div className=" relative top-[-80px]">
                  <span
                    class="
                     bg-primary
                     rounded
                     inline-block
                     text-center
                     py-1
                     px-4
                     text-xs
                     leading-loose
                     font-semibold
                     text-white
                     mb-5
                     ">
                    Jan 05, 2023
                  </span>
                  <h3>
                    <a
                      href="javascript:void(0)"
                      class="
                        font-semibold
                        text-xl
                        sm:text-2xl
                        lg:text-xl
                        xl:text-2xl
                        mb-4
                        inline-block
                        text-dark
                        hover:text-primary
                        ">
                      The no-fuss guide to upselling and cross selling
                    </a>
                  </h3>
                  <p class="text-base text-body-color">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section data-aos="fade-up">
        <div class="m-10 mx-auto p-16 sm:p-24 lg:p-48 bg-gray-200">
          <div
            class="relative rounded-lg block md:flex items-center bg-gray-100 shadow-xl"
            style={{ minHeight: "19rem" }}>
            <div
              class="relative w-full md:w-2/5 h-full overflow-hidden rounded-t-lg md:rounded-t-none md:rounded-l-lg"
              style={{ minHeight: "19rem" }}>
              <img
                class="absolute inset-0 w-full h-full object-cover object-center"
                src={_1}
                alt=""
              />
              <div class="absolute inset-0 w-full h-full bg-[#11ab9e] opacity-75"></div>
              <div class="absolute inset-0 w-full h-full flex items-center justify-center fill-current text-white">
                <svg
                  class="w-full h-24"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 239 120">
                  <path d="M4.21 86.4V33.31h8.94l4 28.85.86 9.52.87-9.52 4-28.85h9.02V86.4h-5.19V42.83l-.87 7.22-5.19 36.35h-5.19l-5.2-36.93-.57-6.64V86.4zm35.79 0h6V33.31h-6zm114.24 0h6.06V33.31h-6.06zm46.16-24h5.48v-6.01h-5.48v-17h9.23v-6.08h-15.31V86.4h15.29v-6.06h-9.23zm-60-29.14v44.19a2.89 2.89 0 1 1-5.77 0V33.31h-6.34v44.14a9.23 9.23 0 1 0 18.46 0V33.31zm40.11 44.14V42.55a2.9 2.9 0 0 0-2.89-2.89h-2.88v41h2.88a3.68 3.68 0 0 0 2.89-3.18zm-3.21-44.09a9.12 9.12 0 0 1 9.23 9.24v34.9a9.12 9.12 0 0 1-9.23 9.24h-9.23V33.31h9.23m51.64 44.14v-34.9a2.89 2.89 0 0 0-2.88-2.89h-2.89v41h2.89a3.67 3.67 0 0 0 2.88-3.18zm-2.88-44.14a9.06 9.06 0 0 1 8.94 9.24v34.9a9.12 9.12 0 0 1-9.23 9.24h-9.23V33.31h9.52M89.31 57.55c-2.88-2.6-5.19-4.91-5.19-9.23v-5.77A2.89 2.89 0 0 1 87 39.66a3.1 3.1 0 0 1 2.89 2.89v6.05H96v-6.05a9.24 9.24 0 1 0-18.47 0v6.05c.58 6.93 4.62 10.68 7.5 13.56 2.89 2.6 5.2 4.91 5.2 9.24v6a2.89 2.89 0 1 1-5.77 0v-8.89h-6.11v8.94a9.23 9.23 0 1 0 18.46 0v-6c-.57-7.22-4.32-10.68-7.5-13.85m-25.1 0C61.33 55 59 52.64 59 48.32v-5.77a2.89 2.89 0 1 1 5.77 0v6.05h6.06v-6.05a9.24 9.24 0 1 0-18.47 0v6.05c0 6.93 4 10.68 6.93 13.56 2.88 2.6 5.19 4.91 5.19 9.24v6a2.89 2.89 0 0 1-2.88 2.89 3.1 3.1 0 0 1-2.89-2.89v-8.89h-5.46v8.94a9.23 9.23 0 1 0 18.46 0v-6c-.28-7.22-4.32-10.68-7.5-13.85m56.84-9.23v-5.82a9.24 9.24 0 1 0-18.47 0v34.9a9.45 9.45 0 0 0 9 9.24 6.63 6.63 0 0 0 6.34-4l2.89 4V62.45h-9.23v6.06h2.88v8.94a2.73 2.73 0 0 1-2.88 2.89 2.89 2.89 0 0 1-2.89-2.89v-34.9a2.9 2.9 0 0 1 2.89-2.89 3.1 3.1 0 0 1 2.88 2.89v6.05h6.64z"></path>
                </svg>
              </div>
            </div>
            <div class="w-full md:w-3/5 h-full flex items-center bg-gray-100 rounded-lg">
              <div class="p-12 md:pr-24 md:pl-16 md:py-12">
                <p class="text-gray-600">
                  <span class="text-gray-900">Missguided</span> is a UK-based
                  fashion retailer that has nearly doubled in size since last
                  year. They integrated Stripe to deliver seamless checkout
                  across mobile and web for customers in 100+ countries, all
                  while automatically combating fraud.
                </p>
                <a class="flex items-baseline mt-3 text-[#11ab9e]">
                  <span>Learn more about our users</span>
                  <span class="text-xs ml-1">&#x279c;</span>
                </a>
              </div>
              <svg
                class="hidden md:block absolute inset-y-0 h-full w-24 fill-current text-gray-100 -ml-12"
                viewBox="0 0 100 100"
                preserveAspectRatio="none">
                <polygon points="50,0 100,0 50,100 0,100" />
              </svg>
            </div>
            <button class="absolute top-0 mt-32 left-0 bg-white rounded-full shadow-md h-12 w-12 text-2xl text-[#11ab9e] -ml-6 focus:outline-none focus:shadow-outline">
              <span class="block" style={{ transform: "scale(1)" }}>
                &#x279c;
              </span>
            </button>
            <button class="absolute top-0 mt-32 right-0 bg-white rounded-full shadow-md h-12 w-12 text-2xl text-[#11ab9e] -mr-6 focus:outline-none focus:shadow-outline">
              <span class="block" style={{ transform: "scale(1)" }}>
                &#x279c;
              </span>
            </button>
          </div>

          <div class="flex items-center pt-5 justify-between">
            <button class="px-2 opacity-50 hover:opacity-100 focus:opacity-100">
              <img
                class="w-full"
                src={_1}
                alt=""
                style={{ maxHeight: "60px" }}
              />
            </button>
            <button class="px-2 opacity-50 hover:opacity-100 focus:opacity-100">
              <img
                class="w-full"
                src={_2}
                alt=""
                style={{ maxHeight: "60px" }}
              />
            </button>
            <button class="px-2 opacity-50 hover:opacity-100 focus:opacity-100">
              <img
                class="w-full"
                src={_3}
                alt=""
                style={{ maxHeight: "60px" }}
              />
            </button>
            <button class="px-2 opacity-50 hover:opacity-100 focus:opacity-100">
              <img
                class="w-full"
                src={_4}
                alt=""
                style={{ maxHeight: "60px" }}
              />
            </button>
            <button class="px-2 opacity-100 hover:opacity-100 focus:opacity-100">
              <img
                class="w-full"
                src={_5}
                alt=""
                style={{ maxHeight: "60px" }}
              />
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
