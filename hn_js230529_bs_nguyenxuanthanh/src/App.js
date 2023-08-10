import { useEffect, useState } from "react";
import "./App.css";
import Letter from "./components/Letter";
import Paragraph from "./components/Paragraph";
import Word from "./components/Word";

function App() {
  const [text, setText] = useState("");
  const [wordCount, setWordCount] = useState(0);
  const [letterCount, setLetterCount] = useState(0);
  const [paragraphCount, setParagraphCount] = useState(0);
  const handleTextChange = (e) => {
    setText(e.target.value);
  };
  const handleChangeTextToUpperCase = () => {
    setText(text.toUpperCase());
  };
  const handleChangeTextToLowerCase = () => {
    setText(text.toLowerCase());
  };
  useEffect(() => {
    // TODO: Calculate word/letter/paragraph count based on the current text
    setWordCount(text.split(/\s+/).filter((word) => word !== "").length);
    setLetterCount(text.replace(/[^a-zA-Z]/g, "").length);
    setParagraphCount(text.replace(/\n$/gm, "").split(/\n/).length);
  }, [text]);
  return (
    <div className="bg-gradient-to-r from-pink-300 to-rose-300 h-screen">
      <p className="text-center py-6">
        🔠<span className="title">Word Counter</span>
      </p>
      <div className="flex justify-center w-3/4 mt-10">
        <div>
          <Word wordCount={wordCount} />
        </div>
        <div>
          <Letter letterCount={letterCount} />
        </div>
        <div>
          <Paragraph paragraphCount={paragraphCount} />
        </div>
      </div>
      <textarea
        id="message"
        rows="8"
        value={text}
        onChange={handleTextChange}
        class="block p-2.5 w-3/4 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mx-auto mt-6"
        placeholder="Enter/Pase Your Text Here"
      ></textarea>
      <div className="flex justify-center">
        <button
          type="button"
          onClick={handleChangeTextToUpperCase}
          className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-4 mb-2 mt-8"
        >
          Click to Uppercase
        </button>
        <button
          type="button"
          onClick={handleChangeTextToLowerCase}
          className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-4 mb-2 mt-8"
        >
          Click to Lowercase
        </button>
      </div>
    </div>
  );
}

export default App;
