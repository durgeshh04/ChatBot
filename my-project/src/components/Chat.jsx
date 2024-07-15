import React from "react";
import "./Chat.css"; // Import your CSS file

const Chat = () => {
  return (
    <div className="w-screen h-screen bg-gray-900 flex">
      <div className="w-[20%] h-full bg-gray-950 text-white p-4 flex flex-col">
        <div className="h-[5%] mb-4">
          <button className="w-full h-[50px] border rounded font-bold">
            + New Chat
          </button>
        </div>
        <div className="h-[75%] mt-5 overflow-y-auto scrollbar-hide">
          <div className="space-y-3">
            {[...Array(13).keys()].map((item, index) => (
              <div
                key={index}
                className="py-3 rounded-lg font-light flex items-center hover:bg-slate-800 px-8 cursor-pointer"
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
                My Chat History {item + 1}
              </div>
            ))}
          </div>
        </div>
        <div className="h-[20%] overflow-none scrollbar-hide border-t-2">
          <div className="space-y-3 mt-2">
            {[...Array(2).keys()].map((item, index) => (
              <div
                key={index}
                className="py-3 rounded-lg font-light flex items-center hover:bg-slate-800 px-8 cursor-pointer"
              >
                <span className="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="icon icon-tabler icons-tabler-outline icon-tabler-adjustments-horizontal"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M14 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                    <path d="M4 6l8 0" />
                    <path d="M16 6l4 0" />
                    <path d="M8 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                    <path d="M4 12l2 0" />
                    <path d="M10 12l10 0" />
                    <path d="M17 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                    <path d="M4 18l11 0" />
                    <path d="M19 18l1 0" />
                  </svg>
                </span>
                My Chat History {item + 1}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Chat Box */}

      <div className="w-[80%]">
        <div className="h-[80%] border flex flex-col justify-center items-center text-white">
          <div className="text-4xl font-bold">Chat</div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
