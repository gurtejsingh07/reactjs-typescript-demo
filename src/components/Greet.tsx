type WelcomeProps = {
  name?: string;
  experience: number;
  certification: boolean;
  skills: string[];
};
export const Welcome = (props: WelcomeProps) => {
  let { name = "GUEST", experience = 0, certification, skills } = props;
  return (
    <div>
      <h2>Welcome :{name}</h2>
      <h4>Great! you have {experience}'s of expericence with React</h4>
      {certification ? (
        <h4>Good to know you are react certified developer</h4>
      ) : (
        <h4>
          Keep growing great skills! We recommend you to complete certification
          as well.
        </h4>
      )}
      <ul>
        {skills.map((skill) => (
          <h5 key={skill}>{skill}</h5>
        ))}
      </ul>
    </div>
  );
};
