import React from "react";
import { FaClock, FaStar } from "react-icons/fa";
import instructorImage from "../../Assets/imgs/digital-marketing-with-icons-business-people.jpg";
import courseVideo from "../Saved/videos/course video.mp4";
import { Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar";

const OverView = () => {
  return (
    <section className="flex flex-wrap justify-center p-4 w-[90%] relative left-[8%]">
      {/* <NavBar /> */}
      <div className="w-full lg:w-1/2 p-4">
        <div className="video mb-6">
          <video
            className="w-full rounded-lg border-4 border-teal-500"
            src={courseVideo}
            type="video/mp4"
            controls></video>
        </div>
        <div className="text">
          <h2 className="text-2xl font-normal mb-4 text-gray-900">
            Fundamentals of Operating Systems
          </h2>
          <div className="profile flex items-center mb-4">
            <img
              className="w-12 h-12 rounded-full border border-gray-800 p-1"
              src={instructorImage}
              alt="instructor"
            />
            <p className="ml-4 text-lg text-gray-900">Hussein Nasser</p>
          </div>
          <div className="data flex flex-col mb-4">
            <div className="flex items-center mb-2">
              <FaClock className="text-lg text-gray-900" />
              <p className="ml-2 text-gray-900">Duration: 20h 13m</p>
            </div>
            <div className="flex items-center">
              <FaStar className="text-lg text-gray-900" />
              <p className="ml-2 text-gray-900">Rating: 4.5/5.0</p>
            </div>
          </div>
          <h2 className="text-2xl font-normal mb-4 text-gray-900">
            Course Description
          </h2>
          <p className="text-base text-gray-700 leading-relaxed mb-6">
            Delve into the intricacies of operating systems to enhance
            programming efficiency in this comprehensive course, covering Linux,
            Windows, and Mac environments. Gain invaluable insights to demystify
            OS fundamentals and optimize code performance.
          </p>
          <div className="btn">
            <Link to="/payment" className="px-8 py-2 rounded-full bg-teal-500 text-white hover:bg-transparent hover:text-black border border-teal-500 transition">
              Buy Now
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/2 p-4">
        <div className="title mb-6">
          <h1 className="text-3xl font-normal text-gray-900">
            Course Overview
          </h1>
        </div>
        <div className="Description">
          <div className="section bg-white p-6 rounded-lg shadow-md mb-4">
            <div className="sectionTitle cursor-pointer flex justify-between items-center">
              <h3 className="text-xl font-normal text-gray-900">
                The Anatomy of a Process
              </h3>
            </div>
            <div className="lessons hidden ml-4">
              <ul className="list-decimal">
                <li className="text-lg font-semibold text-gray-900">
                  Simple Process Execution.
                  <p className="text-base font-normal text-gray-700">
                    Duration: 2h 30m.
                  </p>
                </li>
                <li className="text-lg font-semibold text-gray-900">
                  The Stack.
                  <p className="text-base font-normal text-gray-700">
                    Duration: 2h 30m.
                  </p>
                </li>
                <li className="text-lg font-semibold text-gray-900">
                  Process Execution with Stack.
                  <p className="text-base font-normal text-gray-700">
                    Duration: 2h 30m.
                  </p>
                </li>
                <li className="text-lg font-semibold text-gray-900">
                  Process Section Demo.
                  <p className="text-base font-normal text-gray-700">
                    Duration: 2h 30m.
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="section bg-white p-6 rounded-lg shadow-md mb-4">
            <div className="sectionTitle cursor-pointer flex justify-between items-center">
              <h3 className="text-xl font-normal text-gray-900">
                Memory Management
              </h3>
            </div>
            <div className="lessons hidden ml-4">
              <ul className="list-decimal">
                <li className="text-lg font-semibold text-gray-900">
                  Memory Management Section Intro.
                  <p className="text-base font-normal text-gray-700">
                    Duration: 2h 30m.
                  </p>
                </li>
                <li className="text-lg font-semibold text-gray-900">
                  Virtual Memory.
                  <p className="text-base font-normal text-gray-700">
                    Duration: 2h 30m.
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="section bg-white p-6 rounded-lg shadow-md mb-4">
            <div className="sectionTitle cursor-pointer flex justify-between items-center">
              <h3 className="text-xl font-normal text-gray-900">
                Inside The CPU
              </h3>
            </div>
            <div className="lessons hidden ml-4">
              <ul className="list-decimal">
                <li className="text-lg font-semibold text-gray-900">
                  CPU Components and Architecture.
                  <p className="text-base font-normal text-gray-700">
                    Duration: 2h 30m.
                  </p>
                </li>
                <li className="text-lg font-semibold text-gray-900">
                  Instruction Life Cycle.
                  <p className="text-base font-normal text-gray-700">
                    Duration: 2h 30m.
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="section bg-white p-6 rounded-lg shadow-md mb-4">
            <div className="sectionTitle cursor-pointer flex justify-between items-center">
              <h3 className="text-xl font-normal text-gray-900">
                Storage Management
              </h3>
            </div>
            <div className="lessons hidden ml-4">
              <ul className="list-decimal">
                <li className="text-lg font-semibold text-gray-900">
                  Persistent Storage.
                  <p className="text-base font-normal text-gray-700">
                    Duration: 2h 30m.
                  </p>
                </li>
                <li className="text-lg font-semibold text-gray-900">
                  File Systems.
                  <p className="text-base font-normal text-gray-700">
                    Duration: 2h 30m.
                  </p>
                </li>
                <li className="text-lg font-semibold text-gray-900">
                  Storage Management Demo.
                  <p className="text-base font-normal text-gray-700">
                    Duration: 2h 30m.
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="section bg-white p-6 rounded-lg shadow-md mb-4">
            <div className="sectionTitle cursor-pointer flex justify-between items-center">
              <h3 className="text-xl font-normal text-gray-900">
                More OS Concepts
              </h3>
            </div>
            <div className="lessons hidden ml-4">
              <ul className="list-decimal">
                <li className="text-lg font-semibold text-gray-900">
                  OS Concepts Section Intro.
                  <p className="text-base font-normal text-gray-700">
                    Duration: 2h 30m.
                  </p>
                </li>
                <li className="text-lg font-semibold text-gray-900">
                  Compilers and Linkers.
                  <p className="text-base font-normal text-gray-700">
                    Duration: 2h 30m.
                  </p>
                </li>
                <li className="text-lg font-semibold text-gray-900">
                  Virtualization and Containerization.
                  <p className="text-base font-normal text-gray-700">
                    Duration: 2h 30m.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverView;
