import * as React from 'react'

import './App.css';
import { data, scale } from './data'

function Graph({selected}) {
    const sortData = data.sort((a, b) => (a[selected] > b[selected]) ? -1 : 1)
    const ratio = scale[selected].ratio *0.6*0.8
    return (
      <div className="Graph">
        {sortData.map(person => {
            return (
            <div>
                <span className="Graph-name">{person.name}</span>
                <div className="Graph-border"><div className="Bar" style={{width: `${person[selected]*ratio}vw`}}></div></div>
            </div>)
        })}
      </div>
    );
  }
  
  export default Graph;