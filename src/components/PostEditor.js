import React from 'react';
import gql from 'graphql-tag';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from 'reactstrap';
import { Form as FinalForm, Field } from 'react-final-form';
//import 'bootstrap/dist/css/bootstrap.min.css';

import client from '../apollo';
import { GET_POSTS } from './PostView';

const SUBMIT_POST = gql`
  mutation SubmitPost($input: PostInput!) {
    submitPost(input: $input) {
      id
    }
  }
`;

const PostEditor = ({ post, onClose }) => (

  <div class="modal opacity-0 pointer-events-none fixed  content-center   w-full h-full top-0 left-20 flex flex-wrap items-center justify-center" id="raven">


    <FinalForm

      onSubmit={async ({ id, author, body }) => {
        const input = { id, author, body };

        await client.mutate({
          variables: { input },
          mutation: SUBMIT_POST,
          refetchQueries: () => [{ query: GET_POSTS }],
        });

        onClose();
      }}
      initialValues={post}
      render={({ handleSubmit, pristine, invalid }) => (

        <Modal isOpen toggle={onClose} >
          <form onSubmit={handleSubmit}>


            <div class="modal-show top-40  ml-auto mr-auto w-1/3 mt-40  bg-gray-800 cursor-pointer rounded-lg flex flex-col items-center text-sm z-50">
              <ModalHeader toggle={onClose} >
                {post.id ? 'Edit Post' : 'New Post'}
              </ModalHeader>
              <ModalBody >
              
                <FormGroup >
                  <Label>Author</Label>
                  <Field
                    required
                    name="author"
                    className="form-control"
                    component="input"
                  />
                </FormGroup>
                <FormGroup>
                  <Label>Body</Label>
                  <img src="https://i0.wp.com/seedsrevolution.com/wp-content/uploads/2019/10/7_avatar-512.png?w=512&ssl=1" alt="avatar" class="h-10 w-10 rounded-full" />

                  <Field
                    required
                    placholder="What's happening"
                    name="body"
                    className="form-control"
                    component="input"
                  />

                </FormGroup>
              </ModalBody>
              <ModalFooter class="justify-between">
                <Button type="submit" disabled={pristine} color="primary" class="bg-blue-400 rounded-full text-blue-100 inline-block py-2 px-4">Save</Button>
     
                <Button color="secondary" onClick={onClose}>Cancel</Button>
              </ModalFooter>
            </div>
          </form>
        </Modal>
      )}
    />
  </div>
);
export default PostEditor;

