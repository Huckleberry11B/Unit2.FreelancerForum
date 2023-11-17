const state = {
    averagePrice: 76,
    freelancers: [
        {name: "Dr. Doom", price: 50, occupation: "Evil Genius"},
        {name: "Dr. Pepper", price: 25, occupation: "Soul Soother"},
        {name: "The Doctor", price: 100, occupation: "Time Traveler"},
        {name: "James Earl Jones", price: 200, occupation: "Darth Vader"},
        {name: "Ryan Renalds", price: 69, occupation: "Dead Pool"},
        {name: "Wolverine", price: 75, occupation: "Anti-Hero"},
        {name: "Kratos", price: 15, occupation: "God Killer"},
    ],
} 



function updateAveragePrice() {
    let total = 0;

    for (let i = 0; i < state.freelancers.length; ++i) {
        const currentFreelancer = state.freelancers[i];
        
        total += currentFreelancer.price;
    }
    state.averagePrice = Math.round(total / state.freelancers.length);
}

function addFreelancerRow(freelancers) {
    state.freelancers.push(freelancers);
}

function createFreelancerTableRow(freelancer) {
    const tr = document.createElement('tr');

    const nameData = document.createElement('td');
    const occupationData = document.createElement('td');
    const priceData = document.createElement('td');

    nameData.textContent = freelancer.name;
    occupationData.textContent = freelancer.occupation;
    priceData.textContent = freelancer.price;

    tr.appendChild(nameData, occupationData, priceData);

    return tr;
}

function createTableHeaders() {
    const tr = document.createElement('tr');

    const nameData = document.createElement('th');
    const occupationData = document.createElement('th');
    const priceData = document.createElement('th');

    nameData.textContent = 'Name';
    occupationData.textContent = 'Occupation';
    priceData.textContent = 'Price';

    tr.append(nameData, occupationData, priceData);
console.log(nameData, occupationData, priceData);
    return tr;
}

function clearTable() {
    const table = document.getElementById('freelancer_tab');

    while(table.childNodes.length) {
        table.removeChild(table.childNodes[0]);
    }
}

function render() {
    clearTable();

    const table = document.getElementById('freelancer_tab');

    table.appendChild(createTableHeaders());

    for (let i = 0; i < state.freelancers.length; ++i) {

        const currentFreelancers = state.freelancers[i];

        const row = createFreelancerTableRow(currentFreelancers);



        table.appendChild(row);        
    }

    updateAveragePrice();

    const priceText = document.getElementById('avgPrice');

    priceText.textContent = 'The average starting price is $${state.averagePrice}.';
}

render();

