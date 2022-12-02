let form = document.querySelector("form");
let inp = document.getElementById("inputField");
let opt = document.getElementById("outputField");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  let fetchData = inp.value;
  let data = eval(fetchData);
  let arr = data.map(function (val) {
    return val.id;
  });
  console.log(arr)
  arr.some(function (name, idx) {
    let dup = arr.indexOf(name) != idx;
    if (dup === true) {
      alert(`in json  is Duplicated Value `);
      opt.value = "";
    } else {
      data.map(e => {
        opt.innerHTML += `<div class="root" data-id=${e.id}>
       <span class="username">${e.username}</span>
       <span class="video_name">${e.video_name}</span>
       <span class="additional_details">
           <span class="type">${e.action}</span>
       </span>
   </div>`;
      });
    }
  });
});


