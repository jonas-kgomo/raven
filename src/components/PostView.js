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
        <div>
          
            <h>Auhor</h>

        </div>

        <div className="card">
          {data.posts.map(post => (
            <div key={post.id}>
              <h5 class="font-bold">{post.author}</h5>
              <h>{post.body}</h>
            </div>
          ))}
        </div>
      </div>
    )}
  </Query>
);