const table = document.getElementById("newTable")
const tbody = document.createElement('tbody');
const addUser = document.getElementById("addUser");




const userData = [
    // {
    //     id: 1,
    //     userName: "Easin",
    //     age: 20,
    //     email: "easin@gmail.com",
    //     city: "dhaka"

    // },
    // {
    //     id: 2,
    //     userName: "Easin",
    //     age: 20,
    //     email: "easin@gmail.com",
    //     city: "dhaka"

    // },
    // {
    //     id: 1,
    //     userName: "Easin",
    //     age: 20,
    //     email: "easin@gmail.com",
    //     city: "dhaka"

    // },
    // {
    //     id: 1,
    //     userName: "Easin",
    //     age: 20,
    //     email: "easin@gmail.com",
    //     city: "dhaka"

    // }
]






function createTable (e) {
    e.preventDefault()
        userData.map ((item, index)=>{
        const tr = document.createElement('tr');
        const values = Object.values(item)
      
        for (let i = 0; i < values.length; i++) {
         const td = document.createElement('td');
        td.innerText = values[i];
        tr.appendChild(td);
        tbody.appendChild(tr);
        
       }
    });
    table.appendChild(tbody);
}

addUser.addEventListener("click", createTable )


