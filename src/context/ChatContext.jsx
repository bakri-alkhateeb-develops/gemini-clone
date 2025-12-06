import { createContext, useState } from "react";
import runChat from "../config/gemini";

export const ChatContext = createContext();

const ChatContextProvider = ({ children }) => {
  const [input, setInput] = useState("");

  const [recentPrompt, setRecentPrompt] = useState("");

  const [previousPrompts, setPreviousPrompts] = useState([]);

  const [showResult, setShowResult] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const [resultData, setResultData] = useState("");

  const delayPara = (index, nextWord) => {
    setTimeout(() => {
      setResultData((prev) => prev + nextWord);
    }, 75 * index);
  };

  const newChat = () => {
    setIsLoading(false);
    setShowResult(false);
    setResultData("");
    setInput("");
  };

  const onSend = async (prompt) => {
    setResultData("");
    setIsLoading(true);
    setShowResult(true);

    let response;

    if (prompt !== undefined) {
      response = await runChat(prompt);
      setRecentPrompt(prompt);
    } else {
      setPreviousPrompts((prev) => [...prev, input]);
      setRecentPrompt(input);
      response = await runChat(input);
    }

    let responseArray = response.split("**");
    let newResponse = "";

    for (let i = 0; i < responseArray.length; i++) {
      if (i % 2 === 0 || i === 0) {
        newResponse += responseArray[i];
      } else {
        newResponse += "<b>" + responseArray[i] + "</b>";
      }
    }

    let newResponseFinal = newResponse.split("*").join("<br/>");

    let newResponseArray = newResponseFinal.split(" ");

    for (let i = 0; i < newResponseArray.length; i++) {
      const nextWord = newResponseArray[i];

      delayPara(i, nextWord + " ");
    }

    setIsLoading(false);

    setInput("");
  };

  const contextValue = {
    previousPrompts,
    setPreviousPrompts,
    onSend,
    recentPrompt,
    setRecentPrompt,
    showResult,
    isLoading,
    resultData,
    input,
    setInput,
    newChat,
  };

  return (
    <ChatContext.Provider value={contextValue}>{children}</ChatContext.Provider>
  );
};

export default ChatContextProvider;
