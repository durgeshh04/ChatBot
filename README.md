# React Chatbot with OpenAI

This project is a simple chatbot application built using React.js and the OpenAI API. The chatbot allows users to interact with an AI model and get responses in real-time.

## Table of Contents
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [API Integration](#api-integration)
- [Contributing](#contributing)
- [License](#license)

## Prerequisites
Before you begin, ensure you have met the following requirements:
- You have installed Node.js and npm.
- You have a basic understanding of React.js.
- You have an OpenAI API key. If you don't have one, you can get it from [OpenAI](https://beta.openai.com/signup/).

## Installation

1. **Clone the repository:**
    ```sh
    git clone https://github.com/durgeshh04/ChatBot.git
    cd ChatBot
    ```

2. **Install dependencies:**
    ```sh
    npm install
    ```

3. **Create a `.env` file in the root of your project and add your OpenAI API key:**
    ```env
    REACT_APP_OPENAI_API_KEY=your-openai-api-key
    ```

## Usage

1. **Start the development server:**
    ```sh
    npm start
    ```

2. **Open your browser and navigate to:**
    ```
    http://localhost:3000
    ```

3. **Interact with the chatbot:**
    - Enter your messages in the input box and hit "Send".
    - The chatbot will respond using the OpenAI API.

## Project Structure

```sh
ChatBot/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── Chat.js
│   │   ├── ChatInput.js
│   │   └── ChatMessage.js
│   ├── App.js
│   ├── index.js
│   └── ...
├── .env
├── package.json
├── README.md
└── ...
