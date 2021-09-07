const users = [
    {
        name: "Vasya",
        age: 25,
        email: "vasya@mail.ru"
    },
    {
        name: "Kolya",
        age: 18,
        email: "kolya@mail.ru"
    },
    {
        name: "Petya",
        age: 15,
        email: "petya@mail.ru"
    },
    {
        name: "Maria",
        age: 25,
        email: "maria@mail.ru"
    },
];

function showUsers(users) {
    const tbody = document.querySelector('#users>tbody')
    tbody.innerHTML = "";
    /*tbody.childNodes.forEach((child) => {
        child.remove();
    });*/
    for (let user of users){
        const tr =document.createElement('tr');

        const tdName = document.createElement ('td');
        tdName.innerText = user.name;

        const tdAge = document.createElement ('td');
        tdAge.innerText = user.age;

        const tdEmail = document.createElement ('td');
        tdEmail.innerText = user.email;

        const tdAction = document.createElement('td');
        const delBtn = document.createElement('input');
        delBtn.type ='button';
        delBtn.value ='Remove';
        delBtn.addEventListener('click', () => {
            const index = users.indexOf(user);
            if (index !== -1){
                users.splice(index, 1);
                showUsers(users);
            }
        })
        tdAction.append(delBtn);

        tr.append (tdName, tdAge, tdEmail, tdAction);
        tbody.appendChild(tr);
        
    }
}
showUsers(users);

function addUser(){
    const name = document.getElementById('name');
    const age =document.getElementById('age');
    const email = document.getElementById('email');
    
    users.push({
        name: name.value,
        age: age.value,
        email: email.value
    });
    showUsers(users);
    name.value = null;
    age.value = null;
    email.value = null;
}