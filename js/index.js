// const table = document.getElementById("newTable");
// const addUser = document.getElementById("addUser");

// const userData = [];

// function newTable() {

//     const tbody = document.createElement('tbody');
//     userData.forEach((item) => {
//         const {id, userName, age, email, city} = item;
//         const tr = document.createElement('tr');
//         tr.innerHTML = `
//             <td>${id}</td>
//             <td>${userName}</td>
//             <td>${age}</td>
//             <td>${email}</td>
//             <td>${city}</td>
//         `;
//         tbody.appendChild(tr);
//     });
//     table.appendChild(tbody);
// }

// addUser.addEventListener("click", function(e) {
//     e.preventDefault();

//     const userName = document.getElementById("username").value.trim();
//     const age = document.getElementById("age").value.trim();
//     const email = document.getElementById("email").value.trim();
//     const city = document.getElementById("city").value.trim();

//     if (!userName || !age || !email || !city) {
//         alert("Please fill in all fields.");
//         return;
//     }

 
//     userData.push({
//         id: userData.length + 1,
//         userName,
//         age,
//         email,
//         city
//     });

    
//     document.getElementById("username").value = "";
//     document.getElementById("age").value = "";
//     document.getElementById("email").value = "";
//     document.getElementById("city").value = "";

    
//     newTable();
// });



// const table = document.getElementById("newTable");
// const addUser = document.getElementById("addUser");

// const userData = [];

// function newTable(e) {
//     e.preventDefault(); 

//     const userName = document.getElementById("username").value.trim();
//     const age = document.getElementById("age").value.trim();
//     const email = document.getElementById("email").value.trim();
//     const city = document.getElementById("city").value.trim();

//     if (!userName || !age || !email || !city) {
//         alert("Please fill in all fields.");
//         return;
//     }

//     userData.push({
//         id: userData.length + 1,
//         userName,
//         age,
//         email,
//         city
//     });

    
//     document.getElementById("username").value = "";
//     document.getElementById("age").value = "";
//     document.getElementById("email").value = "";
//     document.getElementById("city").value = "";

   
//     const oldTbody = table.querySelector("tbody");
//     if (oldTbody) table.removeChild(oldTbody);

//     const tbody = document.createElement('tbody');
//     let i = 0;
//     while (i < userData.length) {
//         const { id, userName, age, email, city } = userData[i];
//         const tr = document.createElement('tr');
//         tr.innerHTML = `
//             <td>${id}</td>
//             <td>${userName}</td>
//             <td>${age}</td>
//             <td>${email}</td>
//             <td>${city}</td>
//         `;
//         tbody.appendChild(tr);
//         i++;
//     }
//     table.appendChild(tbody);
// }


// addUser.addEventListener("click", newTable);



const table = document.getElementById("newTable");
const addUser = document.getElementById("addUser");

const userData = [];
function newTable (e) {
    e.preventDefault(); 

    const userName = document.getElementById("username").value.trim();
    const age = Number(document.getElementById("age").value.trim());
    const email = document.getElementById("email").value.trim();
    const city = document.getElementById("city").value.trim();

    if (!userName || !age || !email || !city) {
        alert("চোখে কি কম দেহোস সবগুলো ফিল কর");
        return;
    }

    if (age <= 18) {
        alert("বেডা আগে বড় হ তারপর আহিস ");
        return;
    }

    if (!email.includes("@") || !email.includes(".com")) {
        alert("ঠিক করে ইমেইল দে ");
        return;
    }

    if (city.length < 3 || city.toLowerCase() === "borishal") {
        alert("ঠিক করে নাম লিখ আর যদি বরিশালের হোস তাইলে ভাগ .");
        return;
    }

    userData.push({
        id: userData.length + 1,
        userName,
        age,
        email,
        city
    });

    
    document.getElementById("username").value = "";
    document.getElementById("age").value = "";
    document.getElementById("email").value = "";
    document.getElementById("city").value = "";

   
    const oldTbody = table.querySelector("tbody");
    if (oldTbody) table.removeChild(oldTbody);

    const tbody = document.createElement('tbody');
    let i = 0;
    while (i < userData.length) {
        const { id, userName, age, email, city } = userData[i];
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${id}</td>
            <td>${userName}</td>
            <td>${age}</td>
            <td>${email}</td>
            <td>${city}</td>
        `;
        tbody.appendChild(tr);
        i++;
    }
    table.appendChild(tbody);
}

addUser.addEventListener("click", newTable);