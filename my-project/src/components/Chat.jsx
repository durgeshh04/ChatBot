import React from "react";
import "./Chat.css"; // Import your CSS file

const Chat = () => {
  return (
    <div className="w-screen h-screen bg-gray-900 flex">
      <div className="w-[20%] h-full bg-gray-950 text-white p-4 flex flex-col">
        <div className="h-[5%] mb-4">
          <button className="w-full h-[50px] border rounded">+ New Chat</button>
        </div>
        <div className="h-[75%] mt-5 overflow-y-auto scrollbar-hide">
          <div className="space-y-5">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((item, index) => (
              <div
                key={index}
                className="py-3 rounded-lg text-center font-light flex items-center hover:bg-slate-800 px-8 cursor-pointer"
              >
                <span className="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-message"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M8 9h8" />
                    <path d="M8 13h6" />
                    <path d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z" />
                  </svg>
                </span>
                My Chat History {item}
              </div>
            ))}
          </div>
        </div>
        <div className="h-[20%] overflow-y-auto scrollbar-hide border-t mt-4">
          <div className="space-y-5 mt-5">
            {[1, 2].map((item, index) => (
              <div
                key={index}
                className="py-3 rounded-lg text-center font-light flex items-center px-8 cursor-pointer"
              >
                <span className="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-message"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M8 9h8" />
                    <path d="M8 13h6" />
                    <path d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z" />
                  </svg>
                </span>
                My Chat History {item}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-[80%] h-full bg-gray-900"></div>
    </div>
  );
};

export default Chat;
