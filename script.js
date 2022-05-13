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
      deleteButton.classList.add("delete");

  deleteButton.addEventListener("click", (e) => {
      const button = e.target;
      const buttonParent = button.parentElement;
      const buttonGrandParent = buttonParent.parentElement;
      buttonGrandParent.parentElement.removeChild(buttonGrandParent);
  });
  
}
  
function createCell(expense) {
  const dataCell = document.createElement("td");
    dataCell.textContent = expense;
    return dataCell;
}


 