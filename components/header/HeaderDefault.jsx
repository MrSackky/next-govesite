import Link from 'next/link';
import { Layout, Menu, Breadcrumb, Image } from 'antd';
/* Components */
// import DarkModeToggle from "../DarkModeToggle";
import { useState } from 'react'
const _Header = ({ props }) => {

  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <nav className='fixed z-50 w-full flex items-center flex-wrap  h-14  bg-white pt-1 pb-1'>
        <div className="lg:w-1/6 xl:w-1/6 2xl:w-1/6 sm:w-3/6 md:w-3/6 pl-3 ">
          <Link href='index-government' >
            <a className='inline-flex items-center p-2 mr-4 '>
              <img
                // preview={false}
                // height='40px'
                // width='auto'
                className="h-8 w-auto"
                src={process.env.PUBLIC_URL + 'assets/images/logo-government.png'}
              />
            </a>
          </Link>
        </div>

        <button
          className='pr-3 inline-flex p-3 hover:bg-green-600 rounded lg:hidden text-green-900 ml-auto hover:text-white outline-none '
          onClick={handleClick}
        >
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>
        <div
          className={`${active ? '' : 'hidden'
            } bg-white w-full lg:inline-flex lg:flex-grow sm:w-6/6 lg:w-4/6 justify-center pl-3 pr-3 content-center`}
        >
          <div className='text-center lg:inline-flex lg:flex-row lg:w-auto w-full lg:items-center justify-center items-start  flex flex-col lg:h-auto'>
            <Link href='#property'>
              <a onClick={handleClick} className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-green-900 font-bold items-center justify-center   hover:text-green-900 '>
                ???????????????????????????
              </a>
            </Link>
            <Link href='#package'>
              <a onClick={handleClick} className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-green-900 font-bold items-center justify-center  hover:text-green-900'>
                ??????????????????
              </a>
            </Link>
            <Link href='#contact'>
              <a onClick={handleClick} className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-green-900 font-bold items-center justify-center hover:text-green-900'>
                ???????????????????????????
              </a>
            </Link>

          </div>
          <div className="lg:hidden h-1 border-t-2 border-gray-200">

          </div>
        </div>
        <div
          className={`${active ? '' : 'hidden'
            }  text-center bg-white w-full lg:inline-flex lg:flex-grow lg:w-1/6 justify-end sm:h-12 md:h-12 pl-3 pr-3 items-center pb-18`}
        >
          <div className='lg:inline-flex lg:flex-row lg:w-auto w-full lg:items-center justify-center items-start  flex flex-col lg:h-auto'>
            <Link href='login'>
              <a onClick={handleClick} className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-green-900 font-bold items-center justify-center  hover:text-green-900'>
                ?????????????????????????????????
              </a>
            </Link>

            <Link href='register'>
              <a onClick={handleClick} className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded h-8 text-white bg-green-600 font-bold items-center justify-center hover:bg-green-600 hover:text-white'>
                ?????????????????????????????????
              </a>
            </Link>
            <div className="lg:hidden h-4">

            </div>
          </div>

        </div>

      </nav>
      {/* <nav className="navbar navbar-expand-lg p-2">
        <Link href="/">
          <a className="nav-item nav-link">Home2</a>
        </Link>
        {/* <Link href="/about">
          <a className="nav-item nav-link">About</a>
        </Link> */}
      {/* <Link href="/forever">
          <a className="nav-item nav-link">Forever</a>
        </Link> */}
      {/* <a href="/non-existing" className="nav-item nav-link">
          Non Existing Page
        </a> */}
      {/* <span className="align-self-center ml-auto">
          <DarkModeToggle />
        </span> 
      </nav>
      <style jsx>{`
        a {
          margin: 0 10px 0 0;
        }
      `}</style> */}
    </>
  );
};

export default _Header;
