let myleads = [];
const inpbtn = document.getElementById("input-btn");
const delbtn = document.getElementById("delete-btn");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");
const myleadsinLocal = JSON.parse(localStorage.getItem("myleads"));

const tabbtn = document.getElementById("tab-btn");

if (myleadsinLocal) {
  myleads = myleadsinLocal;
  render(myleads);
}
//const tabs = [{ url: "linkedin.com/home/?originalSubdomain=in" }];

tabbtn.addEventListener("click", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    console.log(tabs);
    myleads.push(tabs[0].url);
    localStorage.setItem("myleads", JSON.stringify(myleads));
    render(myleads);
  });
});

function render(leads) {
  let listItems = "";
  for (let a = 0; a < leads.length; a++) {
    // listItems +=
    //   "<li><a target='_blank' href='" +
    //   myleads[a] +
    //   "'>" +
    //   myleads[a] +
    //   "</a>" +
    //   "</li>";
    listItems += `
    <li>
     <a target='_blank' href='${leads[a]}'> 
     ${leads[a]}
     </a>
    </li>
    `;
    // const li = document.createElement("li");
    // li.textContent = myleads[a];
    // ulEl.append(li);
  }
  ulEl.innerHTML = listItems;
}
delbtn.addEventListener("click", function () {
  localStorage.clear();
  myleads = [];
  render(myleads);
});

inpbtn.addEventListener("click", function () {
  myleads.push(inputEl.value);
  inputEl.value = "";
  localStorage.setItem("myleads", JSON.stringify(myleads));
  render(myleads);
});
