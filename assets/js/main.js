
var persons = [
    { name: "Bob", surname: "King", age: 20 },
    { name: "Patrick", surname: "Bateman", age: 28 },
    { name: "Ryan", surname: "Gosling", age: 42 },
    { name: "John", surname: "Wick", age: 24 }
];

var table = document.getElementById("contentTable");

var tableBody = table.querySelector("tbody");

persons.forEach(function(person) {
    var row = tableBody.insertRow(tableBody.rows.length);
    var content1 = row.insertCell(0);
    var content2 = row.insertCell(1);
    var content3 = row.insertCell(2);

    content1.textContent = person.name;
    content2.textContent = person.surname;
    content3.textContent = person.age;
});

