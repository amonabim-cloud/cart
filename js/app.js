async function loadData() {

const people = await fetch("data/people.json")
.then(r => r.json());

const banks = await fetch("data/banks.json")
.then(r => r.json());

const cards = await fetch("data/cards.json")
.then(r => r.json());

   console.log(cards); 


const container = document.getElementById("cards");


cards.forEach(card => {

const person = people.find(
p => p.id === card.personId
);

const bank = banks.find(
b => b.id === card.bankId
);


container.innerHTML += `

<div class="card" style="background:${bank.color}">

    <div class="bank-header">

        <img src="${bank.logo}" 
        class="bank-logo">

        <h3>${bank.name}</h3>

    </div>


    <div class="number">
        ${formatCardNumber(card.cardNumber)}
    </div>


    <p>
    👤 ${person.name}
    </p>


    <p>
    💳 ${card.title || "کارت بانکی"}
    </p>


    <button onclick="copyText('${card.cardNumber}')">
    📋 کپی کارت
    </button>


</div>

`;


});

}
function formatCardNumber(number) {
    return number.replace(/(.{4})/g, "$1 ");
}
loadData();
function copyText(text) {

    navigator.clipboard.writeText(text);

    alert("کپی شد ✅");

}


function toggleCard(id) {

    const element = document.getElementById(id);

    if(element.innerText.includes("*")) {

        element.innerText = formatCardNumber(
            element.dataset.card
        );

    } else {

        element.innerText = hideCardNumber(
            element.dataset.card
        );

    }

}

function hideCardNumber(number) {

    return number.substring(0,4)
    + " **** **** "
    + number.substring(12);

}
