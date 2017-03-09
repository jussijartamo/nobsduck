'use babel';

import React from 'react';

export default class Brand extends React.Component {
  render() {
    return <div className="servers">
          <h1><span className="title">Servers</span><span className="add glyphicon glyphicon-plus pull-right" data-container="body" data-toggle="popover" data-placement="bottom" data-content="Start by adding a server"/></h1>
        </div>;
    }
}
