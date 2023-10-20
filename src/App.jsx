import LeftColumn from "./components/LeftColumn";
import NavBar from "./components/NavBar";
import RightColumn from "./components/RightColumn";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <main className=" flex" >
      {/* Left Side */}
      <Sidebar />
      {/* Right Side */}
      <div className=" px-4 py-2 flex flex-1 flex-col relative">
        <NavBar />
        <div className=" grid md:grid-cols-3 grid-cols-1 w-full">
          <div className=" col-span-2">
            <LeftColumn />
          </div>
          <div className=" w-full">
            <RightColumn />
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
