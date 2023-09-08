import Employee from "../Employee/Employee";

const About = () => {
  const empName = "Ashish Rautela";
  const age = 30;
  const joiningDate = new Date(2023, 0, 15);

  const users = [
    {
      name: "Ashish Rautela",
      age: 30,
      joinDate: new Date(2021, 10, 15),
    },
    {
      name: "Vivek Srivastava",
      age: 40,
      joinDate: new Date(2022, 8, 20),
    },
  ];

  return (
    <div>
      <Employee
        empName={users[0].name}
        age={users[0].age}
        joiningDate={users[0].joinDate}
      ></Employee>
      <Employee
        empName={users[1].name}
        age={users[1].age}
        joiningDate={users[1].joinDate}
      ></Employee>
    </div>
  );
};

export default About;