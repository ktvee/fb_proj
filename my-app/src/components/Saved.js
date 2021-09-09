import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import DataGrid, { Pager, Paging, Selection } from 'devextreme-react/data-grid';
import axios from 'axios';

const allowedPageSizes = [5, 10, 15, 20];
const expandedRowKeys = [1];

const Saved = (props) => {
  const [savedPost, setSavedPost] = useState(null);
  const history = useHistory();

  useEffect(async () => {
    const result = await axios(
      'http://localhost:4741/GET',
    );
    setSavedPost(result.data.recordset);
  }, []);

  return ( 
    <DataGrid
        id="grid-container"
        dataSource={savedPost}
        keyExpr="returned"
        showBorders={true}
        focusedRowEnabled={true}
        columnHidingEnabled={true}
        columnAutoWidth={true}
        columnAutoHeight={true}
        showRowLines={true}
        showColumnLines={true}
        rowAlternationEnabled={true}
        defaultExpandedRowKeys={expandedRowKeys}
        autoExpandAll={false} >
        <Paging
            enabled={true}
            defaultPageSize={15} />
        <Pager
            showPageSizeSelector={true}
            allowedPageSizes={allowedPageSizes}
            showInfo={true} />
        <Selection mode="single" />
    </DataGrid>
  );
}

export default Saved;