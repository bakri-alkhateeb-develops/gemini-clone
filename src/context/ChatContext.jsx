import { createContext } from "react";
import runChat from "../config/gemini";

export const ChatContext = createContext();

const ChatContextProvider = ({ children }) => {
  const [input, setInput] = useState("");

  const [recentPrompt, setRecentPrompt] = useState("");

  const [previousPrompts, setPreviousPrompts] = useState([]);

  const [showResult, setShowResult] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const onSend = async (prompt) => {
    const response = await runChat(prompt);
    return response;
  };

  const contextValue = {};

  return (
    <ChatContext.Provider value={contextValue}>{children}</ChatContext.Provider>
  );
};

export default ChatContextProvider;
