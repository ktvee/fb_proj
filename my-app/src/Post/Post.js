/*global FB*/
import React from 'react';
import { markup } from './data.js';
import HtmlEditor, { Toolbar, MediaResizing, Item } from 'devextreme-react/html-editor';
import CheckBox from 'devextreme-react/check-box';
import Button from 'react-bootstrap/Button'
import $ from 'jquery'

const headerValues = [false, 1, 2, 3, 4, 5];

var message = $('.ql-editor .ql-blank .dx-htmleditor-content').text($(this).val());


const created_time = new Date()
created_time.toUTCString();


function postSubmit() {
    FB.api(
        '/me',
        'POST',
        { "fields":"id,name,posts", "message": this.message },
        function(response) {
            console.log('original array: ', response.posts.data)
            if (message !== response.posts.data) {
                console.log('this markup is not in the data array')
                response.posts.data.push({message, created_time});
                console.log('updated array: ', response.posts.data)
            }
        }
      );
}
class Poster extends React.Component {
  constructor() {
    super();
    this.state = {
      isMultiline: true
    };
  }
  render() {
    return (
      <div className="widget-container">
        <HtmlEditor
          height="500px"
          width="500px"
          defaultValue={message}
        >
          <MediaResizing enabled={true} />
          <Toolbar>
            <Item name="undo" />
            <Item name="redo" />
            <Item name="separator" />
            <Item
              name="header"
              acceptedValues={headerValues}
            />
            <Item name="separator" />
            <Item name="bold" />
            <Item name="italic" />
            <Item name="strike" />
            <Item name="underline" />
            <Item name="separator" />
            <Item name="alignLeft" />
            <Item name="alignCenter" />
            <Item name="alignRight" />
            <Item name="alignJustify" />
            <Item name="separator" />
            <Item
              widget="dxButton"
              options={this.toolbarButtonOptions}
            />
          </Toolbar>
        </HtmlEditor>
        <Button onClick={postSubmit}>Click To Submit</Button>
      </div>
      
    );
  }
}

export default Poster;