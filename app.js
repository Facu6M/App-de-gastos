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




document.addEventListener("DOMContentLoaded", function(){
    let transactionObjArr = JSON.parse(localStorage.getItem("transactionData"));
    for (i=0; i < transactionObjArr.length; i++) {
        insertRowInTransactionTable(transactionObjArr[i])
     }
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

  let table = document.getElementById("tasks");
  let row = table.insertRow(-1);

    let newCell = row.insertCell(0);
    newCell.textContent = transactionObj["type"]

    newCell = row.insertCell(1);
    newCell.textContent = transactionObj["descripcion"]

    newCell = row.insertCell(2);
    newCell.textContent = transactionObj["monto"]

    newCell = row.insertCell(3);
    newCell.textContent = transactionObj["categoria"];

  form.reset();
}









