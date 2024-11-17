
const div = document.querySelector("#container")

const result = localStorage.getItem("card");
console.log(result);

fetch(`https://dummyjson.com/products/${result}`)
.then(res => res.json())
.then((res)=>{
    // console.log(res.products)

   
        div.innerHTML += `
    <div class="card" style="width: 18rem;">
    <img src="${res.thumbnail}" class="card-img-top" alt="...">
    <div class="card-body">
    <h3 class="card-title"> Titile:${res.title}</h3>
    <h3 class="card-title"> Category:${res.category}</h3>
      <h3 class="card-title"> Description :${res.description}</h3>
      <h3 class="card-title"> Quantity :${res.minimumOrderQuantity}</h3>
      <h3 class="card-title"> Description :${res.description}</h3>
      <h3 class="card-title"> rating :${res.rating}</h3>
      <h3 class="card-title"> stock :${res.stock}</h3>
      <h3 class="card-title"> stock :${res.stock}</h3>
      <h3 class="card-title"> discountPercentage :${res.discountPercentage}</h3>
      <h3 class="card-title">Price: $${res.price}</h3>
     
    
    </div>
  </div>
        `
    })

.catch((err)=>{
    console.log(err);
    
})