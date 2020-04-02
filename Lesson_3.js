// 1.- создать 5 объектов. В каждом объекте не менее 3х полей. Все объекты разные по набору полей. (Т.е поле name  должно присутствовать только 1 раз в одном объекте )
// let userOne = { name: 'Pavel', age: 35, status: true, skills: ['JS', 'HTML', 'CSS']};
// let userTwo = { name: 'Anna', age: 30, status: true, skills: ['C++', 'Pyton', 'Java']};
// let userThree = { name: 'Mark', age: 1, status: false, skills: [2, 'New', 'C']};
// let userFour = { name: 'Roma', age: 21, status: true, skills: ['JS', 'HTML', 'CSS']};
// let userFive = { name: 'Ira', age: 25, status: false, skills: ['Hello', true, 'CSS']};

// 2.- создать 5 объектов с полностью разным набором полей. В каждом объекте должен присутсвовать массив и внутренний объект. Опишите что угодно, машину, картину, болт... Пример : let man = { name: 'kokos', skills : ['java','js'] , wife: { name: 'cherry' } };
// let car = {
//     doors: 4,
//     color: 'Green',
//     motor: 2.0,
//     tools: ['Automat', 333, true],
//     additionally:{
//         headlamp: 2,
//         bumper: true,
//         wheels: 4
//     }
// }
//
// let flat = {
//     name: "Lovely flat",
//     window: 2,
//     door: 5,
//     rooms:{
//         kitchen: true,
//         bedroom: true,
//         toilet: false
//     },
//     floor: [1, 2, 3, 5, 7, 10],
//     neighbors: true
// }
//
// let computer = {
//     name : "Apple",
//     equipment: {
//         operating_system: 'IOS',
//         operational_memory: '2Gb',
//         HDD: '1Tb',
//         languages: ['UA', 'RU', 'EN', 'GR', 'IT']
//     },
//     color: 'gray',
//     width: 45
// }
//
// let human = {
//     name: 'Alex',
//     age: 22,
//     nationality: 'UA',
//     education: ['school', 'university', 'OWU'],
//     whife: {
//         name: 'Maria',
//         status: true,
//         age: 20,
//         kids: false,
//     }
// }
//
// let country = {
//     name: 'Ukraine',
//     population: 48000000,
//     regions: ['Kyiv', 'Poltava', 'Cherkassy', 'Odessa', 'Dnipro', 'Lviv', 'Kharkiv'],
//     goverment: {
//         president: true,
//         parlament: true,
//         constitution: 1
//     },
//     currency: 'Grivna'
// }

// - 3.При помощи for in вывести все ключи всех объектов из задания 1 и 2
// for ( let key in userOne){
//     console.log(key);
// }
//
// for ( let key in userTwo){
//     console.log(key);
// }
//
// for ( let key in userThree){
//     console.log(key);
// }
//
// for ( let key in userFour){
//     console.log(key);
// }
//
// for ( let key in userFive){
//     console.log(key);
// }

// for ( let key in users){
//     console.log(key);
// }
//  for (let key in car){
//      console.log(key);
//  }
//
//  for (let key in flat){
//      console.log(key);
//  }
//
//  for (let key in computer){
//      console.log(key);
//  }
//
//  for (let  key in human){
//      console.log(key);
//  }
//
//  for (let key in country){
//      console.log(key);
//  }

// - 4. При помощи Object.keys вывести все ключи всех объектов из задания 1 и 2
// let userOneKeys = Object.keys(userOne);
// console.log(userOneKeys);
//
// let userKeysTwo = Object.keys(userTwo);
// console.log(userKeysTwo);
//
// let userKeysThree = Object.keys(userThree);
// console.log(userKeysThree);
//
// let userKeysFour = Object.keys(userFour);
// console.log(userKeysFour);
//
// let userKeysFive = Object.keys(userFive);
// console.log(userKeysFive);

// let usersKeys = Object.keys(users);
// console.log(usersKeys);
//
// let carKeys = Object.keys(car);
// console.log(carKeys);
//
// let flatKeys = Object.keys(flat);
// console.log(flatKeys);
//
// let computerKeys = Object.keys(computer);
// console.log(computerKeys);
//
// let humanKeys = Object.keys(human);
// console.log(humanKeys);
//
// let countryKeys = Object.keys(country);
// console.log(countryKeys);

