let data = [
    {
      name: "Bob",
      job: "teacher",
      age: 35,
      location: "New York",
    },
    {
      name: "Clark",
      job: "lawyer",
      age: 40,
      location: "Los Angeles",
    },
    {
      name: "Evelina",
      job: "doctor",
      age: 29,
      location: "Chicago",
    },
    {
      name: "Francesca",
      job: "lawyer",
      age: 33,
      location: "Miami",
    },
    {
      name: "Anna",
      job: "doctor",
      age: 28,
      location: "Boston",
    },
    {
      name: "Brandon",
      job: "teacher",
      age: 45,
      location: "Seattle",
    },
    {
      name: "Batman",
      job: "lawyer",
      age: 37,
      location: "Gotham",
    },
  ];

let allCheckboxes = document.querySelectorAll("[type=checkbox][name=occupation]")
let personList = document.querySelector("ul#results");

const filterPeople = () => {
    personList.innerHTML = "";
    //Hämta värden från inputs
    let occupations = [];

    allCheckboxes.forEach(box => {
        if(box.checked){
            occupations.push(box.value)
        }
    })

    localStorage.setItem("checked", JSON.stringify(occupations));

    //Filtrera originaldata

    let results = data.filter(person => occupations.includes(person.job));

    //Skriva ut i DOM:en

    results.sort((a,b)=> {
        return a.name.localeCompare(b.name)}
    )

    results.forEach(person => {
        let li = document.createElement("li");
        li.textContent = person.name + " - " + person.job;
        personList.append(li);
    })

}

//Bonus - kolla local storage vilka som behöver inte.
if(localStorage.getItem("checked")){
    let checkedBoxes = JSON.parse(localStorage.getItem("checked"));

    allCheckboxes.forEach(box => {
        if(checkedBoxes.includes(box.value))
            box.checked = true;
    })
    filterPeople();
}



allCheckboxes.forEach(box => {
    box.addEventListener("change", filterPeople)
})