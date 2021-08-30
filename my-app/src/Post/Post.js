import React, { Component } from 'react'

var name = window.prompt('What is your name?');
var age = window.prompt('How old are you?');

document.write('Hey ' + name + ' how are you today?.  Do you like being ' + age + ' years old?')

export default class Post extends Component {
  render() {
    return (
      <div>

      </div>
    )
  }
}

// /*global FB*/
// import React from 'react';
// import HtmlEditor, { Toolbar, MediaResizing, Item } from 'devextreme-react/html-editor';
// import Button from 'react-bootstrap/Button'

// const headerValues = [false, 1, 2, 3, 4, 5];
// var message = '';
// const created_time = new Date()
// created_time.toUTCString();

// function postSubmit() {
//   FB.api(
//     '/170107151801959/feed',
//     'POST',
//     {"message":message},
//     function(response) {
//         console.log(response)
//     }
//   );
// }

// class Poster extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       isMultiline: true,
//     };
//   }

//   render() {
//     return (
//       <div className="widget-container">
//         <HtmlEditor
//           height="500px"
//           width="500px"
//           defaultValue={message}
//           id="htmlEditor"
//         >
//           <MediaResizing enabled={true} />
//           <Toolbar>
//             <Item name="undo" />
//             <Item name="redo" />
//             <Item name="separator" />
//             <Item
//               name="header"
//               acceptedValues={headerValues}
//             />
//             <Item name="separator" />
//             <Item name="bold" />
//             <Item name="italic" />
//             <Item name="strike" />
//             <Item name="underline" />
//             <Item name="separator" />
//             <Item name="alignLeft" />
//             <Item name="alignCenter" />
//             <Item name="alignRight" />
//             <Item name="alignJustify" />
//             <Item name="separator" />
//           </Toolbar>
//         </HtmlEditor>
//         <Button onClick={postSubmit}>Click To Submit</Button>
//       </div>
      
//     );
//   }
// }

// export default Poster;