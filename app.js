// items
const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "Shadow Dinner",
    category: "dinner",
    price: 20.99,
    img: "./images/tacos.jpg",
    desc: `Tacos dial ch khairellah l be +5 lenevo city club dj nv marie richbond avec 2 oreill?? + ing`,
  },
];

// get html elements
const sectionCenter = document.querySelector(".section-center");
const filterBtns = document.querySelectorAll(".filter-btn");

//Load all items
window.addEventListener("load", () => {
  //call back Function
  displayMenuItems(menu);
});

//Load filtered items
filterBtns.forEach(function (btn) {
  //add event
  btn.addEventListener("click", (e) => {
    // get the category selected 'dataset.category' int the html file
    const category = e.currentTarget.dataset.category;
    //console.log(category);
    if (category === "all") {
      displayMenuItems(menu);
    } else if (category === "breakfast") {
      const newMenu = menu.filter((menu) => menu.category === "breakfast");
      displayMenuItems(newMenu);
    } else if (category === "lunch") {
      const newMenu = menu.filter((menu) => menu.category === "lunch");
      displayMenuItems(newMenu);
    } else if (category === "shakes") {
      const newMenu = menu.filter((menu) => menu.category === "shakes");
      displayMenuItems(newMenu);
    }
    else if (category === "dinner") {
      const newMenu = menu.filter((menu) => menu.category === "dinner");
      displayMenuItems(newMenu);
    }
    
  });
});

// My function
const displayMenuItems = (menuItems) => {
  // console.log(`i'm inside`)
  let displayMenu = menuItems.map(function (item) {
    // console.log(item)
    return `<article class="menu-item">
  <img src=${item.img} class="photo" alt=${item.title}>
  <div class="item-info">
  <head>
    <h4>${item.title}</h4>
    <h4 class="price">$${item.price}</h4>
  </head>
  <p class="item-text">${item.desc}</p>
  </div>
</article>`;
  });
  //make all itesmin one String
  displayMenu = displayMenu.join("");
  //console.log(displayMenu);
  //put the items in the Html Page
  sectionCenter.innerHTML = displayMenu;
};
