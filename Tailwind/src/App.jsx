import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  function decHandler(){
    setCount(count-1);
  }
  function incHandler(){
    setCount(count+1);
  }
  function resetHandler(){
    setCount(0);
  }

  return (
    <div className=" h-[100vh] w-[100vw] flex justify-center items-center bg-[#344151] flex-col gap-10 ">
      <div className="text-[#0398d4] font-medium text-2xl">Increment and Decrement</div>
      <div className="bg-white flex justify-center gap-12 py-3 rounded-sm text-[25px] text-[#344151]">
        <button onClick={decHandler} className="border-r-2 text-center w-20 border-[#bfbfbf] text-5xl">
          -
        </button>
        <div className="font-bold gap-12 text-5xl">
        {count}
        </div>
        <button onClick={incHandler} className="border-l-2 text-center w-20 border-[#bfbfbf] text-5xl">
          +
        </button>
      </div>
      <button onClick={resetHandler} className="bg-[#0398d4] text-white px-5 py-2 rounded-lg text-lg b">
        reset
      </button>
    </div>
  );
}

export default App;
