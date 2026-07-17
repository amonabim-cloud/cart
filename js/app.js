async function loadData() {

const people = await fetch("data/people.json")
.then(r => r.json());

const banks = await fetch("data/banks.json")
.then(r => r.json());

const cards = await fetch("data/cards.json")
.then(r => r.json());


const container = document.getElementById("cards");


cards.forEach(card => {

const person = people.find(
p => p.id === card.personId
);

const bank = banks.find(
b => b.id === card.bankId
);


container.innerHTML += `

<div class="card">

<h3>${bank.name}</h3>

<div class="number">
${card.cardNumber}
</div>

<p>
👤 ${person.name}
</p>

<p>
شبا:
${card.sheba}
</p>

<p>
حساب:
${card.accountNumber}
</p>

</div>

`;

});

}

loadData();


function hideCardNumber(number) {

    return number.substring(0,4)
    + " **** **** "
    + number.substring(12);

}
