import { AiOutlineReddit } from "react-icons/ai";
import { MdSecurity } from "react-icons/md";
import Link from "next/link";

const Popular = () => {
  return (
    <div className="">
      <div className="mb-10">
        <div className="bg-blue-500 text-white text-center">
          <p className="pt-16">Top New Communities</p>
        </div>
        <div className="bg-white px-4">
          <div className="flex items-center justify-between  py-3 border-b border-gray-300">
            <div className="flex items-center justify-around">
              <span className="flex items-center">
                1
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-green-700 pl-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M5 15l7-7 7 7"
                  />
                </svg>
              </span>

              <div className="">
                <span className="text-blue-500 text-4xl flex items-center pl-4">
                  <AiOutlineReddit />
                  <span className="text-black text-sm pl-2">r/News</span>
                </span>
              </div>
            </div>

            <div className="">
              <button
                className="bg-blue-500 text-white px-6 py-1 rounded-full"
                disabled
              >
                Join
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between py-3 border-b border-gray-300">
            <div className="flex items-center justify-around">
              <span className="flex items-center">
                2
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-green-700 pl-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M5 15l7-7 7 7"
                  />
                </svg>
              </span>

              <div className="">
                <span className="text-blue-500 text-4xl flex items-center pl-4">
                  <AiOutlineReddit />
                  <span className="text-black text-sm pl-2">r/News</span>
                </span>
              </div>
            </div>

            <div className="">
              <button
                className="bg-blue-500 text-white px-6 py-1 rounded-full"
                disabled
              >
                Join
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between py-3 border-b border-gray-300">
            <div className="flex items-center justify-around">
              <span className="flex items-center">
                3
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-green-700 pl-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M5 15l7-7 7 7"
                  />
                </svg>
              </span>

              <div className="">
                <span className="text-blue-500 text-4xl flex items-center pl-4">
                  <AiOutlineReddit />
                  <span className="text-black text-sm pl-2">r/News</span>
                </span>
              </div>
            </div>

            <div className="">
              <button
                className="bg-blue-500 text-white px-6 py-1 rounded-full"
                disabled
              >
                Join
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between py-2  mb-3 border-b border-gray-300">
            <div className="flex items-center justify-around">
              <span className="flex items-center">
                4
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-red-700 pl-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M5 15l7-7 7 7"
                  />
                </svg>
              </span>

              <div className="">
                <span className="text-blue-500 text-4xl flex items-center pl-4">
                  <AiOutlineReddit />
                  <span className="text-black text-sm pl-2">r/News</span>
                </span>
              </div>
            </div>

            <div className="">
              <button
                className="bg-blue-500 text-white px-6 py-1 rounded-full"
                disabled
              >
                Join
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between  py-3 border-b border-gray-300">
            <div className="flex items-center justify-around">
              <span className="flex items-center">
                5
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-green-700 pl-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M5 15l7-7 7 7"
                  />
                </svg>
              </span>

              <div className="">
                <span className="text-blue-500 text-4xl flex items-center pl-4">
                  <AiOutlineReddit />
                  <span className="text-black text-sm pl-2">r/News</span>
                </span>
              </div>
            </div>

            <div className="">
              <button
                className="bg-blue-500 text-white px-6 py-1 rounded-full"
                disabled
              >
                Join
              </button>
            </div>
          </div>

          <a
            href="#"
            className="bg-blue-500 text-white block text-center py-2 rounded-full"
          >
            View All
          </a>

          <div className="text-blue-700 capitalize flex justify-evenly py-4">
            <p>Top</p>
            <p>near you</p>
            <p>aww</p>
            <p>sports</p>
          </div>
        </div>
      </div>

      <div className="mt-18 mb-10 overflow-hidden">
        <div className="bg-white px-4">
          <div className="">
            <div className="flex justify-evenly items-center p-4">
              <div className="text-red-500 text-3xl">
                <MdSecurity />
              </div>
              <div className="flex flex-col text-sm">
                <p>Reddit Premium</p>
                <p>The best Reddit experience, with monthly Coins</p>
              </div>
            </div>
          </div>

          <div className="p-4">
            <a
              href="#"
              className="bg-red-600 text-white block text-center py-2 mb-2 rounded-full"
            >
              Try it Now
            </a>
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden rounded mb-10">
        <div className="bg-white font-light text-left ">
          <p className="py-2">Popular Communities</p>
          <div className="communities text-left grid grid-cols-2 overflow-hidden">
            <p>ask reddit</p>
            <p>ask reddit</p>
            <p>ask reddit</p>
            <p>ask reddit</p>
            <p>ask reddit</p>
            <p>no stupid questions</p>
            <p>no stupid questions</p>
            <p>no stupid questions</p>
            <p>motivational quotes</p>
          </div>
        </div>
        <div className="bg-white px-4 relative absolute bottom-2">
          <div className="flex items-center text-left justify-between  py-3 border-b border-gray-300">
            <div className="bg-gray-300 text-blue-500 font-bold px-2 rounded-full pt-2">
              <a href="#">See More</a>
            </div>
          </div>

          <div className="flex items-center justify-between py-3 border-b border-gray-300">
            <div className="flex items-center justify-around">
              <span className="flex items-center">Gaming</span>
            </div>

            <div className="text-gray-400">
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
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>

          <div className="flex items-center justify-between py-3 border-b border-gray-300">
            <div className="flex items-center justify-around">
              <span className="flex items-center">Sports</span>
            </div>

            <div className="text-gray-400">
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
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>

          <div className="flex items-center justify-between py-3 border-b border-gray-300">
            <div className="flex items-center justify-around">
              <span className="flex items-center">Entertainment</span>
            </div>

            <div className="text-gray-400">
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
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>

          <div className="flex items-center justify-between py-3 border-b border-gray-300">
            <div className="flex items-center justify-around">
              <span className="flex items-center">Tv</span>
            </div>

            <div className="text-gray-400">
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
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>

          <div className="flex items-center justify-between py-3 border-b border-gray-300">
            <div className="flex items-center justify-around">
              <span className="flex items-center">Traavel</span>
            </div>

            <div className="text-gray-400">
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
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>

          <div className="flex items-center justify-between py-3 border-b border-gray-300">
            <div className="flex items-center justify-around">
              <span className="flex items-center">Basketball</span>
            </div>

            <div className="text-gray-400">
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
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="sidebar-footer  space-y-20">
        <div className="bg-white">
          <div className="sections flex border-b border-gray-300 justify-around  py-4">
            <div className="font-light">
              <ul>
                <li>
                  <a href="#">Help</a>
                </li>
                <li>
                  <a href="#">Reddit Coins</a>
                </li>
                <li>
                  <a href="#">Reddit Premium</a>
                </li>
                <li>
                  <a href="#">Topics</a>
                </li>
                <li>
                  <a href="#">Communities</a>
                </li>
                <li>
                  <a href="#">ReReddit</a>
                </li>
              </ul>
            </div>

            <div className="font-light">
              <ul>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Advertise</a>
                </li>
                <li>
                  <a href="#">Press</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Content Policy</a>
                </li>
                <li>
                  <a href="#">Blog Policy</a>
                </li>
                <li>
                  <a href="#">Mod policy</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="sections flex border-b border-gray-300 justify-around  py-4">
            <div className="font-light capitaize">
              <ul>
                <li>
                  <a href="#">english</a>
                </li>
                <li>
                  <a href="#">france</a>
                </li>
                <li>
                  <a href="#">pidgin</a>
                </li>
              </ul>
            </div>

            <div className="font-light capitalize">
              <ul>
                <li>
                  <a href="#">deutsch</a>
                </li>
                <li>
                  <a href="#">portuges</a>
                </li>
                <li>
                  <a href="#">espanyol</a>
                </li>
                <li>
                  <a href="#">Advertise</a>
                </li>
                <li>
                  <a href="#">Press</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="">
          <div className="p-4 capitalize tracking-wide font-light text-center text-gray-300">
            <p>fake reddit clone &copy; stephen.</p>
          </div>
          </div>

        
        </div>

        <div className="top-page text-center pb-4">
          <Link href='/'>
          <a  className="btn bg-blue-500 text-white font-bold px-4 py-2 rounded-full">Back Top Top</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Popular;
