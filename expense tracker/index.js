
const arr = [];
function onSubmit(event) {
  event.preventDefault();
  let amt = event.target.amount.value;
  let desc = event.target.description.value;
  let category = event.target.category.value;

  let obj = { amt, desc, category };

  localStorage.setItem (obj.amt, JSON.stringify(obj));
  displayDetails(obj);
}

function displayDetails(obj) {
  const parentElement = document.getElementById("item3");
  const child = document.createElement("li");
  child.textContent = `expense_amt:${obj.amt},description:${obj.desc},category:${obj.category}`;
  parentElement.appendChild(child);

  //delete button
  const btn = document.createElement("input");
  btn.type = "button";
  btn.value = "delete";
  child.appendChild(btn);

  btn.onclick = () => {
    parentElement.removeChild(child);
    localStorage.removeItem(obj.amt);
  };
  //edit button
  const edit_btn = document.createElement("input");
  edit_btn.type = "button";
  edit_btn.value = "edit";
  child.appendChild(edit_btn);

  edit_btn.onclick = () => {
    parentElement.removeChild(child);
    localStorage.removeItem(obj.category);
    document.getElementById("amount").value = obj.amt;
    document.getElementById("description").value = obj.desc;
    document.getElementById("category").value = obj.category;
    localStorage.getItem(details);
  };
}
