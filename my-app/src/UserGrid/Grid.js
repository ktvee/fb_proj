/*global FB*/


import React, { useState, useEffect } from 'react';
import DataGrid, { Editing, Button, SearchPanel, Grouping, Paging, Column, Lookup } from 'devextreme-react/data-grid';

import 'whatwg-fetch';

import { useHistory } from "react-router-dom";


export default function Grid() {
  const [fbData, setFbData] = useState([])
  const [rowData, setRowData] = useState(null)

  useEffect(() => {
    fetchData() 
  }, [])


  const fetchData = () => {
    FB.api('/170107151801959/feed', 'GET', {}, (response) => {
      console.log('GET response: ', response);
        setFbData(response.data)
        })
    }

  const savePost = (e) => {
    fetch('http://localhost:4741/POST', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: rowData }),
    })
      .then((res) => res.json())
      .then((rowData) => setRowData(rowData))
      .catch((err) => console.log('error'))
  }

  const handleChange = (e) => {
    setRowData(e.row.data)
    if (rowData > 0) {
      savePost() 
    }
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