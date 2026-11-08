//Spread operator
let students = ["Matt", "Daniel", "Bryan"];
let CopiedStudents =
[...students, ...student, ...student];
//Array would be now be: ["Matt", "Daniel", "Bryan", "Matt", "Daniel", "Bryan", "Matt", "Daniel", "Bryan"]
let UserData = {
    user: "George",
    age: 41,
    favoritefood: "Pizza"
};

// let userName = userData.name;
// let userAge = userData.age;
// let favoritefood = userData.favoriteFood;a
let {username, userage, favoriteFood} = userData;