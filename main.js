var pNameInput = document.getElementById("productName");
var pPriceInput = document.getElementById("productPrice");
var pCategoryInput = document.getElementById("productCategory");
var pDesceInput = document.getElementById("productDesc");
var pList = [];

if (localStorage.getItem("product") !== null) {
  pList = JSON.parse(localStorage.getItem("product"));
  displayProductName();
} else {
  pList = [];
}

function addProduct() {
  var product = {
    name: pNameInput.value,
    price: pPriceInput.value,
    category: pCategoryInput.value,
    desc: pDesceInput.value,
  };
  pList.push(product);
  displayProductName();
  localStorage.setItem("product", JSON.stringify(pList));

  resetAll();
}

function displayProductName() {
  var string = "";

  for (var i = 0; i < pList.length; i++) {
    string += `<tr>
    <td> ${[i]}</td>
    <td> ${pList[i].name}</td>
    <td> ${pList[i].price}</td>
    <td> ${pList[i].category}</td>
    <td> ${pList[i].desc}</td>  <td><button class="btn btn-outline-danger" onclick="deleteProduct(${i})">Delete</button> </td>
   <td> <button class="btn btn-outline-warning" onclick="UpDate(${i})">UpDate</button> </td>
    </tr>`;
  }
  rowData.innerHTML = string;
}

function resetAll() {
  pNameInput.value = "";
  pPriceInput.value = "";
  pCategoryInput.value = "";
  pDesceInput.value = "";
}

function deleteProduct(index) {
  pList.splice(index, 1);
  displayProductName();
  localStorage.setItem("product", JSON.stringify(pList));
}
