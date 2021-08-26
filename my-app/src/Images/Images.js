// import React from 'react';
// import Gallery from 'devextreme-react/gallery';
// import CheckBox from 'devextreme-react/check-box';
// // import { gallery } from './data.js';

// /*global FB*/


// class Images extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = { loop: true, slideShow: true, showNavButtons: true, showIndicator: true, fbPhotos: null };
//     this.onLoopChanged = this.onLoopChanged.bind(this);
//     this.onSlideShowChanged = this.onSlideShowChanged.bind(this);
//     this.onShowNavButtonsChanged = this.onShowNavButtonsChanged.bind(this);
//     this.onShowIndicatorChanged = this.onShowIndicatorChanged.bind(this);


//     // calling from the api for photos
// FB.api('/170107151801959/photos', 'GET', {}, (response) => {
//   console.log('response for photos: ', response);
//     this.setState({
//       'fbPhotos': response.data
//     })
//   })


//   }

//   render() {
//     return (
//       <div>
//         <div className="widget-container">
//           <Gallery
//             id="gallery"
//             dataSource={this.state.fbPhotos}
//             height={300}
//             slideshowDelay={this.state.slideShow ? 2000 : 0}
//             loop={this.state.loop}
//             showNavButtons={this.state.showNavButtons}
//             showIndicator={this.state.showIndicator} />
//         </div>
//         <div className="options">
//           <div className="caption">Options</div>
//           <div className="option">
//             <CheckBox text="Loop mode" value={this.state.loop} onValueChanged={this.onLoopChanged} />
//           </div>
//           <div className="option">
//             <CheckBox text="Slide show" value={this.state.slideShow} onValueChanged={this.onSlideShowChanged} />
//           </div>
//           <div className="option">
//             <CheckBox text="Navigation buttons" value={this.state.showNavButtons} onValueChanged={this.onShowNavButtonsChanged} />
//           </div>
//           <div className="option">
//             <CheckBox text="Indicator" value={this.state.showIndicator} onValueChanged={this.onShowIndicatorChanged} />
//           </div>
//         </div>
//       </div>
//     );
//   }

//   onLoopChanged(data) {
//     this.setState({
//       loop: data.value
//     });
//   }
//   onSlideShowChanged(data) {
//     this.setState({
//       slideShow: data.value
//     });
//   }
//   onShowNavButtonsChanged(data) {
//     this.setState({
//       showNavButtons: data.value
//     });
//   }
//   onShowIndicatorChanged(data) {
//     this.setState({
//       showIndicator: data.value
//     });
//   }
// }

// export default Images;