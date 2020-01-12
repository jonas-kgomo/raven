import React, { Component } from 'react';
//import trendup from '../icons/trending-up.svg';
//import './index.css';


export default class Trends extends Component {
  render(){
    return (
<div className="Trends">      
<div class=" container rounded bg-gray-50 my-3 mx-auto px-2 md:px-8 shadow-lg pb-2 mb-4">
  <div class="md:flex-shrink-2">
   </div> 
  <div class="mt-2 md:mt-0 md:ml-2 ">
    <div class="uppercase flex tracking-wide text-sm text-indigo-600 font-bold py-2 mr-4"> Trends 
     <div class="justify-end pl-4 text-xs">
       <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="gray" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trending-up"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline>
       </svg>
     </div>
    </div>
  
        <div >
          <h5 class="text-gray-600"> Trending in physics</h5>
          <h5 href="#" class="block mt-1 text-xs leading-tight font-semibold text-gray-900 hover:underline">
          #quant-ph
          </h5>
        </div>
      
        <div >
        <h5 class="text-gray-600"> Trending in programming languages</h5>
          <div class="flex">
          <h5 href="#" class=" mt-1 text-xs leading-tight font-semibold text-gray-900 hover:underline">
              #python
          </h5> <h6 class="mt-1 leading-tight justify-end px-10 ml-10 text-xs text-gray-500">230K posts</h6>
         </div>    
         <div class="flex">
          <h5 href="#" class=" mt-1 text-xs leading-tight font-semibold text-gray-900 hover:underline">
              #javascript
          </h5> <h6 class="mt-1 leading-tight justify-end px-10 ml-10 text-xs text-gray-500">190K posts</h6>
         </div> 
         <div >
          <h5 class="text-gray-600"> Trending in design</h5>
          <h5 href="#" class="block mt-1 text-xs leading-tight font-semibold text-gray-900 hover:underline">
          #affordance
          </h5>
        </div>  
       <div >
          <h5 class="text-gray-600"> Trending questions</h5>
          <h5 href="#" class="block mt-1 text-xs leading-tight font-semibold text-gray-900 hover:underline">
          Is √2 still rational?
          </h5>

        </div> 

        <h5 class="text-gray-600 pt-3 text-sm"> Latest Topics & Blogs</h5>

        <div class="px-2 py-3 text-xs">
           <span class="inline-block bg-gray-200 rounded-full px-3 py-1 font-semibold text-gray-700 mr-2">#photography</span>
           <span class="inline-block bg-gray-200 rounded-full px-3 py-1 font-semibold text-gray-700 mr-2">#travel</span>
           <span class="inline-block bg-gray-200 rounded-full px-3 py-1 font-semibold text-gray-700">#winter</span>
        </div>    
           
    </div>
          
  </div>
</div>

{/* 
// New Trend */}
 
  <div class=" container rounded bg-gray-50 my-3 mx-auto px-2 md:px-8 shadow-lg pb-2 mb-4">
     
     
      {/* Recommended JOBS */}
  <div class="flex">
      <div class="uppercase flex tracking-wide text-sm text-indigo-600 font-bold py-2 mr-4"> 
      Hiring Teams
     

    </div>
    <div class="justify-end py-2 mr-4 text-xs hover:text-underline">
        <span> &middot;</span>
        <span><a href="#" class="text-xs"> View All </a></span>
     </div>
  </div>

  <div class="flex">
     <div class="py-2">
         <a href="#"><img src="https://pbs.twimg.com/profile_images/778378996580888577/MFKh-pNn_400x400.jpg" alt="stripe" class="w-10 h-10 rounded-full mr-4"/>
         </a>
     </div>
     <div class="pl-2 py-1  w-full">
         <div class="flex justify-between mb-1" >
                <div>
                    <a href="#" class="font-bold text-black"> Stripe </a>
                    <a href="#" class="text-gray-400">@Stripe</a>
                </div>
         </div>

         <div>
         <button class="bg-indigo-500 text-xs text-white hover:bg-teal-300 font-semibold hover:text-white py-1 px-3 border border-teal hover: border-transparent rounded-full"> follow </button>
         </div>
     </div>
    
  </div>

  <div class="flex">



     <div class="py-2">
         <a href="#"><img src="https://pbs.twimg.com/profile_images/1157035760085684224/iuxTnT5g_400x400.jpg" alt="stripe" class="w-10 h-10 rounded-full mr-4"/>
         </a>
     </div>
     <div class="pl-2 py-1  w-full">
         <div class="flex justify-between mb-1" >
                <div>
                    <a href="#" class="font-bold text-black"> Github </a>
                    <a href="#" class="text-gray-400">@github</a>
                </div>
         </div>

         <div>
         <button class="bg-indigo-500 text-xs text-white hover:bg-teal-300 font-semibold hover:text-white py-1 px-3 border border-teal hover: border-transparent rounded-full"> follow </button>
         </div>
     </div>
    
  </div>
   
  </div>


</div>


    );
  }
}  