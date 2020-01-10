import React, { Component } from 'react';
//import logo from './logo.svg';
//import './index.css';

export default class Quotes extends Component {
  render(){
    return (
        <div class="max-w-xl mx-auto my-4">
  <article class="border-t border-b border-gray-400 p-2 hover:bg-gray-100 flex flex-wrap items-start cursor-pointer">
  <blockquote class="twitter-tweet" data-lang="en" data-dnt="true" data-theme="light">
      <p lang="en" dir="ltr">Imagine something with the feedback of Twitter, but for productive work.</p>
      &mdash; Balaji S. Srinivasan (@balajis) <a href="https://twitter.com/balajis/status/1212066576771551232?ref_src=twsrc%5Etfw">December 31, 2019</a></blockquote>
         <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
  </article>
    </div>
    );
  }
}  