// - 5. Создать массив из 10 объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет. (Значаения полей могу быть выдуманными)
// let cars = [
//     {car_make:'Mersedes', year: 1995, power: 2.5, color:'black'},
//     {car_make:'BMW', year: 2017, power: 2, color:'blue'},
//     {car_make:'Audi', year: 2001, power: 3.5, color:'red'},
//     {car_make:'Opel', year: 2020, power: 2, color:'green'},
//     {car_make:'Honda', year: 1983, power: 2.6, color:'white'},
//     {car_make:'Renault', year: 1998, power: 1.5, color:'pink'},
//     {car_make:'Citroen', year: 2000, power: 1.7, color:'silver'},
//     {car_make:'Seat', year: 2010, power: 2.0, color:'black'},
//     {car_make:'Nissan', year: 2015, power: 3.0, color:'gray'},
//     {car_make:'KIA', year: 1990, power: 1.7, color:'black'}
// ]

// - 6. Создать массив объектов cities и заполнить его объектами с полями название, популяция, страна, регион. (Значаения полей могу быть выдуманными)

// let cities = [
//     {name:'Kyiv', population: 2000000, country:'Ukraine', region:'Kyivsky'},
//     {name:'Kharkiv', population: 1000000, country:'Ukraine', region:'Kharkivsky'},
//     {name:'Dnipro', population: 1500000, country:'Ukraine', region:'Dnipropetrovsky'},
//     {name:'Odessa', population: 1000000, country:'Ukraine', region:'Odessky'},
//     {name:'Lviv', population: 500000, country:'Ukraine', region:'Lvivsky'},
//     {name:'Cherkassy', population: 350000, country:'Ukraine', region:'Cherkassky'},
//     {name:'Poltava', population: 400000, country:'Ukraine', region:'Poltavsky'},
//     {name:'Kherson', population: 300000, country:'Ukraine', region:'Khersonsky'},
//     {name:'Zaporozie', population: 700000, country:'Ukraine', region:'Zaporozjsky'},
//     {name:'Ivano-Frankivsk', population: 150000, country:'Ukraine', region:'Ivano-Frankivsky'}
// ]

// - 7. Создать массив объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет, водитель. Водитель является отдельным объектом с полями имя, возраст, пол, стаж.
// let carsDriver = [
//     {car_make:'Mersedes', year: 1995, power: 2.5, color:'black', driver: {
//         name:'Oleg',
//         age: 25,
//         gender: 'male',
//         experiens: 5
//             }
//         },
//     {car_make:'BMW', year: 2017, power: 2, color:'blue', driver: {
//             name:'Olena',
//             age: 18,
//             gender: 'female',
//             experiens: 1
//             }
//         },
//     {car_make:'Audi', year: 2001, power: 3.5, color:'red', driver:{
//         name:'Max',
//         age: 40,
//         gender: 'male',
//         experiens: 15
//         }
//     },
//     {car_make:'Opel', year: 2020, power: 2, color:'green', driver:{
//             name:'Anna',
//             age: 33,
//             gender: 'female',
//             experiens: 10
//             }
//         },
//     {car_make:'Honda', year: 1983, power: 2.6, color:'white', driver:{
//             name:'Julia',
//             age: 37,
//             gender: 'female',
//             experiens: 7
//             }
//         },
//     {car_make:'Renault', year: 1998, power: 1.5, color:'pink', driver:{
//             name:'Alex',
//             age: 29,
//             gender: 'male',
//             experiens: 9
//             }
//         },
//     {car_make:'Citroen', year: 2000, power: 1.7, color:'silver', driver:{
//             name:'Den',
//             age: 68,
//             gender: 'male',
//             experiens: 30
//             }
//         },
//     {car_make:'Seat', year: 2010, power: 2.0, color:'black', driver:{
//             name:'Lena',
//             age: 25,
//             gender: 'female',
//             experiens: 8
//             }
//         },
//     {car_make:'Nissan', year: 2015, power: 3.0, color:'gray', driver:{
//             name:'Pavel',
//             age: 35,
//             gender: 'male',
//             experiens: 15
//             }
//         },
//     {car_make:'KIA', year: 1990, power: 1.7, color:'black', driver: {
//             name:'Egor',
//             age: 30,
//             gender: 'male',
//             experiens: 2
//         }
//     }
// ]

