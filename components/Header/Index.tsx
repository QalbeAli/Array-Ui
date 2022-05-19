import Images from '../../public/images/Images'
import Image from 'next/image'
export default function Header() {
  return (
    <>
      <nav className=" dark rounded border-gray-200 bg-transparent px-2 py-8  sm:px-4">
        <div className="container mx-auto flex  ">
          <a className="flex" href="/">
            <div className="p-1.5">
              <Image src={Images.box} />
            </div>
            <span className=" bg-gradient-to-br from-red-700 to-blue-600 bg-clip-text text-2xl font-extrabold text-transparent ">
              Array
            </span>
          </a>
          <div className="flex items-center md:order-2">
            <button
              type="button"
              className="mr-3 flex rounded-full bg-gray-800 text-sm focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600 md:mr-0"
              id="user-menu-button"
              aria-expanded="false"
              data-dropdown-toggle="dropdown"
            >
              <span className="sr-only">Open user menu</span>
              {/* <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="user photo"> */}
            </button>

            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="ml-1 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <svg
                className="hidden h-6 w-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className="ml-[8rem] hidden w-full items-center justify-between md:order-1 md:flex md:w-auto"
            id="mobile-menu-2"
          >
            <ul className="mt-6 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium">
              <li>
                <a
                  href="#"
                  className="block rounded   pr-4 pl-3 text-xl text-white dark:text-white md:bg-transparent md:p-0 md:text-blue-700"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block border-b border-gray-100  pr-4 pl-3 text-xl text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
                >
                  DEX
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block border-b border-gray-100  pr-4 pl-3 text-xl text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
                >
                  LAUNCHPAD
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block border-b border-gray-100 py-2 pr-4 pl-3 text-xl text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
                >
                  STAKE
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block border-b border-gray-100  pr-4 pl-3 text-xl text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
                >
                  STATS
                </a>
              </li>

              {/* <li className=' flex border-2 px-2 mx-2 rounded-2xl'>
                <Image src={Images.avax} width="30" height="30" className=' mr-3' />
                <a
                  href="#"
                  className=" text-xl  hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
                >
                  STATS
                </a>
              </li> */}

              <div className="flex rounded-3xl border-2 border-gray-700 ">
                <div className='pt-1 px-2'>

                <Image
                  src={Images.avax}
                  width="30"
                  height="30"
                />
                </div>

                <div className="text-bold pt-1 px-3 text-xl text-white ">
                  Avalaunch
                </div>
              </div>

              <div className="flex rounded-3xl border-2 border-gray-700 ">
                <div className="text-bold px-3 pt-1 text-xl text-white ">0.013</div>
                <div className="text-bold px-3 pt-1 text-xl text-blue-500 ">
                  AVAX
                </div>
              </div>

              <li className='pt-1.5'>
                <label className="relative inline-flex cursor-pointer items-center">
                  <input
                    type="checkbox"
                    value=""
                    id="default-toggle"
                    className="peer sr-only"
                  />
                  <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800"></div>
                 
                </label>
              </li>

              <li>
                <div className='flex rounded-3xl bg-gradient-to-r from-purple-500 to-pink-500'>
                  <div className='p-1'>
                  <Image src={Images.litecoin} width="30" height="30" />
                  </div>
                  <div className='text-2xl p-1'>
                  $1.01
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className=' bg-gradient-to-r from-purple-500 to-pink-500 h-[1px]'></div>
    </>
  )
}
// style={{position:"absolute", inset:"auto auto 0px 0px", margin:"0px", transform:"translate3d(1014.67px, 913.333px, 0px)"  }}
