
/***
 * @author Gurtej Singh
 * @description this file will explain how to  object types in the Typscript
 */



type PersonProps = {
  user:{
    name:string,
    dob:string,
    qualification:string,
    currentDesignations:string,
   }
  };
  export  const Person = (props: PersonProps) => {
    let{user}=props;
    let {name,dob,qualification,currentDesignations}=user;

    return (
      <div>
      <h1>Person Details</h1>
      <h4>Name: {name}</h4>
      <h4>DOB :{dob}</h4>
      <h4>Qualification: {qualification}</h4>
      <h4>Current Designation :{currentDesignations}</h4>
      </div>
    );
  };
  