/*global FB*/
import React from 'react';
import { markup } from './data.js';
import HtmlEditor, { Toolbar, MediaResizing, Item } from 'devextreme-react/html-editor';
import CheckBox from 'devextreme-react/check-box';
import Button from 'react-bootstrap/Button'

const headerValues = [false, 1, 2, 3, 4, 5];

function postSubmit() {
    FB.api(
        '/me',
        'POST',
        { "fields":"id,name,feed", "message": 'The quick brown fox jumped over the lazy dog' },
        function(response) {
            console.log(response)
            console.log('post submitted successfully')
        }
      );
}

class Poster extends React.Component {
  constructor() {
    super();
    this.state = {
      isMultiline: true
    };
    this.multilineChanged = this.multilineChanged.bind(this);
  }
  render() {
    return (
      <div className="widget-container">
        <HtmlEditor
          height="500px"
          width="450px"
          defaultValue={markup}
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
        <div className="options">
          <div className="caption">Options</div>
          <div className="option">
            <CheckBox
              text="Multiline toolbar"
              value={this.state.isMultiline}
              onValueChanged={this.multilineChanged}
            />
          </div>
        </div>
        <Button onClick={postSubmit}>Click To Submit</Button>
      </div>
      
    );
  }
  
  multilineChanged(e) {
    this.setState({
      isMultiline: e.value
    });
  }
}

export default Poster;