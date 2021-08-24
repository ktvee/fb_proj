
/*global FB*/

import React from 'react';
import { DataGrid, Column, Editing, Scrolling, Lookup, Summary, TotalItem } from 'devextreme-react/data-grid';
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
      // ordersData: new CustomStore({
      //   key: 'OrderID',
      //   load: () => this.sendRequest(`${URL}`, 'GET'),
      //   insert: (values) => this.sendRequest(`${URL}`, 'POST', {
      //     values: JSON.stringify(values)
      //   }),
      //   update: (key, values) => this.sendRequest(`${URL}`, 'PUT', {
      //     key: key,
      //     values: JSON.stringify(values)
      //   }),
      //   remove: (key) => this.sendRequest(`${URL}`, 'DELETE', {
      //     key: key
      //   })
      // }),
      requests: [],
      refreshMode: 'reshape'
    };
    this.clearRequests = this.clearRequests.bind(this);
    this.handleRefreshModeChange = this.handleRefreshModeChange.bind(this);
  }

componentDidMount() {
  FB.api('/372848021248529', function(response) {
    console.log(response);
  });

  // var body = 'Reading JS SDK documentation';
  // FB.api('/me/feed', 'post', { message: body }, function(response) {
  //   if (!response || response.error) {
  //     console.log('Error occured');
  //   } else {
  //     console.log('Post ID: ' + response.id);
  //   }
  // });
}

  sendRequest(url, method, data) {
    method = method || 'GET';
    data = data || {};

    this.logRequest(method, url, data);

    if(method === 'GET') {
      return fetch(url, {
        method: method,
        credentials: 'include',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
          'Access-Control-Allow-Origin': '*'
        }
      }).then(result => result.json().then(json => {
        if(result.ok) return json.data;
        throw json.Message;
      }));
    }

    const params = Object.keys(data).map((key) => {
      return `${encodeURIComponent(key) }=${ encodeURIComponent(data[key])}`;
    }).join('&');

    return fetch(url, {
      method: method,
      body: params,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      },
      credentials: 'include'
    }).then(result => {
      if(result.ok) {
        return result.text().then(text => text && JSON.parse(text));
      } else {
        return result.json().then(json => {
          throw json.Message;
        });
      }
    });
  }

  logRequest(method, url, data) {
    const args = Object.keys(data || {}).map(function(key) {
      return `${key }=${ data[key]}`;
    }).join(' ');

    const time = formatDate(new Date(), 'HH:mm:ss');
    const request = [time, method, url.slice(URL.length), args].join(' ');

    this.setState((state) => {
      return { requests: [request].concat(state.requests) };
    });
  }

  clearRequests() {
    this.setState({ requests: [] });
  }

  handleRefreshModeChange(e) {
    this.setState({ refreshMode: e.value });
  }

  render() {
    const { refreshMode, ordersData } = this.state;
    return (
      <React.Fragment>
        <DataGrid
          id="grid"
          showBorders={true}
          dataSource={ordersData}
          repaintChangesOnly={true}
        >
          <Editing
            refreshMode={refreshMode}
            mode="cell"
            allowAdding={true}
            allowDeleting={true}
            allowUpdating={true}
          />

          <Scrolling
            mode="virtual"
          />

          <Lookup dataSource={ordersData} valueExpr="Value" displayExpr="Text" />

          <Summary>
            {/* <TotalItem column="CustomerID" summaryType="count" />
            <TotalItem column="Freight" summaryType="sum" valueFormat="#0.00" /> */}
          </Summary>

        </DataGrid>
        <div className="options">
          <div className="caption">Options</div>
          <div className="option">
            <span>Refresh Mode: </span>
            <SelectBox
              value={refreshMode}
              items={REFRESH_MODES}
              onValueChanged={this.handleRefreshModeChange}
            />
          </div>
          <div id="requests">
            <div>
              <div className="caption">Network Requests</div>
              <Button id="clear" text="Clear" onClick={this.clearRequests} />
            </div>
            <ul>
              {this.state.requests.map((request, index) => <li key={index}>{request}</li>)}
            </ul>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Grid;