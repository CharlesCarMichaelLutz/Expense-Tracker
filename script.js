
function init(){
  const addExpenseButton = document.getElementById("submit");
  addExpenseButton.onclick = getData;
}

function getData(){
  const entry = document.getElementById("form");
  let text = "";
  for(var i = 0; i < entry.length-1; i++) {
    text += entry.elements[i].value + " ";
  }
  document.getElementById("body").innerText = text;
  
  //document.getElementById("body").insertrow(node);
  //const node = document.createElement("tr");
  //node.innerText = text;
}

/*
function insertRow(){
    const table = document.getElementById("myTable");
    const row = table.insertRow(1);
    const cell = row.insertcell(0);
        cell.textContent = "New Row";
}

function getExpense() {
  const line = document.getElementById("body");

  const row = document.createElement("tr");

  //const text = document.getElementById("description").value;
      row.textContent = text;  

  document.line.insertRow(row); 
}
*/
window.onload = init;


//add click event listener to submit button
 //when submit button clicked
  //1.create a row in the table
  //2.create date element
  //3.create descritpion element
  //4.create location element
  //5.create amount element
  //6.display four items in the table row 


//add click event listener to each expense item
 //when delete button clicked
  //1.delete a row in the table
  //2.all data gets deleted from row 
     // upon clicking delete button


 