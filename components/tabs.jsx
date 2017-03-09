'use babel';

import React from 'react';
import Electron from 'electron'

export default class Tabs extends React.Component {
  render() {
    const tabs = ['Tunturi (QA)', 'Tunturi (QA)', 'Dev']

    const shutdown = () => {
        const remote = Electron.remote
        remote.getCurrentWindow().close();
    }

    const tabItems = tabs.map((number,index) => {
      var isActive = index == 0 ? "active": ""
      return <li key={"tabItem_" + index} className={isActive}><a href="#">{number}&nbsp;<span className={"glyphicon glyphicon-remove " + isActive}></span></a></li>
    });
    return <ul className="nav nav-tabs" role="tablist">
              {tabItems}
              <li className="pull-right"><a href="#" onClick={shutdown}><span className={"glyphicon glyphicon-off"}></span></a></li>
            </ul>;
    }
}
