import * as React from 'react'

import './App.css';
import Graph from './Graph'
import { scale } from './data'

function App() {
  const [selected, setSelected] = React.useState('age')
  return (
    <div className="App">
      <header className="App-base">
      <span className="App-title">Horizontal Bar Charts</span>
      <select id="dataType" className="Choice" onChange={e => setSelected(e.target.value)}>
        <option value="age" >age</option>
        <option value="salary" >salary</option>
      </select>
      <div className="Graph">
        <div className="Graph-title">{selected}</div>
        <div className="Graph-scale"><span className="Graph-start">{scale[selected].start}</span><span className="Graph-end">{scale[selected].end}</span></div>
      </div>
        <Graph selected={selected} />
      </header>

    </div>
  );
}

export default App;