// - 8. проитерировать каждый массив из задания 5,6,7 при помощи while.
// let i = 0;
// while (i < cars.length){
//     console.log(cars[i]);
//     i++;
// }

// let i = 0;
// while (i < cities.length){
//     console.log(cities[i]);
//     i++;
// }

// let i = 0;
// while (i < carsDriver.length ){
//     console.log(carsDriver[i]);
//     i++;
// }

// -9.  проитерировать каждый массив из задания 5,6,7 при помощи for .
// for ( i = 0; i < cars.length; i++) {
//     console.log(cars[i]);
// }

// for (let i = 0; i < cities.length; i++) {
//     console.log(cities[i]);
// }

// for (let i = 0; i < carsDriver.length; i++) {
//     console.log(carsDriver[i]);
// }

// - 10. проитерировать каждый массив из задания 5,6,7 при помощи  for of.
// for (const car of cars) {
//     console.log(car);
// }

// for (const city of cities) {
//     console.log(city);
// }

// for (const drivers of carsDriver) {
//     console.log(drivers);
// }

// - 11. взять объекты из задания 1 и превратить каждый в json.
// let userOneJson = JSON.stringify(userOne);
// console.log(userOneJson);
//
// let userTwoJson = JSON.stringify(userTwo);
// console.log(userTwoJson);
//
// let userThreeJson = JSON.stringify(userThree);
// console.log(userThreeJson);
//
// let userFourJson = JSON.stringify(userFour);
// console.log(userFourJson);
//
//  let userFiveJson = JSON.stringify(userFive);
// console.log(userFiveJson);

// - 12. взять json из задания 11 и превратить их обратно в объекты.
// let userOnePars = JSON.parse(userOneJson);
// console.log(userOnePars);
//
// let userTwoPars = JSON.parse(userTwoJson);
// console.log(userTwoPars);
//
// let userThreePars = JSON.parse(userThreeJson);
// console.log(userThreePars);
//
// let userFourParse = JSON.parse(userFourJson);
// console.log(userFourParse);
//
// let userFiveParse = JSON.parse(userFiveJson);
// console.log(userFiveParse);

// - 13. взять массив из задания 5,в цикле перебрать его объекты превратив их в json .
// for (let i = 0; i < cars.length; i++) {
//     let carsObj = JSON.stringify(cars[i]);
//     console.log(carsObj);
// }

// 14. - взять массив из задания 6,в цикле перебрать его объекты превратив их в json .
// for (let cityObj of cities) {
//     cityObj = JSON.stringify(cities);
//     console.log(cityObj);
// }

// 15. - взять массив из задания 7,в цикле перебрать его объекты превратив их в json и сразу скоприовать в новый массив.
// let newArrCarsDriver = [];
// for ( let i = 0; i < carsDriver.length; i++){
//   let carsObj = JSON.stringify(carsDriver[i]);
//   newArrCarsDriver.push(carsObj);
// }
// console.log(newArrCarsDriver);

// 16. - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills
// let usersArr = [
//  { name: 'Pavel', age: 35, status: true, skills: ['JS', 'HTML', 'CSS']},
//  { name: 'Anna', age: 30, status: true, skills: ['C++', 'Pyton', 'Java']},
//  { name: 'Mark', age: 1, status: false, skills: [2, 'New', 'C']},
//  { name: 'Roma', age: 21, status: true, skills: ['JS', 'HTML', 'CSS']},
//  { name: 'Ira', age: 25, status: false, skills: ['Hello', true, 'CSS']},
//     ]
//
// for (let i = 0; i < usersArr.length; i++){
//     for (let j = 0; j < usersArr[i].skills.length; j++){
//         console.log(usersArr[i].skills[j]);
//     }
// }

// - 17. Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills. Скопировать все skills всех пользователей в отедльный массив

