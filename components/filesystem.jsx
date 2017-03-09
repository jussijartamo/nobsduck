'use babel';

import React from 'react';
import hdate from 'human-date'

export default class FileSystem extends React.Component {
  render() {
     const files = [
      {name: "somefile.war", size: 213123, modified: new Date("2-27-2017")},
      {name: "some.json", size: 2345, modified: new Date("12-16-2016")},
      {name: "other.json", size: 4654, modified: new Date("8-16-2016")},
      {name: "text.txt", size: 345, modified: new Date("8-16-2016")},
      {name: "logs.log", size: 6546, modified: new Date("8-16-2016")},
      {name: "some_some_some_file.log", size:345, modified: new Date("8-16-2016")}
    ]
    const fileItems = files.map((file,index) =>
      <tr key={"fileItem_" + index}>
        <td className="col-xs-3 col-sm-3">{file.name}</td>
        <td className="col-xs-2"><span className="size mb">5.4</span></td>
        <td className="col-xs-2">{hdate.relativeTime(file.modified)}</td>
      </tr>
    );
    return <div className="area container">
            <table className="table files">
              <thead>
                <tr>
                  <th colSpan={3}>
                    <ol className="breadcrumb">
                        <li></li>
                        <li><a href="#">data00</a></li>
                        <li><a href="#">oph</a></li>
                        <li className="active">haku-app</li>
                    </ol>
                  </th>
                </tr>
                <tr>
                  <th>
                <div className="input-group">
                <input placeholder="Search..." type="text" className="form-control"></input>
                </div>
                  </th>
                  <th colSpan={2}></th>
                </tr>
                <tr className="headings">
                  <th>Name</th>
                  <th>Size</th>
                  <th className="pull-right">Modified</th>
                  </tr>
              </thead>
              <tbody>
                {fileItems}
              </tbody>
            </table>
        </div>;
  }
}