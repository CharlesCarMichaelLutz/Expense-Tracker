const expenseDate = document.getElementById("date");
const expenseDescription = document.getElementById("description");
const expenseLocation = document.getElementById("location");
const expenseAmount = document.getElementById("amount");

const form = document.getElementById("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const newExpense = {
    date: expenseDate.value,
    description: expenseDescription.value,
    location: expenseLocation.value,
    amount: expenseAmount.value
  };

  getData(newExpense);

});

function getData(expense){
  const newTableRow = document.createElement("tr");
  document.getElementById("body").appendChild(newTableRow); 

  const dateCell = createCell(expense.date);
      newTableRow.appendChild(dateCell);

  const descriptionCell = createCell(expense.description);
      newTableRow.appendChild(descriptionCell);

  const locationCell = createCell(expense.location);
      newTableRow.appendChild(locationCell);

  const amountCell = createCell(expense.amount);
      newTableRow.appendChild(amountCell);
  
  const deleteCell = document.createElement("td");
      newTableRow.appendChild(deleteCell);

  const deleteButton = document.createElement("button");
      deleteButton.innerText = "X";
      deleteCell.appendChild(deleteButton);

  deleteButton.addEventListener("click", () => 
  handleRemove(newTableRow));
  
}
  
function createCell(expense) {
  const dataCell = document.createElement("td");
    dataCell.textContent = expense;
    return dataCell;
}


function handleRemove(newTableRow) {
  
       const deleteRow = document.getElementById("tr");
        deleteRow.parentElement.removeChild(newTableRow);
}



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


 