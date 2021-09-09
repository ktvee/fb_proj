/*global FB*/
import React, { useState, useEffect } from 'react';
import DataGrid, { Button, SearchPanel, Paging, Column } from 'devextreme-react/data-grid';
// import notify from 'devextreme/ui/notify';
import 'whatwg-fetch';
import axios from 'axios';

export default function Grid() {
  const [fbData, setFbData] = useState([])
  
  // This fires when the DOM finishes loading
  useEffect(() => {
    fetchData();
  }, [])

  // The FB API call to get the data for the Grid
  const fetchData = () => {
    FB.api('/170107151801959/feed', 'GET', {}, (response) => {
      console.log('GET response: ', response);
        setFbData(response.data);
        })
    }

  // The Express API call to post a selected Grid row to favorites
  const handleChange = (e) => {
    console.log('selected row: ', e.row.data)
    let rowData = e.row.data;
    axios.post('http://localhost:4741/POST', rowData)
      .catch(err => {
        console.error(err);
      });
  }

  return (
    <React.Fragment>
     <DataGrid 
        id="grid-container"
        dataSource={fbData}
        keyExpr="id"
        showBorders={true}
        wordWrapEnabled={true}
        focusedRowEnabled={true}
        showRowLines={true}
        showColumnLines={true}
      >
        <SearchPanel 
          visible={true} 
        />
        <Paging 
          defaultPageSize={10} 
        />
        <Column dataField="created_time" caption="Time Created" />
        <Column dataField="message" caption="Message Body"/>
        <Column dataField="id" caption="Post ID"/>
        <Column dataField="story" caption="Story"/>
        <Column type="buttons">
            <Button name="favorite" 
              width={120}
              text="Add to Favorites"
              stylingMode="outlined"
              onClick={handleChange}
              />
        </Column>
    </DataGrid>
    </React.Fragment>
  )
}