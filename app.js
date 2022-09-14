
document.addEventListener("DOMContentLoaded", function(){
  let transactionObjArr = JSON.parse(localStorage.getItem("transactionData"));
  for (i=0; i < transactionObjArr.length; i++) {
      insertRowInTransactionTable(transactionObjArr[i])
   }
})




const form = document.getElementById("formTask")

form.addEventListener("submit", function(e) {
e.preventDefault();
let formacion = new FormData(form)
let transactionObj= converFormDataToTransactionObj(formacion);

if(localStorage.getItem('transactionData') === null) {
  let transactionArray = [];
  transactionArray.push(transactionObj);
  localStorage.setItem('transactionData', JSON.stringify(transactionArray));
} else {
  let transactionArray = JSON.parse(localStorage.getItem('transactionData'));
  transactionArray.push(transactionObj);
  localStorage.setItem('transactionData', JSON.stringify(transactionArray));
}

insertRowInTransactionTable(transactionObj)
})

function converFormDataToTransactionObj(formacion) {
  let type = formacion.get("typeTransaction")
  let descripcion = formacion.get("description")
  let monto = formacion.get("monto")
  let categoria = formacion.get("category")
  return {
    "type": type,
    "descripcion": descripcion,
    "monto": monto,
    "categoria": categoria
  }
}


function insertRowInTransactionTable(transactionObj) {

  let monto = document.getElementById("amount").value;
  let table = document.getElementById("tasks");
  let row = table.insertRow(-1);
  row.setAttribute("data-transaction-id", transactionObj["transactionId"])

    let newCell = row.insertCell(0);
    newCell.textContent = transactionObj["type"]

    newCell = row.insertCell(1);
    newCell.textContent = transactionObj["descripcion"]

    newCell = row.insertCell(2);
    newCell.textContent = `$ ${monto}`

    newCell = row.insertCell(3);
    newCell.textContent = transactionObj["categoria"];

    let NewdeleteCell = row.insertCell(4);
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "delete";
    NewdeleteCell.appendChild(deleteButton)

  deleteButton.addEventListener("click", function(e) {
    let transactionRow = e.target.parentNode.parentNode;
    let transactionId = transactionRow.getAttribute("data-transaction-id")
    transactionRow.remove();
    deleteTransactionObj(transactionId)
    })

  form.reset();
}

function deleteTransactionObj(transactionId) {
  let transactionObjArr = JSON.parse(localStorage.getItem("transactionData"));
  let transactionIndexArray = transactionObjArr.findIndex(element => element.transactionId === transactionId)
  transactionObjArr.splice(transactionIndexArray, 1)
  let transactionArrayJSON = JSON.stringify(transactionObjArr)
  localStorage.setItem("transactionData", transactionArrayJSON)
}








