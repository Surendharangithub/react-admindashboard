import { TextInput } from "@tremor/react";
import { SearchIcon } from "@heroicons/react/solid";

function NavBar() {
  return (
    <div
      id="top"
      className="w-full justify-between items-center sm:flex p-2 relative font-poppins"
    >
      <h1 className=" font-bold text-gray-200 tracking-wide">Dashboard</h1>
      <div className=" py-2">
        <TextInput placeholder="Search..." icon={SearchIcon} />
      </div>
    </div>
  );
}

export default NavBar;
