import React from "react";
import "./Chat.css"; // Import your CSS file

const Chat = () => {
  const example = [
    "How to get started with React",
    "How to use taiwindcss with React",
    "How to integrate API in chatbot",
    "What is OpenAI",
  ];
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
          <div className="text-4xl font-bold">ChatBOT</div>
          <div className="flex flex-wrap justify-around max-w-[900px]">
            {example.map((item, index) => (
              <div
                key={index}
                className="text-white text-lg font-light p-4 border-2 border-black rounded-lg min-w-[400px] mt-5 hover:bg-slate-800 cursor-pointer"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Search Box  */}

        <div className="h-[20%]">
          <div className="flex flex-col items-center justify-center h-full w-full">
            <div className="relative w-[75%]">
              <input
                type="text"
                className="w-full rounded-full border-2 border-black p-4 pr-10 outline-none"
                placeholder="Message ChatBOT"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="icon icon-tabler icons-tabler-filled icon-tabler-circle-arrow-up"
                className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-4.98 3.66l-.163 .01l-.086 .016l-.142 .045l-.113 .054l-.07 .043l-.095 .071l-.058 .054l-4 4l-.083 .094a1 1 0 0 0 1.497 1.32l2.293 -2.293v5.586l.007 .117a1 1 0 0 0 1.993 -.117v-5.585l2.293 2.292l.094 .083a1 1 0 0 0 1.32 -1.497l-4 -4l-.082 -.073l-.089 -.064l-.113 -.062l-.081 -.034l-.113 -.034l-.112 -.02l-.098 -.006z" />
              </svg>
            </div>
            <small className="text-white mt-2">Ai Can Generate Anything</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
