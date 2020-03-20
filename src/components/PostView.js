import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
//import { Table } from 'reactstrap';
import '../App.css';

export const GET_POSTS = gql`
  query GetPosts {
    posts {
      id
      author {
        id
        name
      }
      body
    }
  }
`;


const rowStyles = (post, canEdit) => canEdit(post)
  ? { cursor: 'pointer', fontWeight: 'bold' }
  : {};

const PostView = ({ canEdit, onEdit }) => (
  //export default () => (
  <Query query={GET_POSTS}>
    {({ loading, data }) => !loading && (

      <div>
        {data.posts.map(post => (
          <div class="max-w-xl mx-auto " key={post.id}>
            <article
              key={post.id}
              style={rowStyles(post, canEdit)}
              onClick={() => canEdit(post) && onEdit(post)}
              class="border-t border-gray-300 p-2 hover:bg-gray-100 flex flex-wrap items-start cursor-pointer">
              <blockquote class="twitter-tweet" data-lang="en" data-dnt="true" data-theme="light">

                <h5 class="font-bold">{post.author.name} <h class="font-normal text-gray-500"> @ {post.author.name} · Apr 7</h> </h5>
                <p class="font-normal">{post.body}</p>
              </blockquote>
            </article>
          </div>
        ))}
      </div>


    )}
  </Query>
);

PostView.defaultProps = {
  canEdit: () => false,
  onEdit: () => null,
};
export default PostView;