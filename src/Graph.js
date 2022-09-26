import * as React from 'react'

import './App.css';
import { data, scale } from './data'

function Graph({selected}) {
    const sortData = data.sort((a, b) => (a[selected] > b[selected]) ? -1 : 1)
    const ratio = scale[selected].ratio
    return (
      <div className="Graph">
        <div className="Graph-border">
          <span className="Graph-name"></span>
          <div className="Graph-bar">
            {Array(10).fill(1).map((n, i) => {
              return i === 9 ? <span></span> : <span>{((i+1)*scale[selected].max/10).toLocaleString()}</span>
            })}
          </div>
        </div>
        {sortData.map(person => {
            return (
            <div className="Graph-border">
                <span className="Graph-name">{person.name}</span>
                <div className="Graph-bar"><div className="Bar" style={{width: `${person[selected]*ratio}%`}}></div></div>
            </div>)
        })}
      </div>
    );
  }
  
  export default Graph;