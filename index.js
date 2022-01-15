let myleads = [];
const inpbtn = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");
inpbtn.addEventListener("click", function () {
  myleads.push(inputEl.value);
  inputEl.value = "";
  renderLeads();
});
function renderLeads() {
  let listItems = "";
  for (let a = 0; a < myleads.length; a++) {
    // listItems +=
    //   "<li><a target='_blank' href='" +
    //   myleads[a] +
    //   "'>" +
    //   myleads[a] +
    //   "</a>" +
    //   "</li>";
    listItems += `
    <li>
     <a target='_blank' href='${myleads[a]}'> 
     ${myleads[a]}
     </a>
    </li>
    `;
    // const li = document.createElement("li");
    // li.textContent = myleads[a];
    // ulEl.append(li);
  }
  ulEl.innerHTML = listItems;
}