// let usersArr = [
//     { name: 'Pavel', age: 35, status: true, skills: ['JS', 'HTML', 'CSS']},
//     { name: 'Anna', age: 30, status: true, skills: ['C++', 'Pyton', 'Java']},
//     { name: 'Mark', age: 1, status: false, skills: [2, 'New', 'C']},
//     { name: 'Roma', age: 21, status: true, skills: ['JS', 'HTML', 'CSS']},
//     { name: 'Ira', age: 25, status: false, skills: ['Hello', true, 'CSS']},
// ]
// let newUsersArr = [];
//
// for (let i = 0; i < usersArr.length; i++){
//     for (let j = 0; j < usersArr[i].skills.length; j++){
//         newUsersArr.push(usersArr[i].skills[j]);
//     }
// }
// console.log(newUsersArr);

// -18. За допомогою 2х циклів циклів проітеррувати  даний масив і масив кожного об'єкта.
// let users = [{name: 'vasya', age: 31, status: false, skills: ['java', 'js']},
// {name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html']},
// {name: 'kolya', age: 29, status: true, skills: ['mysql', ',mongo']},
// {name: 'olya', age: 28, status: false, skills: ['java', 'js']},
// {name: 'max', age: 30, status: true, skills: ['mysql', ',mongo']}];

// let users = [{name: 'vasya', age: 31, status: false, skills: ['java', 'js']},
//     {name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html']},
//     {name: 'kolya', age: 29, status: true, skills: ['mysql', ',mongo']},
//     {name: 'olya', age: 28, status: false, skills: ['java', 'js']},
//     {name: 'max', age: 30, status: true, skills: ['mysql', ',mongo']}];
//
//
// for ( let i = 0; i < users.length; i++){
//     for (let j = 0; j < users[i].skills.length; j++){
//         console.log(users[i].skills[j]);
//     }
//
// }

// - 19.  З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
// let users = [{
//     name: 'vasya',
//     age: 31,
//     status: false,
//     address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
// }, {
//     name: 'petya',
//     age: 30,
//     status: true,
//     address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
// }, {
//     name: 'kolya',
//     age: 29,
//     status: true,
//     address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
// }, {
//     name: 'olya',
//     age: 28,
//     status: false,
//     address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
// }, {
//     name: 'max',
//     age: 30,
//     status: true,
//     address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
// }, {
//     name: 'anya',
//     age: 31,
//     status: false,
//     address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
// }, {
//     name: 'oleg',
//     age: 28,
//     status: false,
//     address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
// }, {
//     name: 'andrey',
//     age: 29,
//     status: true,
//     address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
// }, {
//     name: 'masha',
//     age: 30,
//     status: true,
//     address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
// }, {
//     name: 'olya',
//     age: 31,
//     status: false,
//     address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
// }, {
//     name: 'max',
//     age: 31,
//     status: true,
//     address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
// }];
//
// let userAdress = [];
// let i = 0;
// while (i < users.length){
//     userAdress.push(users[i].address);
//     i++;
// }
// console.log(userAdress);

// - 20. За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. Всі данні в одному блоці.
// let users = [{
//     name: 'vasya',
//     age: 31,
//     status: false,
//     address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
// }, {
//     name: 'petya',
//     age: 30,
//     status: true,
//     address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
// }, {
//     name: 'kolya',
//     age: 29,
//     status: true,
//     address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
// }, {
//     name: 'olya',
//     age: 28,
//     status: false,
//     address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
// }, {
//     name: 'max',
//     age: 30,
//     status: true,
//     address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
// }, {
//     name: 'anya',
//     age: 31,
//     status: false,
//     address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
// }, {
//     name: 'oleg',
//     age: 28,
//     status: false,
//     address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
// }, {
//     name: 'andrey',
//     age: 29,
//     status: true,
//     address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
// }, {
//     name: 'masha',
//     age: 30,
//     status: true,
//     address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
// }, {
//     name: 'olya',
//     age: 31,
//     status: false,
//     address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
// }, {
//     name: 'max',
//     age: 31,
//     status: true,
//     address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
// }];
//
// let userBox = document.createElement("div");
// for (let i = 0; i < users.length; i++) {
//     let userName = users[i];
//     let usersDiv = document.createElement("div");
//     usersDiv.innerHTML = userName.name;
//     userBox.appendChild(usersDiv);
// }
// document.body.appendChild(userBox);

