async function loadData() {

  const people = await fetch("data/people.json")
    .then(response => response.json());

  const banks = await fetch("data/banks.json")
    .then(response => response.json());

  const cards = await fetch("data/cards.json")
    .then(response => response.json());


  cards.forEach(card => {

    const person = people.find(
      p => p.id === card.personId
    );

    const bank = banks.find(
      b => b.id === card.bankId
    );


    console.log({
      صاحب: person.name,
      بانک: bank.name,
      شماره: card.cardNumber
    });

  });

}


loadData();
