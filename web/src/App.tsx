import "./styles/main.css";
import logoImg from "./assets/logo-esport.svg";
import { MagnifyingGlassPlus } from "phosphor-react";
function App() {
  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center ny-20">
      <img src={logoImg} alt="" />
      <h1 className="text-6xl text-white font-black mt-20">
        Your{" "}
        <span className="bg-gradient text-transparent bg-clip-text">Dual</span>{" "}
        is here
      </h1>
      <div className="grid grid-cols-6 gap-6 mt-16">
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/game-1.png" alt="" />
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradiant absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white"></strong>
            <span className="text-zinc-300 text-sn block"></span>
          </div>
        </a>
        <a href="">
          <img src="/game-2.png" alt="" />
        </a>
        <a href="">
          <img src="/game-3.png" alt="" />
        </a>
        <a href="">
          <img src="/game-4.png" alt="" />
        </a>
        <a href="">
          <img src="/game-5.png" alt="" />
        </a>
        <a href="">
          <img src="/game-6.png" alt="" />
        </a>
      </div>
      <div className="pt-1 bg-gradient mt-8 self-stretch rounded-lg overflow-hidden">
        <div className="bg-[#2A2634] px-8 py-6  flex justify-between items-center">
          <strong className="text-2xl text-white font-black block">
            
            Could not find your duo?
          </strong>
          <span className="text-zinc-400">
            Publish up and announce it to find new players!
          </span>
          <button className="py-3 px-4 bg-violet-500 hover:bg-violet-600 text-white rounded flex items-center gap-3">
            <MagnifyingGlassPlus size={24} />
            Announce
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
