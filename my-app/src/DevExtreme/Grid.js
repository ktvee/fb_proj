/*global FB*/
import React from 'react';
import DataGrid, { Column, SearchPanel, Grouping, Paging } from 'devextreme-react/data-grid';
class Grid extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
      fbData: null
    };

// calling from the api
FB.api('/170107151801959/feed', 'GET', {}, (response) => {
    console.log('response: ', response);
      this.setState({
        'fbData': response.data
      })
})}

  render() {
    return (
    <DataGrid 
        id="grid-container"
        dataSource={this.state.fbData}
        keyExpr="id"
        showBorders={true}
        focusedRowEnabled={true}
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
      />        
      <Column
        dataField="story"
        dataType="string"
      />
    </DataGrid>
    );
  }
}

export default Grid;