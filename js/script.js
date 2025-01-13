
// Definiamo tutti gli elementi inseriti in input

const nameField = document.getElementById('nome_biglietto');
const kmField = document.getElementById('km_biglietto');
const ageField = document.getElementById('age_biglietto');




// Definiamo tutti gli elementi della pagina in output

const passengerName = document.getElementById('passenger-name');
const ticketType = document.getElementById('ticket-offer');
const trainPosition = document.getElementById('carriage');
const ticketCode = document.getElementById('ticket-code');
const ticketPrice = document.getElementById('ticket-price');
const container = document.getElementById('micro');

// Scrivendo nel form prendiamo i valori dell'input e li scriviamo nei determinati blocchi

container.addEventListener('input' , (event) => {


    // Blocchiamo l'invio del form
    // event.preventDefault();

    // Stampiamo il codice

    passengerName.textContent = nameField.value.trim();




})

