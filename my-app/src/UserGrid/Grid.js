/*global FB*/


import React, { useState, useEffect } from 'react';
import DataGrid, { Editing, Button, SearchPanel, Grouping, Paging, Column, Lookup } from 'devextreme-react/data-grid';
// import notify from 'devextreme/ui/notify';

import 'whatwg-fetch';

import axios from 'axios';


export default function Grid() {
  const [fbData, setFbData] = useState([])

  useEffect(() => {
    fetchData();
  }, [])


  const fetchData = () => {
    FB.api('/170107151801959/feed', 'GET', {}, (response) => {
      console.log('GET response: ', response);
        setFbData(response.data);
        })
    }

  const handleChange = (e) => {
    console.log('selected row: ', e.row.data)
    
    let rowData = e.row.data;
    
    axios
      .post('http://localhost:4741/POST', rowData)
      .then(() => console.log('Row Created'))
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