import React, { Component } from 'react';
//import logo from './logo.svg';
import './index.css';
import PostView from './components/PostView';
import PostEditor from './components/PostEditor';
import Tweet from './components/Tweet';
import TextField from './components/TextField';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBook, faBookmark, faInbox, faBoxOpen, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import Quotes from './components/Qoutes';
import user from './icons/user.png';
import Trends from './components/Trends';




class App extends Component {

  state = {
    editing: null,
  };
  render() {
    const { editing } = this.state;


    return (
      <body class="bg-white font-sans">

        <div>
          <div class="container mx-auto flex items-center py-10 px-15">

            <nav class="w-2/5">
              <a href="#" class="top-nav"><FontAwesomeIcon icon={faHome} /> Home</a>
              <div class="group inline-block relative">
                <a href="#" class="top-nav"><FontAwesomeIcon icon={faBook} /> arXiv </a>
                <div class="absolute inline-flex mx-auto hidden group-hover:block border-teal-500 group-hover:visible my-3 text-xs bg-gray-100  text-teal-500 border-t-4 border-gray py-3 px-4">
                  <p class="font-bold"><FontAwesomeIcon icon={faInfoCircle} />Info</p>
                  <p>Find latest research and papers</p>
                </div>
              </div>
              <a href="#" class="top-nav"><FontAwesomeIcon icon={faBookmark} /> Notes </a>
              <a href="#" class="top-nav"><FontAwesomeIcon icon={faBoxOpen} /> Jobs </a>
            </nav>

            <div class="w-3/5 flex justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="gray" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-twitter">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 4 2z"></path>
              </svg>
            </div>
            <div class="w-3/5 flex justify-end">
              <div class="mr-4">
                <input class="focus:outline-none bg-gray-200 h-8 px-4 py-4 text-xs w-40 rounded-full" placeholder="Search Raven"></input>
              </div>
              <div class="mr-4">
                <img src="https://i0.wp.com/seedsrevolution.com/wp-content/uploads/2019/10/7_avatar-512.png?w=512&ssl=1" alt="avatar" class="h-10 w-10 rounded-full" />

              </div>
              <button class="font-small bg-indigo-500 hover:text-gray-100 focus:outline-none hover:bg-indigo-400 hover:rounded-full text-white font-bold py-1 px-4  rounded-full">
                Login
       </button>
            </div>

          </div>

          <div class="flex-inline justify-center bg-gray-200 m-auto p-4 w-1/2 rounded shadow-lg">
            <div class="uppercase text-center py-3 tracking-wide text-md text-indigo-500 font-bold">Welcome to Raven</div>


          </div>



        </div>



        <div class="container mx-auto flex mt-3 text-sm leading-normal">
          <div class="flex -mx-2">
            <div class="w-1/5 flex-inline px-2 text-xs">
              <div class="pr-6  mt-8 mb-4 ">
                <h1><a class="font-semibold"> Raven </a></h1>
              </div>

              <div class="mb-4 text-gray-500">
                A website for rich-text and markdown rendered  ravens <i>(tweets)</i><a href="#" class="text-gray">@raven-tweets</a>
              </div>


              <div class="mb-2 flex ">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71">
                </path></svg><a class="a" href="#"> https://github.com/jonas-kgomo/raven</a>
              </div>


              <div class="mb-4 flex">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-calendar"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line></svg>
                <a> Joined Aug 2020</a>
              </div>

              <div class="mb-4 flex">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-calendar"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line></svg>
                <a> Milstones </a>
              </div>
            </div>

            {/* BUTTON FUNCTION */}
            <div class="w-1/2 px-3">
              <div class=" max-w-xl mx-auto my-4 border-b-8">
                <article class="border-t border-b border-gray p-2 hover:bg-white flex flex-wrap items-start cursor-pointer">

                  <img src="https://pbs.twimg.com/profile_images/1111915116579086336/HKxtnLsO_reasonably_small.jpg" class="rounded-full w-12 h-12 mr-3" />

                  <div class="flex flex-wrap justify-start items-start flex-1">

                    <input class=" block w-full text-gray-700 focus:button-teal py-1 px-4 focus:outline-none focus:text-gray " type="text" placeholder="What are you working on?">
                    </input>

                    <div class="container flex items-center py-4 ">
                      <a href="#" class="text"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-file-text"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg></a>
                      <a href="#" class="text"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-code"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg></a>
                      <a href="#" class="text">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-image"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg> </a>
                      <a href="#" class="text">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-paperclip"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path></svg>
                      </a>

                      <div class="w-3/5 justify-end text-gray-600 items-center flex">
                        <p class='tooltip mr-2'>
                          <a href="#" class=""><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-monitor"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg></a>

                          <span class='tooltip-text bg-teal-200 px-3 -mb-4 -ml-6 rounded'>slide-mode</span>
                        </p>

                        <button
                          className="my-2"
                          color="primary"
                          onClick={() => this.setState({ editing: {} })}
                          class="bg-gray-400 hover:text-gray-100 focus:outline-none hover:bg-teal-500 hover:rounded-md text-white font-medium py-1  px-2  rounded-full">
                          Corax
                      </button>
                      </div>
                    </div>

                  </div>

                </article>
              </div>


              <PostView
                canEdit={() => true}
                onEdit={(post) => this.setState({ editing: post })}
              />
              {editing && (
                <PostEditor
                  post={editing}
                  onClose={() => this.setState({ editing: null })}
                />
              )}
              <Tweet />
            </div>

            <div class="w-1/3 px-3">
              <Trends />
              <Quotes />
            </div>

          </div>
        </div>



      </body>
    );
  }
}

export default App;
