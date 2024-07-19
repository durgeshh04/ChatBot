import React, { useState } from "react";
import "./Chat.css"; // Import your CSS file

const example = [
  "How to use Prompts",
  "How to use Tailwind CSS with React",
  "How to integrate API in ChatGPT",
  "What is OpenAI",
];

const Chat = () => {
  const [newchat, setnewChat] = useState([]);
  const [input, setInput] = useState('');

  const handledata = async () => {
    if (input.trim()) {
      setnewChat([...newchat, { role: 'user', content: input }]);
      setInput('');

      try {
        const response = await fetch('http://localhost:8000/api/chat', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            messages: [
              ...newchat,
              { role: 'user', content: input },
            ] 
          })
        });
        const resdata = await response.json();
        console.log(resdata, "Response received");

        if (resdata?.choices?.[0]?.message) {
          setnewChat([...newchat, { role: 'user', content: input }, resdata.choices[0].message]);
        } else {
          console.error("No message received from API");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
  }

  return (
    <div className="h-screen w-screen flex bg-[white]">
      <div className="w-[20%] h-screen bg-[#202123] text-white p-4">
        <div className="h-[5%] font-semibold">
          <button className="w-full h-[50px] border rounded">
            + New Chat
          </button>
        </div>
        <div className="h-[75%] overflow-scroll hide-scroll-bar mb-2">
          {[1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13].map((item, index) => (
            <div key={index} className="py-3 rounded text-center mt-5 font-semibold flex items-center hover:bg-slate-500 px-8 cursor-pointer">
              <span className="mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-message" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M8 9h8"></path>
                  <path d="M8 13h6"></path>
                  <path d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z"></path>
                </svg>
              </span>
              My Chat history
            </div>
          ))}
        </div>
        <div className="h-[20%] overflow-scroll hide-scroll-bar border-t">
          <div className="py-3 rounded text-center mt-5 font-semibold flex items-center hover:bg-slate-500 px-8 cursor-pointer">
            <span className="mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-adjustments" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path>
                <path d="M6 4v4"></path>
                <path d="M6 12v8"></path>
                <path d="M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path>
                <path d="M12 4v10"></path>
                <path d="M12 18v2"></path>
                <path d="M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path>
                <path d="M18 4v1"></path>
                <path d="M18 9v11"></path>
              </svg>
            </span>
            Settings
          </div>
          <div className="py-3 rounded text-center mt-5 flex items-center font-semibold hover:bg-slate-500 px-8 cursor-pointer">
            <span className="mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-users" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
                <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                <path d="M21 21v-2a4 4 0 0 0 -3 -3.85"></path>
              </svg>
            </span>
            Account
          </div>
        </div>
      </div>
      <div className="w-[80%]">
        {newchat.length > 0 ? (
          <div className="h-[80%] overflow-scroll hide-scroll-bar pt-6">
            {newchat.map((item, index) => (
              <div key={index} className={`w-[60%] border-slate-600 flex items-center mx-auto p-6 text-black ${item.role === "assistant" && "bg-slate-200 rounded"}`}>
                <span className="mr-6 p-2 bg-slate-500 rounded-full">
                  {item.role === "user" ? 
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
                      <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
                    </svg>
                  : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-robot" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M6 4m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z"></path>
                      <path d="M12 2v2"></path>
                      <path d="M9 12v9"></path>
                      <path d="M15 12v9"></path>
                      <path d="M5 16l4 -2"></path>
                      <path d="M15 14l4 2"></path>
                      <path d="M9 18h6"></path>
                      <path d="M10 8v.01"></path>
                      <path d="M14 8v.01"></path>
                    </svg>
                  )}
                </span>
                <div>{item.content}</div>
              </div>
            ))}
          </div>
        ) : (
          <div className="h-[80%] border flex flex-col justify-center items-center text-black">
            <div className="text-4xl font-bold">ChatGPT</div>
            <div className="flex flex-wrap justify-around max-w-[900px]">
              {example.map((item, index) => (
                <div key={index} className="text-lg font-light p-4 border border-black rounded min-w-[400px] mt-4 hover:bg-slate-300" onClick={() => setInput(item)}>
                  {item}
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="h-[20%]">
          <div className="flex flex-col items-center justify-center h-full w-full">
            <div className="w-[75%] flex justify-center relative">
              <input
                type="text"
                onChange={(e) => setInput(e.target.value)}
                className="w-full rounded text-black p-4 pr-16 bg-gray-300"
                placeholder="Type Best prompt"
                value={input}
              />
              <span className="absolute right-4 top-4 cursor-pointer" onClick={() => input.trim() ? handledata() : undefined}>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-telegram" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4"></path>
                </svg>
              </span>
            </div>

            <small className="text-black mt-2">AI Can Generate Anything</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
