const thk = document.getElementById("myThank");
const rat = document.getElementById("rating");
const btn = document.getElementById("muSubmit");
btn.onclick = () => {
  if (thk.style.display !== "none") {
    thk.style.display = "block";
    rat.style.display = "none";
  } else {
    thk.style.display = "none";
  }
};

const pagContent = document.querySelector("#pag");
pagContent.addEventListener("click", (e) => {
  e.preventDefault();
  if ((e.target.classList = "page-link")) {
    const pagNum = e.target.innerText;
    let num = "";
    for (let value in pagNum) {
      num += pagNum[value] + " ";
    }
    document.getElementById("slt").innerHTML = `You selected ${num}
         out of 5`;
  }
});



