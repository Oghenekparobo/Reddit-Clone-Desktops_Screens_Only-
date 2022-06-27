import { AiOutlineReddit } from "react-icons/ai";

const Nav = () => {
  return (
    <div className="navbar flex items-center justify-between shadow p-2">
      <div className="nav-logo flex items-center mx-4 pr-4">
        <div className="text-red-500 text-4xl font-bold">
          <AiOutlineReddit />
        </div>
        <h6 className="text-xl font-bold px-2">Reddit</h6>
      </div>

<div className="flex-1">
<div className="searchbar flex">
        <input type="search" name="" id="" className="text-xl bg-gray-100 outline-none w-70 p-1 flex-1 mx-2" placeholder="Search Reddit"/>
      </div>

</div>

    <div className="">
    <div className="signins flex ">
        <a
          href="#"
          className="login bg-transparent text-blue-500 border mx-4 border-blue-500 px-4 py-2 px-10 rounded-full font-bold"
        >
          Log In
        </a>
        <a
          href="#"
          className="login bg-blue-500 text-white border mx-4 border-blue-500 px-4 py-2 px-10 rounded-full font-bold"
        >
          Log In
        </a>
      </div>
    </div>
      

      <div className="user flex mx-4 text-gray-400">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
};

export default Nav;
