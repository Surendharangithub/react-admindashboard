import {
  HomeIcon,
  ChartBarIcon,
  DocumentSearchIcon,
  MailIcon,
  CreditCardIcon,
  BellIcon,
  ArrowUpIcon,
  ExternalLinkIcon,
} from "@heroicons/react/solid";

function Sidebar() {
  return (
    //FlexNOne
    <div className=" bg-slate-800 w-14   flex-none sm:w-20 h-screen ">
      {/* Heading */}
      <div className=" h-20 flex  items-center">
        <HomeIcon
          className=" text-gray-300 fixed left-3 sm:left-6 "
          width={40}
        />
      </div>
      <div className=" fixed  left-3 sm:left-6 top-[100px]">
        <ChartBarIcon
          className=" text-gray-300 p-2 rounded-lg mb-4 bg-gray-600 "
          width={40}
        />
        <DocumentSearchIcon
          className=" text-gray-300 p-2 rounded-lg mb-4 bg-gray-600 "
          width={40}
        />
        <MailIcon
          className=" text-gray-300 p-2 rounded-lg mb-4 bg-gray-600 "
          width={40}
        />
        <CreditCardIcon
          className=" text-gray-300 p-2 rounded-lg mb-4 bg-gray-600 "
          width={40}
        />
        <BellIcon
          className=" text-gray-300 p-2 rounded-lg mb-4 bg-gray-600 "
          width={40}
        />
      </div>
      <div className=" fixed bottom-4 left-3 sm:left-6">
        <a href="#top">
          <ArrowUpIcon
            className=" text-gray-300 p-2 rounded-lg mb-4 bg-gray-600 "
            width={40}
          />
        </a>
        <ExternalLinkIcon
          className=" text-gray-300 p-2 rounded-lg mb-4 bg-gray-600 "
          width={40}
        />
      </div>
    </div>
  );
}

export default Sidebar;
