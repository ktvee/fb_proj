/*global FB*/

import React from 'react';
import DataGrid, { Editing, Button, SearchPanel, Grouping, Paging, Column, Lookup } from 'devextreme-react/data-grid';
import TestShare from '../components/TestShare.js'
import CustomStore from 'devextreme/data/custom_store';
import 'whatwg-fetch';

import Nav from 'react-bootstrap/Nav'

const message = '';

// function handleErrors(response) {
//     if (!response.ok) {
//         throw Error(response.statusText);
//     }
//     return response;
// }

// const customDataSource = new CustomStore({
//   key: 'id',
//   load: (loadOptions) => {
//       // ...
//   },
//   insert: (values) => {
//       return fetch('https://mydomain.com/MyDataService', {
//           method: 'POST',
//           body: JSON.stringify(values),
//           headers:{
//               'Content-Type': 'application/json'
//           }
//       })
//       .then(handleErrors)
//       .catch(() => { throw 'Network error' });
//   },
//   remove: (key) => {
//       return fetch(`https://mydomain.com/MyDataService/${encodeURIComponent(key)}`, {
//           method: 'DELETE'
//       })
//       .then(handleErrors)
//       .catch(() => { throw 'Network error' });
//   },
//   update: (key, values) => {
//       return fetch(`https://mydomain.com/MyDataService/${encodeURIComponent(key)}`, {
//           method: 'PUT',
//           body: JSON.stringify(values),
//           headers:{
//               'Content-Type': 'application/json'
//           }
//       })
//       .then(handleErrors)
//       .catch(() => { throw 'Network error' });
//   }
// });

class Grid extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
      fbData: null,
      fbPhotos: null,
      events: []
    };

    this.logEvent = this.logEvent.bind(this);
    this.onEditingStart = this.logEvent.bind(this, 'EditingStart');
    this.onInitNewRow = this.logEvent.bind(this, 'InitNewRow');
    this.onRowInserting = this.logEvent.bind(this, 'RowInserting');
    this.onRowInserted = this.logEvent.bind(this, 'RowInserted');
    this.onRowUpdating = this.logEvent.bind(this, 'RowUpdating');
    this.onRowUpdated = this.logEvent.bind(this, 'RowUpdated');
    this.onRowRemoving = this.logEvent.bind(this, 'RowRemoving');
    this.onRowRemoved = this.logEvent.bind(this, 'RowRemoved');
    this.onSaving = this.logEvent.bind(this, 'Saving');
    this.onSaved = this.logEvent.bind(this, 'Saved');
    this.onEditCanceling = this.logEvent.bind(this, 'EditCanceling');
    this.onEditCanceled = this.logEvent.bind(this, 'EditCanceled');
    this.clearEvents = this.clearEvents.bind(this);

    // calling from the api for the posts
    FB.api('/170107151801959/feed', 'GET', {}, (response) => {
        console.log('GET response: ', response);
          this.setState({
            'fbData': response.data
          })
        }
      )
}

logEvent(eventName) {
  FB.api(
    '/170107151801959/feed',
    'POST',
    {"message":message},
    function(response) {
        console.log(response)
    }
  );
    this.setState((state) => {
    return { events: [eventName].concat(state.events) };
  });
}

clearEvents() {
  this.setState({ events: [] });
}

render() {
    return (
    <React.Fragment>
    <DataGrid 
        id="grid-container"
        dataSource={this.state.fbData}
        keyExpr="id"
        showBorders={true}
        wordWrapEnabled={true}
        focusedRowEnabled={true}
        showRowLines={true}
        cellRender={cellRender}
        showColumnLines={true}
        onRowValidating={this.onRowValidating}
        onEditorPreparing={this.onEditorPreparing}
        onEditingStart={this.onEditingStart}
        onInitNewRow={this.onInitNewRow}
        onRowInserting={this.onRowInserting}
        onRowInserted={this.onRowInserted}
        onRowUpdating={this.onRowUpdating}
        onRowUpdated={this.onRowUpdated}
        onRowRemoving={this.onRowRemoving}
        onRowRemoved={this.onRowRemoved}
        onSaving={this.onSaving}
        onSaved={this.onSaved}
        onEditCanceling={this.onEditCanceling}
        onEditCanceled={this.onEditCanceled}
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

      <Editing
        mode="row"
        allowUpdating={true}
        allowDeleting={true}
        allowAdding={true} />

      <div id="events">
          <div>
            <div className="caption">Fired events</div>
            <Button id="clear" text="Clear" onClick={this.clearEvents} />
          </div>
          <ul>
            {this.state.events.map((event, index) => <li key={index}>{event}</li>)}
          </ul>
        </div>
        <Column dataField="created_time" caption="Time Created" />
        <Column dataField="id" caption="Post ID" />
        <Column dataField="message" caption="Message Body" />
        <Column dataField="story" caption="Story" />
        <Column dataField="" caption="Favorite" />

        <Lookup dataSource={this.state.fbData} displayExpr="Search Posts" valueExpr="ID" />


    </DataGrid>

    </React.Fragment>
    );
  }
}

function cellRender(data) {
  console.log(data.value)
  return <img src={data.value} />;
}

export default Grid;