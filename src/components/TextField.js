import React, { Component } from 'react';
//import logo from './icons/code.svg';
//import './index.css';


//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faBook, faVideo, faFilePdf, faPaperclip, faImage, faFileCode, faFileAudio, faCode, faLaptopCode} from '@fortawesome/free-solid-svg-icons';

export default class RichText extends Component {
  render() {
    return (
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

                <button class="bg-gray-400 hover:text-gray-100 focus:outline-none hover:bg-teal-500 hover:rounded-md text-white font-medium py-1  px-2  rounded-full">
                  Corax
       </button>
              </div>
            </div>

          </div>

        </article>
      </div>

    );
  }
}  