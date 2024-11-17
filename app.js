// console.log("products API");




const div = document.querySelector("#div")
fetch('https://dummyjson.com/products')
.then(res => res.json())
.then((res)=>{
    console.log(res)

    res.products.map((item)=>{
        div.innerHTML += `
    <div class="card" style="width: 18rem;">
    <img src="${item.thumbnail}" class="card-img-top" alt="...">
    <div class="card-body">
      <h3 class="card-title"> ID :${item.id}</h3>
      <h3 class="card-title"> Titile:${item.title}</h3>
      <h3 class="card-title"> Category:${item.category}</h3>
      <h3 class="card-title">Price: $${item.price}</h3>
      <button type="button" class="btn" onclick="add(${item.id})">Show More....</button>
    
    </div>
  </div>
        `
    })




    
})
.catch((err)=>{
    console.log(err);
    
})


function add(id) {

    var data = localStorage.setItem("card",id);
    console.log(data);
    

    window.location = "cart.html"
    
}