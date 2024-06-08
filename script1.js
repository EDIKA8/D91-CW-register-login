// // HW D81
// function manualMap(func, array) { // 1
//   return array.map(func);
// }

// let numbers = [1, 2, 3, 4];

// function double(x) {
//   return x * 2;
// }

// let result = manualMap(double, numbers);
// console.log(result); 



// function manualFilter(func, array) { // 2
//   return array.filter(func);
// }

// let numbers = [1, 2, 3, 4, 5, 6];

// function isEven(x) {
//   return x % 2 === 0;
// }

// let result = manualFilter(isEven, numbers);
// console.log(result); 



// function capitalizeNames(names) { // 3
//   return manualMap(name => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase(), names);
// }

// let names = ["alice", "bob", "charlie"];
// let capitalizedNames = capitalizeNames(names);
// console.log(capitalizedNames); 



// function filterNames(names) { // 4
//   return manualFilter(name => name.length <= 5 && name[0] === name[0].toUpperCase(), names);
// }

// let names = ["Alice", "bob", "Charlie", "David", "Eve"];
// let filteredNames = filterNames(names);
// console.log(filteredNames);



// function filterMultiplesOf5(numbers) { // 5
//   return manualFilter(num => num % 5 === 0 && num > 20, numbers);
// }

// let numbers = [10, 15, 25, 30, 35];
// let filteredNumbers = filterMultiplesOf5(numbers);
// console.log(filteredNumbers);


  //D92 CW
  // const person1 = {
  //   firstname: "Soso",
  //   lastname: "Valishvili",
  //   email: "uchavalishvili01@gmail.com",
  //   id: 1,
  // }

  // const person2 = {
  //   firstname: "Inga",
  //   lastname: "Valishvili",
  //   email: "uchavalishvili01@gmail.com",
  //   id: 2,
  // }

  // const person3 = {
  //   firstname: "Saba",
  //   lastname: "Valishvili",
  //   email: "uchavalishvili01@gmail.com",
  //   id: 3,
  // }


//   class Account {
//    constructor(firstname, lastname){
//      this.firstname = firstname;
//      this.lastname = lastname;
//    }
//   }

// const person1 = new Account("Soso", "Valishvili");
// const person2 = new Account("Inga", "Valishvili");
// const person3 = new Account("Saba", "Valishvili");
// const person4 = new Account("Ucha", "Valishvili");

// console.log(person1)
// console.log(person2)
// console.log(person3)
// console.log(person4)



              // CW
// document.getElementById('userForm').addEventListener('submit', function(event) {
//   event.preventDefault();

//   const firstName = document.getElementById('first_name').value;
//   const lastName = document.getElementById('last_name').value;
//   const email = document.getElementById('email').value;

//   if (firstName && lastName && email) {
//       const newUser = new User(firstName, lastName, email);
      
//       dataBase.push(newUser);

//       updateUserList();
      
//       document.getElementById('userForm').reset();
//   } else {
//       alert('All fields are required!');
//   }
// });

// class User {
//   constructor(firstName, lastName, email) {
//       this.firstName = firstName;
//       this.lastName = lastName;
//       this.email = email;
//   }
// }

// const dataBase = [];

// function updateUserList() {
//   const userList = document.getElementById('userList');
//   userList.innerHTML = '';
//   dataBase.forEach(user => {
//       const li = document.createElement('li');
//       li.textContent = `${user.firstName} ${user.lastName} (${user.email})`;
//       userList.appendChild(li);
//   });
// }


 document.getElementById('registerForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const firstName = document.getElementById('first_name').value;
  const lastName = document.getElementById('last_name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if (firstName && lastName && email && password) {
     
      const newUser = new User(firstName, lastName, email, password);
      
      dataBase.push(newUser);

      updateUserList();
      
      document.getElementById('registerForm').reset();
  } else {
      alert('All fields are required!');
  }
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const loginEmail = document.getElementById('login_email').value;
  const loginPassword = document.getElementById('login_password').value;

  const user = dataBase.find(user => user.email === loginEmail);

  if (user && user.verifyPassword(loginPassword)) {
      alert('Login successful!');
  } else {
      alert('Invalid email or password.');
  }
});

class User {
  constructor(firstName, lastName, email, password) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.email = email;
      this._password = password; 
  }

  verifyPassword(inputPassword) {
      return this._password === inputPassword;
  }
}

const dataBase = [];

function updateUserList() {
  const userList = document.getElementById('userList');
  userList.innerHTML = '';
  dataBase.forEach(user => {
      const li = document.createElement('li');
      li.textContent = `${user.firstName} ${user.lastName} (${user.email})`;
      userList.appendChild(li);
  });
}