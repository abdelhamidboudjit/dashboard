import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import {
  faGear,
  faArrowRightFromBracket,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import DarkMode from "../DarkMode/DarkMode";
import { Context } from "../../context/Provider";
import { useContext } from "react";
const Navigation = () => {
  const [hide, setHide] = useContext(Context);

  return (
    <nav className="p-2 w-screen px-6 bg-white flex gap-3 h-14 items-center dark:bg-kaniDk justify-between">
      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        width="150"
        viewBox="0 0 505.000000 137.000000"
        preserveAspectRatio="xMidYMid meet"
      >
        <g
          transform="translate(0.000000,137.000000) scale(0.100000,-0.100000)"
          fill="red"
          stroke="none"
        >
          <path
            d="M372 1328 c-7 -7 -12 -44 -12 -95 l0 -83 -62 -31 c-80 -40 -184 -145
-220 -220 -36 -74 -47 -128 -48 -220 0 -184 102 -352 266 -435 l59 -30 3 -84
c3 -90 12 -110 46 -110 37 0 46 19 46 97 l0 73 55 0 55 0 0 -73 c0 -80 9 -97
52 -97 38 0 48 24 48 114 l0 75 67 32 c69 33 153 102 153 125 0 21 -40 56 -56
50 -8 -3 -38 -23 -67 -45 -201 -151 -490 -81 -594 145 -115 251 59 536 336
552 96 5 181 -22 264 -83 61 -45 89 -49 108 -14 6 13 6 25 0 38 -18 33 -84 83
-148 113 l-63 30 0 75 c0 89 -10 113 -48 113 -43 0 -52 -17 -52 -97 l0 -73
-55 0 -55 0 0 73 c0 77 -9 97 -45 97 -12 0 -26 -5 -33 -12z"
          />
          <path
            d="M4425 904 c-12 -13 -15 -51 -15 -230 l0 -214 40 0 40 0 0 158 0 157
158 -164 c147 -151 160 -163 180 -152 22 11 22 16 22 231 l0 220 -35 0 -35 0
0 -156 c0 -96 -4 -154 -10 -152 -5 2 -73 71 -151 153 -77 83 -149 153 -160
157 -11 4 -24 1 -34 -8z"
          />
          <path
            d="M836 894 c-14 -13 -16 -48 -16 -225 l0 -209 40 0 40 0 0 185 0 186
143 -3 142 -3 3 -41 c2 -29 -3 -47 -18 -67 -21 -26 -24 -27 -126 -27 l-104 0
0 -40 c0 -37 2 -40 28 -40 19 0 50 -21 111 -75 l84 -75 58 0 c33 0 59 2 59 3
0 2 -36 35 -81 73 -73 63 -78 69 -57 75 89 24 122 70 123 172 0 65 -2 70 -33
98 l-32 29 -174 0 c-145 0 -177 -3 -190 -16z"
          />
          <path
            d="M1332 801 c3 -101 5 -112 28 -136 34 -37 72 -55 115 -55 l35 0 0 -75
0 -75 40 0 40 0 0 74 0 73 46 6 c97 11 134 67 134 205 l0 92 -40 0 -40 0 0
-90 c0 -125 -6 -130 -143 -130 -134 0 -137 3 -137 128 l0 92 -41 0 -41 0 4
-109z"
          />
          <path
            d="M1915 900 c-11 -4 -31 -20 -45 -35 -25 -26 -25 -30 -28 -216 l-4
-189 41 0 41 0 0 173 c0 121 4 177 12 185 8 8 49 12 120 12 102 0 110 -2 133
-25 19 -18 25 -35 25 -65 0 -30 -6 -47 -25 -65 -22 -23 -31 -25 -125 -25
l-100 0 0 -40 0 -40 103 0 c134 1 179 19 209 86 40 93 6 207 -72 238 -44 17
-247 22 -285 6z"
          />
          <path
            d="M2320 870 l0 -40 90 0 90 0 0 -185 0 -185 40 0 40 0 0 185 0 185 90
0 90 0 0 40 0 40 -220 0 -220 0 0 -40z"
          />
          <path
            d="M2903 891 c-26 -12 -52 -35 -70 -62 -26 -40 -28 -49 -28 -148 0 -93
3 -110 23 -143 39 -63 82 -82 193 -86 193 -8 259 50 259 228 0 173 -61 230
-242 230 -70 0 -104 -5 -135 -19z m273 -94 c21 -25 24 -37 24 -115 -1 -129
-25 -152 -165 -152 -86 0 -88 1 -121 34 -33 33 -34 36 -34 113 1 133 26 155
173 151 94 -3 100 -4 123 -31z"
          />
          <path d="M3360 685 l0 -225 40 0 40 0 0 225 0 225 -40 0 -40 0 0 -225z" />
          <path
            d="M3625 820 c-70 -70 -96 -90 -117 -90 -26 0 -28 -3 -28 -40 0 -37 2
-40 27 -40 20 0 46 -21 116 -95 l89 -95 56 0 57 0 -113 112 -112 113 112 112
113 113 -55 0 -55 0 -90 -90z"
          />
          <path
            d="M4019 896 c-114 -40 -149 -114 -149 -313 l0 -123 40 0 40 0 0 55 0
55 145 0 145 0 0 -55 0 -55 41 0 40 0 -3 215 c-2 179 -6 217 -18 225 -22 14
-239 11 -281 -4z m221 -156 l0 -90 -146 0 -147 0 6 46 c10 96 67 134 200 134
l87 0 0 -90z"
          />
          <path d="M4950 685 l0 -225 40 0 40 0 0 225 0 225 -40 0 -40 0 0 -225z" />
        </g>
      </svg>
      <div className="bg-kani dark:bg-black border border-none rounded-lg w-96 md:flex gap-2 pl-3 items-center hidden">
        <svg
          width="25"
          height="25"
          fill="#616161"
          xmlns="http://www.w3.org/2000/svg"
          fillRule="evenodd"
          clipRule="evenodd"
        >
          <path d="M15.853 16.56c-1.683 1.517-3.911 2.44-6.353 2.44-5.243 0-9.5-4.257-9.5-9.5s4.257-9.5 9.5-9.5 9.5 4.257 9.5 9.5c0 2.442-.923 4.67-2.44 6.353l7.44 7.44-.707.707-7.44-7.44zm-6.353-15.56c4.691 0 8.5 3.809 8.5 8.5s-3.809 8.5-8.5 8.5-8.5-3.809-8.5-8.5 3.809-8.5 8.5-8.5z" />
        </svg>

        <input
          type="text"
          id="first_name"
          className=" placeholder-gray-700 text-gray-800 dark:text-gray-500 dark:placeholder-gray-600 text-sm bg-transparent  focus-visible:outline-none block w-full p-2.5"
          placeholder="search"
          required
        />
      </div>
      <div className="flex items-center gap-3">
        <DarkMode className="" />
        <div className="dropdown inline-block relative">
          <button className=" text-gray-700 font-semibold py-2 pl-4 rounded inline-flex items-center">
            <span className="mr-1 flex gap-6 items-center">
              <Image
                src="/profile.jpe"
                alt="profile"
                width={45}
                height={45}
                className="rounded-full"
              />
              <h3 className="font-normal text-gray-700 text-300 hidden md:flex">
                John Deo
              </h3>
            </span>
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
            </svg>
          </button>
          <ul className="z-10 dropdown-menu absolute hidden translate-x-[-50px] md:translate-x-0 w-full min-w-[150px]  text-gray-700 pt-1">
            <li className="">
              <a
                className=" bg-white w-full dark:bg-kaniDk dark:hover:text-gray-300 dark:hover:bg-gray-600 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                href="#"
              >
                <FontAwesomeIcon className="mr-6 inline w-6" icon={faUser} />
                Profile
              </a>
            </li>
            <hr className="border-gray-300 dark:border-gray-800" />
            <li className="">
              <a
                className=" bg-white dark:bg-kaniDk dark:hover:text-gray-300 dark:hover:bg-gray-600 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                href="#"
              >
                <FontAwesomeIcon className="inline mr-6 w-6" icon={faGear} />
                Settings
              </a>
            </li>
            <hr className="border-gray-300 dark:border-gray-800" />
            <li className="">
              <a
                className="rounded-b bg-white dark:bg-kaniDk dark:hover:text-gray-300 dark:hover:bg-gray-600 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                href="#"
              >
                <FontAwesomeIcon
                  className="mr-6 w-6 inline"
                  icon={faArrowRightFromBracket}
                />
                Logout
              </a>
            </li>
          </ul>
        </div>
        <FontAwesomeIcon
          icon={faBars}
          className="w-6 cursor-pointer lg:hidden"
          onClick={() => setHide(!hide)}
        />
      </div>
    </nav>
  );
};

export default Navigation;
