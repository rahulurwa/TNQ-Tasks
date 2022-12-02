let form = document.querySelector("form");
let select = document.querySelector("select");
let btn = document.getElementById("loadBtn");
let result = document.querySelector("#result");
let div = document.getElementById("divBlock");
form.addEventListener("submit", async e => {
  e.preventDefault();
  if (e.target[0].value === "active") {
    let data = await window.fetch("./fetch.json");
    let data1 = await data.json();
    console.log(data1);
    data1?.map(x => {
      if (x.status === "active")
        result.innerHTML += `<table>
    <tr><td>${x.capsule_id}</td>
    <td>${x.missions.length}</td>
    <td>${x.details}</td></tr>
</table>`;
    });
  }
});
