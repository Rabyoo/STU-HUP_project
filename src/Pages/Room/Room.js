import React from "react";
import "./Room.css";

const Room = () => {
  return (
    <>
      <div className="room">
        <header id="nav" className="bg-gray-800 p-4">
          <div className="flex justify-between items-center">
            <button id="members__button" className="text-gray-200">
              <svg
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd">
                <path
                  d="M24 18v1h-24v-1h24zm0-6v1h-24v-1h24zm0-6v1h-24v-1h24z"
                  fill="#ede0e0"
                />
                <path d="M24 19h-24v-1h24v1zm0-6h-24v-1h24v1zm0-6h-24v-1h24v1z" />
              </svg>
            </button>
            <a href="lobby" className="flex items-center text-white">
              <img
                src="./assets/images/logo.png"
                alt="Site Logo"
                className="h-8 w-8 mr-2"
              />
              <span>STU-HUB</span>
            </a>
          </div>

          <div className="flex space-x-4 mt-4">
            <button id="chat__button" className="text-gray-200">
              <svg
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                fill="#ede0e0"
                clipRule="evenodd">
                <path d="M24 20h-3v4l-5.333-4h-7.667v-4h2v2h6.333l2.667 2v-2h3v-8.001h-2v-2h4v12.001zm-15.667-6l-5.333 4v-4h-3v-14.001l18 .001v14h-9.667zm-6.333-2h3v2l2.667-2h8.333v-10l-14-.001v10.001z" />
              </svg>
            </button>
            <a
              className="flex items-center text-white"
              id="create__room__btn"
              href="lobby">
              Create Room
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="#ede0e0"
                viewBox="0 0 24 24"
                className="ml-2">
                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z" />
              </svg>
            </a>
          </div>
        </header>

        <main className="container mx-auto p-4">
          <div id="room__container" className="flex">
            <section
              id="members__container"
              className="w-1/4 bg-gray-100 p-4 rounded-lg">
              <div
                id="members__header"
                className="flex justify-between items-center mb-4">
                <p className="text-lg font-semibold">Participants</p>
                <strong id="members__count" className="text-lg font-semibold">
                  27
                </strong>
              </div>

              <div id="member__list" className="space-y-2">
                {Array.from({ length: 27 }, (_, index) => (
                  <div
                    key={index}
                    className="member__wrapper flex items-center">
                    <span className="green__icon bg-green-500 rounded-full h-3 w-3 mr-2"></span>
                    <p className="member_name">Participant {index + 1}</p>
                  </div>
                ))}
              </div>
            </section>

            <section
              id="stream__container"
              className="w-3/4 bg-gray-200 p-4 rounded-lg ml-4">
              <div className="stream__actions flex space-x-4">
                <button className="text-gray-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24">
                    <path d="M5 4h-3v-1h3v1zm10.93 0l.812 1.219c.743 1.115 1.987 1.781 3.328 1.781h1.93v13h-20v-13h3.93c1.341 0 2.585-.666 3.328-1.781l.812-1.219h5.86zm1.07-2h-8l-1.406 2.109c-.371.557-.995.891-1.664.891h-5.93v17h24v-17h-3.93c-.669 0-1.293-.334-1.664-.891l-1.406-2.109zm-11 8c0-.552-.447-1-1-1s-1 .448-1 1 .447 1 1 1 1-.448 1-1zm7 0c1.654 0 3 1.346 3 3s-1.346 3-3 3-3-1.346-3-3 1.346-3 3-3zm0-2c-2.761 0-5 2.239-5 5s2.239 5 5 5 5-2.239 5-5-2.239-5-5-5z" />
                  </svg>
                </button>
                <button className="text-gray-600 active">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24">
                    <path d="M12 2c1.103 0 2 .897 2 2v7c0 1.103-.897 2-2 2s-2-.897-2-2v-7c0-1.103.897-2 2-2zm0-2c-2.209 0-4 1.791-4 4v7c0 2.209 1.791 4 4 4s4-1.791 4-4v-7c0-2.209-1.791-4-4-4zm8 9v2c0 4.418-3.582 8-8 8s-8-3.582-8-8v-2h2v2c0 3.309 2.691 6 6 6s6-2.691 6-6v-2h2zm-7 13v-2h-2v2h-4v2h10v-2h-4z" />
                  </svg>
                </button>
                <button className="text-gray-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24">
                    <path d="M0 1v17h24v-17h-24zm22 15h-20v-13h20v13zm-6.599 4l2.599 3h-12l2.599-3h6.802z" />
                  </svg>
                </button>
                <button className="text-gray-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24">
                    <path d="M16 10v-5l8 7-8 7v-5h-8v-4h8zm-16-8v20h14v-2h-12v-16h12v-2h-14z" />
                  </svg>
                </button>
              </div>
            </section>

            <section
              id="messages__container"
              className="w-1/4 bg-white p-4 rounded-lg ml-4">
              <div id="messages" className="space-y-4">
                <div className="message__wrapper">
                  <div className="message__body__bot bg-gray-200 p-2 rounded-lg">
                    <strong className="message__author__bot text-gray-700">
                      🤖 Mumble Bot
                    </strong>
                    <p className="message__text__bot text-gray-600">
                      Welcome to the room, Don't be shy, say hello!
                    </p>
                  </div>
                </div>

                <div className="message__wrapper">
                  <div className="message__body__bot bg-gray-200 p-2 rounded-lg">
                    <strong className="message__author__bot text-gray-700">
                      🤖 Mumble Bot
                    </strong>
                    <p className="message__text__bot text-gray-600">
                      Hey everyone, let's have a great discussion today!
                    </p>
                  </div>
                </div>

                <div className="message__wrapper">
                  <div className="message__body bg-gray-100 p-2 rounded-lg">
                    <strong className="message__author text-gray-700">
                      Participant 1
                    </strong>
                    <p className="message__text text-gray-600">Hi everyone!</p>
                  </div>
                </div>
              </div>

              <form id="message__form" className="flex mt-4">
                <input
                  type="text"
                  id="message__input"
                  className="flex-1 p-2 border rounded-l-lg"
                  placeholder="Type your message here..."
                />
                <button
                  type="submit"
                  className="bg-gray-800 text-white p-2 rounded-r-lg">
                  Send
                </button>
              </form>
            </section>
          </div>
        </main>
      </div>
    </>
  );
};

export default Room;