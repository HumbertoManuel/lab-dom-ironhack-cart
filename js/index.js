// ITERATION 1

function updateSubtotal(product) {
  //console.log('Calculating subtotal, yey!');

    const price = product.querySelector('.price span').innerHTML;
    const quantity = product.querySelector('#cart > tbody > tr > td.quantity > input[type=number]').value;
    let subtotalPrice = price * quantity;
    let subtotal = product.querySelector('.subtotal span');
    subtotal.innerText = subtotalPrice
    
    return subtotalPrice;
    //return console.log (subtotal);
     //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // end of test

  // ITERATION 2
  //... your code goes here
  
  const multiproduct = document.querySelectorAll('.product');
  for (let product of multiproduct){
    updateSubtotal(product);
  }

  // ITERATION 3
  //... your code goes here
  let totalPrice = 0;
  for (let i = 0; i < multiproduct.length; i++) {
   totalPrice += updateSubtotal(multiproduct[i]);
  }
  document.querySelector('#total-value span').innerText = totalPrice;
  return totalPrice;


}
// ITERATION 4


    
function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  const ul = target.parentNode;
    console.log(ul);
    ul.removeChild(target)
}




// ITERATION 5

function createProduct() {
  //... your code goes here

}




window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  //... your code goes here
  
  //for (  )
  //const RemoveBtn = document.getElementsByClassName('.btn btn-remove');
  
});
