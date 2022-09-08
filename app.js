const form = document.getElementById("formTask")

form.addEventListener("submit", function(e) {
  e.preventDefault();
  let formInfo = new FormData(form)
  let table = document.getElementById("tasks");
  let row = table.insertRow(-1);

let type = formInfo.get("typeTransaction")
let descripcion = document.getElementById("description").value;
let monto = document.getElementById("monto").value;
let categoria = document.getElementById("categoria").value;

if (type,descripcion,monto,categoria == "") {
  alert("no dejes espacios vacios");
} else {
  let newCell = row.insertCell(0);
  newCell.textContent = `${type}`

  newCell = row.insertCell(1);
  newCell.textContent = `${descripcion}`

  newCell = row.insertCell(2);
  newCell.textContent = `${monto}`

  newCell = row.insertCell(3);
  newCell.textContent = `${categoria}`
}

document.getElementById("formTask").reset();
})

agregar();
