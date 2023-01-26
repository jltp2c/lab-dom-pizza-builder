// Write your Pizza Builder JavaScript in this file.

// Constants
const basePrice = 10;
const ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
const state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();
  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll(".mushroom").forEach((oneMush) => {
    if(state.mushrooms){
      oneMush.style.visibility = "visible"
    }else{
      oneMush.style.visibility = "hidden"
    }
  })
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll(".green-pepper").forEach((onePepper) => {
    if(state.greenPeppers){
      onePepper.style.visibility = "visible"
    }else{
      onePepper.style.visibility = "hidden"
    }
  })
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  const sauce = document.querySelector('.sauce');
  if(state.whiteSauce){
    sauce.classList.add('sauce-white');
  }else{
    sauce.classList.remove('sauce-white')
  }
  
  }

function renderGlutenFreeCrust() {
  const crust = document.querySelector('.crust')
  if(state.glutenFreeCrust){
    crust.classList.add("crust-gluten-free")
  }else{
    crust.classList.remove("crust-gluten-free")
  }

}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  document.querySelectorAll('.btn').forEach((btn)=>{
    //pourquoi avec le addEventListener('click') ca ne marche pas ?
   btn.onclick=(e)=>{
     if(e.target.className.includes('active')){
      //  console.log(e.target.className)
       e.target.classList.remove('active')
     }else{
      e.target.classList.add('active') 
     }
   }
  })

}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  const listIngredient =  document.querySelector('.panel.price ul');
  const totalAmount = document.querySelector('.panel.price strong')
  let price = basePrice;
  let items = ''

  for (let EachIngredient in state){
    // console.log(EachIngredient)

    if(state[EachIngredient]){
      items +=`<li>$${ingredients[EachIngredient].price} ${ingredients[EachIngredient].name}</li>`
      price +=ingredients[EachIngredient].price
    }
  }
 listIngredient.innerHTML = items;
  totalAmount.textContent =`$${price}` 

  console.log(totalAmount, listIngredient)
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn-pepperoni').addEventListener('click', function () {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`

document.querySelector('.btn-mushrooms').addEventListener('click', ()=>{
  state.mushrooms = !state.mushrooms;
  renderEverything()
})

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`

document.querySelector('.btn-green-peppers').addEventListener('click', ()=>{
  state.greenPeppers = !state.greenPeppers;
  renderEverything()
})

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn-sauce').addEventListener('click', ()=>{
  state.whiteSauce = !state.whiteSauce
  renderEverything()
})
// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn-crust').addEventListener('click', ()=>{
  state.glutenFreeCrust = !state.glutenFreeCrust
  renderEverything()
})
