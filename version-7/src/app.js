const foodImage=document.getElementById("foodImage");

const breakfast=document.getElementById("breakfast");
const lunch=document.getElementById("lunch");
const dinner=document.getElementById("dinner");
const dessert=document.getElementById("dessert");
const drinks=document.getElementById("drinks");

breakfast.addEventListener("mouseover", function(){
    foodImage.src='/Images/pexels-mali-64208.jpg';
})

lunch.addEventListener("mouseover", function(){
    foodImage.src='/Images/Food-Images/lunch.jpeg';
})

dinner.addEventListener("mouseover", function(){
    foodImage.src='/Images/Food-Images/dinner.jpeg';
})

dessert.addEventListener("mouseover", function(){
    foodImage.src='/Images/Food-Images/dessert.jpeg';
})

drinks.addEventListener("mouseover", function(){
    foodImage.src='/Images/Food-Images/drinks.jpeg';
})



// Order Form

const openBtn = document.getElementById("openModel");
const modal = document.getElementById("orderModal");
const closeBtn = document.getElementById("closeModal");
const form = document.getElementById("orderForm");
const notes = document.getElementById("notes");
const charCount = document.getElementById("charCount");

openBtn.addEventListener("click", () => {
  modal.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

notes.addEventListener("input", () => {
  charCount.textContent = 100 - notes.value.length;
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Order Submitted Successfully");
  modal.style.display = "none";
  form.reset();
  charCount.textContent = 100;
});



//Image Information 
const menu = document.querySelector(".menu");
const p = menu.querySelector("p");

const imageInfo = {
  "/Images/Section/red-lentil-soup-with-slice-lemon-breadcrumbs.jpg":
    "Red lentil soup served with lemon",
  "/Images/pexels-mali-64208.jpg":
    "Fresh wheat noodles with vegetables.",
  "/Images/pexels-pixabay-461382.jpg":
    "Italian pasta dish with tomato sauce.",
  "/Images/pexels-yankrukov-8818667.jpg":
    "Indian Thali with dessert"
};

const images = menu.querySelectorAll("img");

images.forEach((img) => {
  img.addEventListener("click", () => {
    const src = img.getAttribute("src");
    const text = imageInfo[src];
    p.textContent = text;
  });
});



//Owner Information

const peopleInfo = {
  "Oliver Bennett": "Owner : Oliver Leads restaurant vision",
  "Lucy Harrington": "Owner : Lucy Manages operations",
  "James Fletcher": "Founder : James is Brand creator",
  "Amelia Turner": "Founder : Amelia is Creative director",
  "Sophie Davies": "Manager : Daily operations",
  "Ruby Gardner": "Chef : Ruby is an Excellent Chef"
};

const tooltip = document.createElement("div");
tooltip.className = "tooltip";
tooltip.style.opacity="0";

document.body.appendChild(tooltip);


document.querySelectorAll(".owner img").forEach(img => {
  img.addEventListener("mouseenter", () => {
    const name = img.parentElement.querySelector("strong").innerText;
    tooltip.innerText = peopleInfo[name];
    tooltip.style.opacity = "1";
    
    
    console.log(peopleInfo[name])
  });

  img.addEventListener("mousemove", e => {
    tooltip.style.left = e.clientX + 15 + "px";
    tooltip.style.top = e.clientY + 15 + "px";

  });

  img.addEventListener("mouseleave", () => {
    tooltip.style.opacity = "0";
  });
});

