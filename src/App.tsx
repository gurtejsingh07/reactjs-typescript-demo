import React from 'react';
import { Welcome } from './components/Greet'
import './App.css';

function App(): React.JSX.Element {
  let skills = ['javascript', 'es6', 'react', 'typescript']
  return (
    <div className="App">
      <Welcome name='Gurtej' experience={10} certification={true} skills={skills} />
    </div>
  );
}

export default App;
