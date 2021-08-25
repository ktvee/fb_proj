
/*global FB*/

import React from 'react';
import { DataGrid, Editing, Scrolling, Lookup, Summary, TotalItem } from 'devextreme-react/data-grid';
import { Button } from 'devextreme-react/button';
import { SelectBox } from 'devextreme-react/select-box';

import CustomStore from 'devextreme/data/custom_store';
import { formatDate } from 'devextreme/localization';
import 'whatwg-fetch';

const URL = 'https://www.facebook.com/Feeds-Tester-170107151801959/';
const REFRESH_MODES = ['full', 'reshape', 'repaint'];

class Grid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fbData: null,
    };
    // calling from the api
  FB.api(
    '/170107151801959/feed', 'GET', {}, function(response) {
      console.log('GET response: ', response.data)
        // Insert your code here
        this.setState({
          'fbData': response.data
        })
    }
  );

}

  render() {
    return (
      <React.Fragment>
        <DataGrid
          id="grid"
          showBorders={true}
          dataSource={this.state.fbData}
          repaintChangesOnly={true}
        >
          <Scrolling
            mode="virtual"
          />
        </DataGrid>
      </React.Fragment>
    );
  }
}

export default Grid;