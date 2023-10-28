setName();
setTicketPrice();
toggleBoothFields(document.getElementById(returnRadioValue()));

window.addEventListener("load", initialize);

function initialize() {
  document.getElementById("firstname").addEventListener("change", setName);
  document.getElementById("lastname").addEventListener("change", setName);
  document.getElementById("ticketselect").addEventListener("change", setTicketPrice);
  document.getElementById("boothradios").addEventListener("change", function(event) {
    toggleBoothFields(event.target.value);
  })
  document.getElementById("boothinfo").addEventListener("change", setBoothName);
}


function setName() {
  var firstname = document.getElementById("firstname").value;
  var lastname = document.getElementById("lastname").value;
  var name = firstname + " " + lastname;

  document.getElementById("final_name").value = name;
}

function setTicketPrice() {
  var ticketOption = parseInt(document.getElementById("ticketselect").value);
  var ticketCost = 0.00;

  switch (ticketOption) {
    case 0: // "Select an option"
      ticketCost = 0;
      break;
    case 1: // Day Pass
      ticketCost = 9.99;
      break;
    case 2: // 3-Days
      ticketCost = 24.99;
      break;
    case 3: // Full Stay
      ticketCost = 39.99;
      break;
  }

  document.getElementById("ticketcost").value = ticketCost.toFixed(2);

  updateCost();
}

function setBoothName() {
  var boothname = document.getElementById("boothinfo").value;
  document.getElementById("booth_name").value = boothname;
}

function toggleBoothFields(radioChecked) {
  const collection = document.getElementsByClassName("boothitem");
  var boothCost = (100).toFixed(2); // A booth costs $100 to host

  switch (parseInt(radioChecked)) {
    case 0: // Yes for hosting booth
      for (var i = 0; i < collection.length; ++i) {
        collection[i].style.display = "block";
      }
      document.getElementById("booth_cost").value = boothCost;
      break;
    case 1: // No for hosting booth
      for (var i = 0; i < collection.length; ++i) {
        collection[i].style.display = "none";
      }
      document.getElementById("booth_cost").value = (0).toFixed(2);
      break;
  }
  updateCost();
}

function updateCost() {
  var ticketCost = parseFloat(document.getElementById("ticketcost").value);
  var boothCost = parseFloat(document.getElementById("booth_cost").value);
  var salesTax = (ticketCost + boothCost) * 0.06;
  var finalCost = ticketCost + boothCost + salesTax;

  document.getElementById("salestax").value = salesTax.toFixed(2);
  document.getElementById("finalcost").value = finalCost.toFixed(2);
}

function returnRadioValue() {
  const radios = document.getElementsByName("hostingbooth");
  for (var i = 0; i < radios.length; ++i) {
    if (radios[i].checked) {
      return i;
    }
  }
}