// - 21. За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)
// let users = [{
//     name: 'vasya',
//     age: 31,
//     status: false,
//     address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
// }, {
//     name: 'petya',
//     age: 30,
//     status: true,
//     address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
// }, {
//     name: 'kolya',
//     age: 29,
//     status: true,
//     address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
// }, {
//     name: 'olya',
//     age: 28,
//     status: false,
//     address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
// }, {
//     name: 'max',
//     age: 30,
//     status: true,
//     address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
// }, {
//     name: 'anya',
//     age: 31,
//     status: false,
//     address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
// }, {
//     name: 'oleg',
//     age: 28,
//     status: false,
//     address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
// }, {
//     name: 'andrey',
//     age: 29,
//     status: true,
//     address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
// }, {
//     name: 'masha',
//     age: 30,
//     status: true,
//     address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
// }, {
//     name: 'olya',
//     age: 31,
//     status: false,
//     address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
// }, {
//     name: 'max',
//     age: 31,
//     status: true,
//     address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
// }];
//
// let userBox = document.createElement("div");
// for (let i = 0; i < users.length; i++) {
//     let user = users[i];
//     let div = document.createElement("div");
//     let userName = document.createElement("div");
//     let userAge = document.createElement("div");
//     let userStatus = document.createElement("div");
//     let userAdress = document.createElement("div");
//     userName.innerHTML = user.name;
//     userAge.innerHTML = user.age;
//     userStatus.innerHTML = user.status;
//     userAdress.innerHTML = user.address.country;
//     div.appendChild(userName);
//     div.appendChild(userAge);
//     div.appendChild(userStatus);
//     div.appendChild(userAdress);
//     userBox.appendChild(div);
// }
// document.body.appendChild(userBox);

// - 22. За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості
// let users = [{
//     name: 'vasya',
//     age: 31,
//     status: false,
//     address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
// }, {
//     name: 'petya',
//     age: 30,
//     status: true,
//     address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
// }, {
//     name: 'kolya',
//     age: 29,
//     status: true,
//     address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
// }, {
//     name: 'olya',
//     age: 28,
//     status: false,
//     address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
// }, {
//     name: 'max',
//     age: 30,
//     status: true,
//     address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
// }, {
//     name: 'anya',
//     age: 31,
//     status: false,
//     address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
// }, {
//     name: 'oleg',
//     age: 28,
//     status: false,
//     address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
// }, {
//     name: 'andrey',
//     age: 29,
//     status: true,
//     address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
// }, {
//     name: 'masha',
//     age: 30,
//     status: true,
//     address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
// }, {
//     name: 'olya',
//     age: 31,
//     status: false,
//     address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
// }, {
//     name: 'max',
//     age: 31,
//     status: true,
//     address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
// }];
//
// let userBox = document.createElement("div");
// let userAdress = document.createElement("div");
// for (let i = 0; i < users.length; i++) {
//     let user = users[i];
//     let div = document.createElement("div");
//     let adressDiv = document.createElement("div");
//     let userName = document.createElement("div");
//     let userAge = document.createElement("div");
//     let userStatus = document.createElement("div");
//     let userAdressCity = document.createElement("div");
//     let userAdressCount = document.createElement("div");
//     let userAdressStreet = document.createElement("div");
//     let userAdressHouseN = document.createElement("div");
//     userName.innerHTML = user.name;
//     userAge.innerHTML = user.age;
//     userStatus.innerHTML = user.status;
//     userAdressCity.innerHTML = user.address.city;
//     userAdressCount.innerHTML = user.address.country;
//     userAdressStreet.innerText = user.address.street;
//     userAdressHouseN.innerText = user.address.houseNumber;
//
//     div.appendChild(userName);
//     div.appendChild(userAge);
//     div.appendChild(userStatus);
//     adressDiv.appendChild(userAdressCity);
//     adressDiv.appendChild(userAdressCount);
//     adressDiv.appendChild(userAdressStreet);
//     adressDiv.appendChild(userAdressHouseN);
//     userBox.appendChild(div);
//     userAdress.appendChild(adressDiv);
//
// }
// document.body.appendChild(userBox);
// document.body.appendChild(userAdress);

