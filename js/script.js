
// Definiamo tutti gli elementi inseriti in input

const nameField = document.getElementById('nome_biglietto');
const kmField = document.getElementById('km_biglietto');
const ageField = document.getElementById('age');




// Definiamo tutti gli elementi della pagina in output

const passengerName = document.getElementById('passenger-name');
const ticketType = document.getElementById('ticket-offer');
const trainPosition = document.getElementById('carriage');
const ticketCode = document.getElementById('ticket-code');
const ticketPrice = document.getElementById('ticket-price');
const container = document.getElementById('micro');
const button = document.getElementById('green_button')

// Scrivendo nel form prendiamo i valori dell'input e li scriviamo nei determinati blocchi

button.addEventListener('click' , (event) => {


    // Blocchiamo l'invio del form
    event.preventDefault();

    // Stampiamo il codice

    passengerName.textContent = nameField.value.trim();

      
    let pricePerKm = 0.21;
    let discount = 0;
    

    if(ageField.value === "minorenne"){

        discount = 0.2;
        ticketType.textContent = "Biglietto scontato (Minorenne)"

    }else if(ageField.value === "over65"){
        ticketType.textContent = "Biglietto scontato (Over 65)"
        discount = 0.4;
    }else{
        ticketType.textContent = 'Biglietto Standard';
    }

    const totalPrice = (kmField.value * pricePerKm * (1 - discount)).toFixed(2)

    

    ticketPrice.textContent = `${totalPrice} €`;

    // Generare numeri causuali per riempire spazi vuoti
    const randomCode = Math.floor(Math.random() * 100000) + 1; // Numero casuale tra 1 e 100000
    const randomPositionCode =Math.floor(Math.random() * 10) + 1
    ticketCode.textContent = `CP-${randomCode}`; // Stampiamo il codice nel formato "CP-XXXXX"
    trainPosition.textContent = randomPositionCode; // Stampiamo il codice nel formato XXXXX
    

})

