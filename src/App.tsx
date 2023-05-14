import React from 'react';
import { Welcome } from './components/Greet';
import { Person } from './components/Person';
import {Home} from './components/Home';
import { PersonsList } from './components/PersonsList';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Status } from './components/ProfileStatus';
import { ChildrenRendering } from './components/ChildComponent';
import { AuthUser } from './components/AuthUser';
import { Counter } from './components/Counter';
function App(): React.JSX.Element {
  const skills = ['javascript', 'es6', 'react', 'typescript'];
  const user ={
    name:'Gurtej Singh',
    dob:'15/03/1989',
    qualification:'Master of computer applications',
    currentDesignations:'Tech Lead',
    status:'inprogress'
  }
const  usersList=[
  {
    name:'Amrit Singh',
    dob:'20/03/1999',
    qualification:'Bechlor of computer applications',
    currentDesignations:'Software Engineer',
    status:'inprogress'
  },
  {
    name:'Gurtej Singh',
    dob:'15/03/1989',
    qualification:'Master of computer applications',
    currentDesignations:'Tech Lead',
    status:'inprogress'
  },
  {
    name:'Garry',
    dob:'15/03/1986',
    qualification:'Master of computer applications',
    currentDesignations:'Solution Architect',
    status:'inprogress'
  }
]

  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />}>
          <Route path='welcome' element={<Welcome name='Gurtej' experience={10} certification={true} skills={skills} />} />
          <Route path='person' element={<Person user={user} />} />
          <Route path='personslist' element={<PersonsList users={usersList}/>}/>
          <Route path='profileStatus' element={<Status status='selected'/>}/>
          <Route path='child' element={<ChildrenRendering><h1>We are redenring child component</h1> </ChildrenRendering>}/>
          <Route path='auth' element={<AuthUser/>}/>
          <Route path='counter' element={<Counter/>}/>
          </Route>
      
 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
