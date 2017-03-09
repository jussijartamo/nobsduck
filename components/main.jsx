'use babel';

import React from 'react';
import Brand from './brand.jsx'
import Tabs from './tabs.jsx'
import Servers from './servers.jsx'
import FileSystem from './filesystem.jsx'

export default class Main extends React.Component {
  render() {
    
    return <div>
      <div>
        <Brand/>
        <Tabs/>
      </div>
      <div>
        <Servers/>
        <FileSystem/>
      </div>
    </div>;
  }
}