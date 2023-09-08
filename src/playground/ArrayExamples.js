const ArrayExamples = {
  testArray() {
    console.log("hello");

    debugger;
    let carsArray = ["maruti", "toyota", "hundai"];

    const carIndex = carsArray.findIndex((car) => car == "maruti");
    console.log(carIndex);

    const employeeArr = [
      {
        name: "Ashish",
        address: "Noida",
      },
      {
        name: "Ravi",
        address: "Noida",
      },
      {
        name: "Vivek",
        address: "New Delhi",
      },
    ];

    const emp = employeeArr.filter((emp) => emp.address == "Noida");
    console.log(emp);

    var mapArray = employeeArr.map((user) => {
      user.name = user.name + "!!";
      return user;
    });
    console.log(mapArray);

    // object de-structuring
    const [a, b] = ["Ashish", "Vivek"];
    console.log(a);
    console.log(b);

    const { name: mName, age } = {
      name: "Ashish",
      age: 30,
    };
    console.log(age);
    console.log(mName);
  },
};

export default ArrayExamples;
