import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Table } from 'reactstrap';
import '../App.css';

export const GET_POSTS = gql`
  query GetPosts {
    posts {
      id
      author
      body
    }
  }
`;

export default () => (
  <Query query={GET_POSTS}>
    {({ loading, data }) => !loading && (
 
      
      <div>
          {data.posts.map(post => (
             <div class="max-w-xl mx-auto " key={post.id}>
             <article class="border-t border-gray-300 p-2 hover:bg-gray-100 flex flex-wrap items-start cursor-pointer">
                <blockquote class="twitter-tweet" data-lang="en" data-dnt="true" data-theme="light">
          
              <h5 class="font-bold">{post.author}</h5>
              <h>{post.body}</h>
              </blockquote>     
              </article>
            </div>
          ))}
      </div>
     
    
    )}
  </Query>
);