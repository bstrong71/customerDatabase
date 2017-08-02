console.log(customers);

let container = document.getElementById('container');
let item = document.getElementById('item');
let individual = ``;

for (var i = 0; i < 12; i++) {

  individual += `
      <div id="indiv">
          <div id="image">
              <img src=${customers.results[i].picture.large}>
          </div>
          <h3>${customers.results[i].name.first} ${customers.results[i].name.last}</h3>
          <div id="emailAddr">
            <span id="email1">${customers.results[i].email}</span>
          </div>
          <br>
          <address>
              ${customers.results[i].location.street}<br>
              ${customers.results[i].location.city}, ${customers.results[i].location.state} ${customers.results[i].location.postcode}<br>
          </address>
          <div id="phoneNum">${customers.results[i].phone}</div>
      </div>
    `;
    container.innerHTML = individual;
}