// - 23. Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
// let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
// let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Частковий приклад реультату:
//     let usersWithCities = [{id: 1, name: 'vasya', age: 31, status: false, address: {user_id: 1, country: 'Ukraine', city: 'Ternopil'}}....]

// let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
// let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];
//
// for (const users of usersWithId) {
//     for (const cities of citiesWithId) {
//         if (users.id === cities.user_id){
//             users.adress = cities;
//         }
//
//     }
//
// }
// console.log(usersWithId);


//
// - 24. створити розмітці блок з id, class та текстом в середені. Зчитати окремо цей текст з селекторів по id , class та тегу
// let content = document.getElementById('content');
// let innerContentId = content.innerText;
// console.log(innerContentId);
//
// let classContent = document.getElementsByClassName('rules');
// for (const elements of classContent) {
//     console.log(elements.innerText);
// }

// - 25. змінити цей текст використовуючи селектори id, class,  tag
// let content = document.getElementById('content');
// let innerContentId = content.innerText;
// innerContentId = 'New TEXT';
// console.log(innerContentId);
//
// let classContent = document.getElementsByClassName('rules');
// for (const elements of classContent) {
//     elements.innerText = "JBUIHBNIJKN";
//     console.log(elements);
// }

// let tagContent = document.getElementsByTagName('h2');
// for (const elements of tagContent) {
//     elements.innerText = "!!!!!!!!";
//     console.log(elements);
// }

// - 26. змінити висоту та ширину блоку використовуючи селектори id, class,  tag
// let idBox = document.getElementById('content');
// idBox.style.width = '120px';
// idBox.style.height = '120px';
// console.log(idBox);
//
// let classBox = document.getElementsByClassName('rules');
// for (const box of classBox) {
//     box.style.width = '200px';
//     box.style.height = '200px';
//     console.log(box);
// }
//
// let tagBox = document.getElementsByTagName('h1');
// for (const box of tagBox) {
//     box.style.width = '300px';
//     box.style.height = '300px';
//     console.log(box);
// }

// - 27. за допомоги document.createElement та appendChild створити таблицю на 1 рядок з трьома ячейками всередені
// let tableBox = document.createElement('table');
// let trBox = document.createElement('tr');
// let tdBox = document.createElement('td');
// let tdBox_1 = document.createElement('td');
// let tdBox_2 = document.createElement('td');
// trBox.appendChild(tdBox);
// trBox.appendChild(tdBox_1);
// trBox.appendChild(tdBox_2);
//
// tableBox.appendChild(trBox);
// document.body.appendChild(tableBox);
// console.log(tableBox);

// - 28. за допомоги document.createElement, appendChild та циклу створити таблицю на 10 рядків з трьома ячейками всередені
// let tableBox = document.createElement('table');
// for (let i = 0; i < 10; i++) {
//     let trBox = document.createElement('tr');
//
//     for (let j = 0; j < 3; j++) {
//         let tdBox = document.createElement('td');
//         trBox.appendChild(tdBox);
//     }
//     tableBox.appendChild(trBox);
// }
//
// document.body.appendChild(tableBox);
// console.log(tableBox);

// - 29. за допомоги document.createElement, appendChild та 2х циклів створити таблицю на 10 рядків з 5 ячейками всередені
// let tableBox = document.createElement('table');
// for (let i = 0; i < 10; i++) {
//     let trBox = document.createElement('tr');
//
//     for (let j = 0; j < 5; j++) {
//         let tdBox = document.createElement('td');
//         trBox.appendChild(tdBox);
//     }
//     tableBox.appendChild(trBox);
// }
//
// document.body.appendChild(tableBox);
// console.log(tableBox);

