const user = {
    username: 'rafael',
    email: 'rafael@google.com',
    age: '27',
    ranking: 9,
}

//const username = user.username;
//const ranking = user.ranking;
//const age = user.age;

const detail1 = (user) => {
    const { username, email } = user;
    console.log(`El detalle del usuario ${username} con correo ${email}`);
}

const detail2 = ({ username, email }) => {
    console.log(`El detalle del usuario ${username} con correo ${email}`);
}

detail1(user);
detail2(user);