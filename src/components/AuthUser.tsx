
/***
 * @author Gurtej Singh
 * @description this file will explain how to  object types in the Typscript
 */

import {useState} from 'react'

type AuthUserProps = {
    user:{
        name:string,
        email:string
     }
    };
export  const AuthUser = () => {
    
   let[AuthUser, setUser]=useState<AuthUserProps|null>(null);

      return (
        <div>
        <h1>Person Details</h1>
        <h4>User Name: {AuthUser?.user.name}</h4>
        <h4>User Name: {AuthUser?.user.email}</h4>
        <button onClick={()=>setUser({user:{name:'Gurtej Singh',email:'gurtej@yopmail.com'}})}>Update user</button>
        <button onClick={()=>setUser(null)}>Clear User</button>
       
        </div>
      );
    };
    