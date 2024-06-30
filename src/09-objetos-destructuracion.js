//Desestructuración de objetos

const user = {
    username: 'rafael',
    email: 'rafael@google.com',
    age: '27',
    ranking: 9,
}

//const username = user.username;
//const ranking = user.ranking;
//const age = user.age;

const { username, ranking, age } = user;
console.log(`${username} tiene ${age} de edad`);
console.log(ranking);