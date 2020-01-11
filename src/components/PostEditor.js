/* import React from 'react';
import gql from 'graphql-tag';
import { Form, FormGroup, Label, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Form as FinalForm, Field } from 'react-final-form';
import client from '../apollo';
import { GET_POSTS } from './PostView';

const SUBMIT_POST = gql`
  mutation SubmitPost($input: PostInput!){
      submitPost(input: $input) {
          id
      }
  }
`

//mutation connects to backend, we use the type PostInput


const PostEditor = ({ post, onClose }) => (

    // final form takes the onSubmit function that passes data by the user
    <FinalForm
    onSubmit = {async ({ id, author, body }) => {
        const input = { id, author, body };

        await client.mutate({
            variables: { input },
            mutation: SUBMIT_POST,
            refetchQueries: () => [{ query: GET_POSTS }],
        });

        // closing function, closes the modal
        onClose();
    }}

    initialValues={post}
    render={( { handleSubmit, pristine, invalid }) => (
        <Modal isOpen toggle= {onClose} >
            <Form onSubmit={handleSubmit}>
                <ModalHeader toggle={onClose}>
                    {post.id ? 'Edit Post' : 'New Post'}
                </ModalHeader>
                <ModalBody>
                    <FormGroup>
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
                         <Field
                          required
                          name="body"
                          className="form-control"
                          component="input"
          />
        </FormGroup>
                </ModalBody>
                <ModalFooter>
                    <button class='bg-pink-400'  type="submit" disabled={pristine} color="red"> Save </button> 
                    <button color="secondary" onClick={onClose}> Cancel </button> 
                </ModalFooter>
            </Form>
        </Modal>
    )}
    
    
    
    />
);

export default PostEditor;
 */