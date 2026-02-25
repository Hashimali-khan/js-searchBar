let users = [
  {
    name: "Moon Cat",
    pic: "https://images.unsplash.com/photo-1766890748459-5328fe58cf20?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fE1vb24lMjBDYXQlMjBBJTIwbXlzdGVyaW91cyUyMGJsYWNrJTIwY2F0JTIwc2l0dGluZyUyMGNhbG1seSUyMHVuZGVyJTIwdGhlJTIwbW9vbmxpZ2h0fGVufDB8fDB8fHww",
    bio: "A mysterious black cat sitting calmly under the moonlight."
  },
  {
    name: "Night Owl",
    pic: "https://plus.unsplash.com/premium_vector-1745338315362-0be2d011002c?q=80&w=1057&auto=format&fit=crop",
    bio: "Loves the night, thrives in silence, and thinks deeply."
  },
  {
    name: "Dream Walker",
    pic: "https://plus.unsplash.com/premium_vector-1697729495822-c971c4a69f03?q=80&w=881&auto=format&fit=crop",
    bio: "Always lost in thoughts, walking between dreams and reality."
  },
  {
    name: "Silent Observer",
    pic: "https://plus.unsplash.com/premium_vector-1768206082660-3eb8f709f7ed?q=80&w=774&auto=format&fit=crop",
    bio: "Observes everything quietly, speaks only when needed."
  },
  {
    name: "Midnight Soul",
    pic: "https://plus.unsplash.com/premium_vector-1718630786485-3f2a4245fe77?q=80&w=880&auto=format&fit=crop",
    bio: "Deep, calm, and connected to the dark aesthetic."
  },
  {
    name: "Lunar Thinker",
    pic: "https://plus.unsplash.com/premium_vector-1720519321459-49b0cc3b59d9?q=80&w=880&auto=format&fit=crop",
    bio: "Finds peace in moonlight and late-night thoughts."
  },
  {
    name: "Shadow Artist",
    pic: "https://plus.unsplash.com/premium_vector-1716905507558-ec81393f3a72?q=80&w=880&auto=format&fit=crop",
    bio: "Creates beauty from shadows and silence."
  }
];


// sare users show krwana;
//filter krna input krna pr 
// show krn afiltered users

function showUsers(arr) {

  const cardsContainer = document.querySelector(".cards");
  cardsContainer.innerHTML = "";
  if (arr.length === 0) {
    cardsContainer.innerHTML = `<h3 class="not-found">No user found :(</h3>`;
    return;
  }
  
  arr.forEach(user=> {
  

    // 1. Create main card div
    const card = document.createElement("div");
    card.classList.add("card");

    // 2. Create image
    const img = document.createElement("img");
    img.classList.add("bg-img");
    img.src = user.pic;
    img.alt = user.name;

    // 3. Create blurred overlay
    const blurLayer = document.createElement("div");
    blurLayer.classList.add("blurred-layer");

    // 4. Create content wrapper
    const content = document.createElement("div");
    content.classList.add("content");

    // 5. Create title
    const title = document.createElement("h3");
    title.innerText = user.name;

    // 6. Create paragraph
    const paragraph = document.createElement("p");
    paragraph.innerText = user.bio;

    // 7. Assemble content
    content.appendChild(title);
    content.appendChild(paragraph);

    // 8. Assemble card
    card.appendChild(img);
    card.appendChild(blurLayer);
    card.appendChild(content);

    // 9. Add card to DOM
    cardsContainer.appendChild(card);

  });
}

showUsers(users);

let inp = document.querySelector(".inp");
inp.addEventListener("input", function () {

  let filterUsers = users.filter(user => {
    return user.name
      .toLowerCase()
      .includes(inp.value.toLowerCase());
  });

  showUsers(filterUsers);
});


