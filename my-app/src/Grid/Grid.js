/*global FB*/
import React from 'react';
import DataGrid, { Column, SearchPanel, Grouping, Paging, MasterDetail } from 'devextreme-react/data-grid';
import Image from 'react-bootstrap/Image'

import Images from '../Images/Images'

class Grid extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
      fbData: null,
      fbPhotos: null
    };

// calling from the api for the posts
FB.api('/170107151801959/feed', 'GET', {}, (response) => {
    console.log('response for feed: ', response);
      this.setState({
        'fbData': response.data
      })
    }
  )
}

  render() {
    return (
    <DataGrid 
        id="grid-container"
        dataSource={this.state.fbData}
        keyExpr="id"
        showBorders={true}
        focusedRowEnabled={true}
        showRowLines={true}
        showColumnLines={true}
      >
      <SearchPanel 
        visible={true} 
      />
      <Grouping 
        autoExpandAll={this.state.autoExpandAll} 
      />
      <Paging 
        defaultPageSize={10} 
      />
      <Column
        dataField="message"
        dataType="string"
        // cellRender={cellRender}
      />        
      <Column
        dataField="story"
        dataType="string"
        // cellRender={cellRender}
      />

      <MasterDetail
          enabled={true}
          component={Images}
        />

    </DataGrid>
    );
  }
}
// function cellRender(data) {
//   console.log(data.value)
//   return <img src={data.value} />;
// }
export default Grid;