let addToy = false;

document.addEventListener("DOMContentLoaded", () => {

  function getStuff() {
    return fetch("http://localhost:3000/toys")
        .then(res => res.json())
        .then(res => makeCard(res))
        .catch(error => addErrorToView(error))
  };

  function makeCard(res) {
    console.log(res);
  };

  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
  getStuff();
});