// - 30. за допомоги document.createElement, appendChild та 2х циклів створити таблицю на n рядків з m ячейками всередені. n та m отримати з prompt
// let promptTr = +prompt();
// let promptTd = +prompt();
// let tableBox = document.createElement('table');
// for (let i = 0; i < promptTr; i++) {
//     let trBox = document.createElement('tr');
//
//     for (let j = 0; j < promptTd; j++) {
//         let tdBox = document.createElement('td');
//         trBox.appendChild(tdBox);
//     }
//     tableBox.appendChild(trBox);
// }
//
// document.body.appendChild(tableBox);
// console.log(tableBox);

// --Завантажити з мережі будь-який шаблон сайту. Підключити до нього свій скріпт-файл. У файлі прописати наступні доступи та дії

// -31.  знайти всі елементі, які мають id
// let allElements = document.getElementsByTagName('*');
// for (const element of allElements) {
//     if (element.getAttribute('id')) {
//         console.log(element);
//     }
//
// }

// -32.  знайти всі параграфи ,та змінити текст на hello oktenweb!
// let allElements = document.getElementsByTagName('p');
// for (const element of allElements) {
//         element.innerText = 'hello oktenweb!';
//         console.log(element);
// }

//  33.  - знайти всі div та змінити ім колір на червоний

// let allElements = document.getElementsByTagName('div');
// for (const element of allElements) {
//         element.style.backgroundColor = 'red';
//         console.log(element);
// }

// ============
// ====class===
//     ============
//
//    34.  - є сторінка rules.html. Контентом сторінки є заголовки та параграфи. Заголовки (h2) характеризують тему контенту яка вказана в параграфі.
//     створити скрипт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li), який буде змістом того, що знаходиться на сторінці.
//     Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.

// let h2Arr = document.getElementsByTagName('h2');
// let content = document.getElementById('content');
// let ulElement = document.createElement('ul');
// for (const h2 of h2Arr) {
//     let liElement = document.createElement('li');
//     liElement.innerText = h2.innerText;
//     ulElement.appendChild(liElement);
//
// }
// content.appendChild(ulElement);
//
// - 35. Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
//     При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//     Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html
// //todo add rules
//
// let rules = [
//     {
//         title: 'Первое правило Бойцовского клуба.',
//         body: 'Никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Второе правило Бойцовского клуба.',
//         body: 'Никогда никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Третье правило Бойцовского клуба.',
//         body: 'В схватке участвуют только двое.'
//     },
//     {
//         title: 'Четвертое правило Бойцовского клуба.',
//         body: 'Не более одного поединка за один раз.'
//     },
//     {
//         title: 'Пятое правило Бойцовского клуба.',
//         body: 'Бойцы сражаются без обуви и голые по пояс.'
//     },
//     {
//         title: 'Шестое правило Бойцовского клуба.',
//         body: 'Поединок продолжается столько, сколько потребуется.'
//     },
//     {
//         title: 'Седьмое правило Бойцовского клуба.',
//         body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
//     },
//     {
//         title: 'Восьмое и последнее правило Бойцовского клуба.',
//         body: 'Новичок обязан принять бой.'
//     },
//
// ];
// let wrap = document.createElement('div');
// wrap.id = 'wrap';
// for (let i = 0; i < rules.length; i++) {
//     let rule = rules[i];
//     let div = document.createElement('div');
//     let h2 = document.createElement('h2');
//     let p = document.createElement('p');
//     div.className = `rule rules${i}`;
//     h2.innerText = rule.title;
//     p.innerText = rule.body;
//     div.appendChild(h2);
//     div.appendChild(p);
//     wrap.appendChild(div);
// }
//
// document.body.appendChild(wrap);

//
//
//
//
// *** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі users. За допомогою document.createElement вивести їх в браузер. Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт в свій блок (блок в блоці).
// *** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі posts. За допомогою document.createElement вивести їх в браузер. Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт(якщо він існує) в свій блок (блок в блоці).
// *** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі comments. За допомогою document.createElement вивести їх в браузер. Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт(якщо він існує) в свій блок (блок в блоці).
// ****** при помощи fetch (как в примере) получить от jsonplaceholder все posts. Внутри последнего then() сделать еще один fetch который сделает запрос и получит все comments. Объеденить соответсвующий post с соответсвующими comment и вывести в браузер. Подсказка : в каждом comment есть поле postId которое определяет какой комментарий принадлежит какому посту