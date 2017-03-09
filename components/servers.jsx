'use babel';

import React from 'react';

export default class Servers extends React.Component {
  render() {
    const servers = ['Tunturi (QA)', 'Retro (prod)', 'Dev']
    
    const serverItems = servers.map((server,index) =>
      <li key={"serverItem_" + index} className="list-group-item">
        {server}
        <span className={"glyphicon glyphicon-trash pull-right"}></span>
        <span className={"glyphicon glyphicon-edit pull-right"}></span>
      </li>
    );
    return <div className="area servers">
        <ul className="list-group">
            {serverItems}
        </ul>
    </div>;
    }
}
