import {
  Card,
  CardBody,
  Form,
  Input,
  Label,
  Container,
  Button,
} from "reactstrap";
import React, { useState, useRef } from 'react';
import JoditEditor from 'jodit-react';

const AddBlog = ({ placeholder }) => {

  const editor = useRef(null);
	const [content, setContent] = useState('');
  const config ={
    placeholder: "Start typing..."
    }
  // const [categories,setCategories]=useState('');



  return (
    <div className="wrapper">
      <Card className="bg-light">
        <CardBody>
          <h2>what is going on in your mind..</h2>
          <Form>
            <div className="">
              <Label For="title">Blog title</Label>
              <Input
                type="text"
                placeholder="type here..."
                className="rounded 0"
                id="title"
              />
            </div>
            <div>
              <Label For="writer">Blog Writer</Label>
              <Input
                type="text"
                placeholder="type here..."
                className="rounded 0"
                id="writer"
              />
            </div>
            <div>
              <Label For="writer">Header Image</Label>
              <Input
                type="file"
                placeholder="type here..."
                className="rounded 0"
                id="header-image"
              />
            </div>
            <div>
              <Label For="category">Blog Category</Label>
              <Input
                type="select"
                placeholder="type here..."
                className="rounded 0"
                id="category"
              >
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Input>
            </div>
            <div>
              <Label For="content">Blog Content</Label>
              {/* <Input
                type="textarea"
                placeholder="type here..."
                className="rounded 0"
                id="content"
                style={{ height:'250px' }}
              /> */}

          <JoditEditor
                ref={editor}
                value={content}
                config={config}
                tabIndex={1} // tabIndex of textarea
                onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                onChange={newContent => {}}
                style={{ height:'450px'}}
              />
             
            </div>

            <Container className="text-center"><br />
              <Button type="submit"
               color="primary"
               style={{ margin:'10px',borderRadius:'12px' }}
                >Create Blog</Button>

              <Button 
               color="danger"
               style={{ margin:'10px',borderRadius:'12px' }}
               >Reset Content</Button>
            </Container>
          </Form>
        </CardBody>
        {content}
      </Card>

    </div>
  );
};




export default AddBlog;
