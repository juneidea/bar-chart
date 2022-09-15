import * as React from 'react'
import styled from 'styled-components'

import './App.css';
import { data } from './data'

const Bar = styled.div`
    background-color: green;
    height: 16px;
    width: ${props => props.wide}vw;
`

function Graph({selected}) {
    const sortData = data.sort((a, b) => (a[selected] > b[selected]) ? -1 : 1)
    let scale
    if( selected === 'salary' ) scale = ((1/1000)/1.5) *0.6*0.8
    if( selected === 'age' ) scale = 0.6*0.8
    return (
      <div className="Graph">
        {sortData.map(person => {
            return (
            <div>
                <span className="Graph-name">{person.name}</span>
                <div className="Graph-border"><Bar wide={person[selected]*scale}></Bar></div>
            </div>)
        })}
      </div>
    );
  }
  
  export default Graph;