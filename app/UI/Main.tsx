"use client";
import * as React from 'react';
import Login from './login'; // Ensure this is the correct path
import SignupForm from './signup'; // Ensure this is the correct path
import Writepost from './writePost'; // Ensure this is the correct path
import BlogArticle from './BlogArticle'
import Footer from './Footer';
const Main: React.FC = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const [authDropdownOpen, setAuthDropdownOpen] = React.useState(false);
  const [signin, setsignin] = React.useState(false);
  const [signup, setSignup] = React.useState(false);
  const [postView, setpostView] = React.useState(false);
  const [mainArticleView, setmainArticleView] = React.useState(true);


  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleAuthDropdown = () => {
    setAuthDropdownOpen(!authDropdownOpen);
  };

  const show_Login = () => {
    setsignin(true);
    setSignup(false);
    setmainArticleView(false)
  };
  const onShowSignup = () => {
    setsignin(false);
    setSignup(true);
  };
  const hide_Login = () => {
    setsignin(false);
    setmainArticleView(true);

  };

  const show_Signup = () => {
    setSignup(true);
    setsignin(false);
    setmainArticleView(false);
  };

  const hide_Signup = () => {
    setSignup(false);
    setmainArticleView(true);

  };

  const ShowPostView = () => {
    setpostView(true);
    setmainArticleView(false);

  };
  const hide_post = () => {
    setpostView(false);
    setmainArticleView(true);

  };

  return (
    <>
      {signin ? (
        <Login onCancel={hide_Login} onShowSignup={show_Signup} />
      ) : signup ? (
        <SignupForm onCancel={hide_Signup} onShowSignin={show_Login} />
      ) : postView ? (
        <Writepost onCancel={hide_post} />
      ) : (
        <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700" style={{    position: "sticky",
          top: 0}}>
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
              <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
            </a>
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-dropdown"
              aria-expanded={menuOpen ? 'true' : 'false'}
            >
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
            <div className={`${menuOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-dropdown">
              <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <a
                    href="#"
                    onClick={ShowPostView}
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Write
                  </a>
                </li>
                <li>
                  <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
                </li>
                <li className="relative">
                  <button
                    onClick={toggleAuthDropdown}
                    id="authDropdownLink"
                    className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                  >
                    Account
                    <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                    </svg>
                  </button>
                  <div className={`${authDropdownOpen ? 'block' : 'hidden'} absolute z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}>
                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="authDropdownLink">
                      <li>
                        <a onClick={show_Login} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign In</a>
                      </li>
                      <li>
                        <a onClick={show_Signup} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign Up</a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      )}
     {mainArticleView ?<BlogArticle />:"" } 
     <Footer/>
    </>
  );
};

export default Main;
