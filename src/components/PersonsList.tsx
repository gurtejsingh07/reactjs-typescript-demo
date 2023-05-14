
/***
 * @author Gurtej Singh
 * @description This helps us to understand how to define array of objects in typescript
 *
 */
import { Person } from "./Person";
type PersonsListProps = {
  users: {
    name: string;
    dob: string;
    qualification: string;
    currentDesignations: string;
  }[];
};
export const PersonsList = (props: PersonsListProps) => {
  let { users } = props;
  return (
    <div>
      {users.map((user) => (
        <Person user={user} />
      ))}
    </div>
  );
};
