
/***
 * @author Gurtej Singh
 * @description this example is about defining component that can take only specific values not all
 *
 */

type StatusProps = {
  status: "pending" | "inProgress" | "selected";
};
export const Status = (props: StatusProps) => {
  let profileStatus = "pending";
  if (props.status === "pending")
    profileStatus = "Your profile is not reviewed by any HR team yet";
  else if (props.status === "inProgress")
    profileStatus = "Your profile is under review";
  else profileStatus = "congratulations! your profile has been shorlisted";

  return <div><h4>{profileStatus}</h4></div>;
};
