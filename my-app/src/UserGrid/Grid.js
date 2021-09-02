/*global FB*/

import React from 'react';
import DataGrid, { Editing, Button, SearchPanel, Grouping, Paging, Column, Lookup } from 'devextreme-react/data-grid';
import TestShare from '../components/TestShare.js'
import notify from 'devextreme/ui/notify';

import 'whatwg-fetch';

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

onClick(e) {
  const buttonText = e.component.option('text');
  notify(`The ${capitalize(buttonText)} button was clicked`);
}

logEvent(eventName) {
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
    <TestShare />

    <DataGrid 
        id="grid-container"
        dataSource={this.state.fbData}
        keyExpr="id"
        showBorders={true}
        wordWrapEnabled={true}
        focusedRowEnabled={true}
        showRowLines={true}
        showColumnLines={true}
        onRowValidating={this.onRowValidating}
        onEditorPreparing={this.onEditorPreparing}
        onEditingStart={this.onEditingStart}
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

      {/* <Editing
        mode="row"
        allowUpdating={true}
        allowDeleting={true}
        allowAdding={true}
      /> */}

        <Column dataField="created_time" caption="Time Created" />
        <Column dataField="id" caption="Post ID" />
        <Column dataField="message" caption="Message Body" />
        <Column dataField="story" caption="Story" />
        <Column type="buttons">
            <Button name="favorite" 
              width={120}
              text="Favorite"
              // type="normal"
              stylingMode="outlined"
              onClick={this.onClick}
              // onClick={console.log('clicked')}
              />
        </Column>
        <Lookup dataSource={this.state.fbData} displayExpr="Search Posts" valueExpr="ID" />
    </DataGrid>
    </React.Fragment>
    );
  }
}

function capitalize(text) {
  // return text.toUpperCase() + text.slice(1);
}

export default Grid;