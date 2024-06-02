// console.log("hello world");


// const bankBalance = 200000

// const data = new Promise((resolve , reject)=>{
//     // console.log('hello world');
//     if(bankBalance > 100000){
//         // console.log("shadi Mubarak ho bahi...!");
//         resolve("shadi Mubarak ho bahi...!")
//     }else{
//         // console.log('Ammi ne zehr Kha liya..!');
//        reject('Ammi ne zehr Kha liya..!')
//     }
// })

// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// })






// function shadiScnz(bankBalance){
//     return new Promise((resolve , reject)=>{
//     if(bankBalance > 300000){
//         // console.log('Bhai Shadi Mubarak Ho....!')
//         resolve('Bhai Shadi Mubarak Ho....!')
//     }else{
//         // console.log("Bhai mehnat ki Zarorat ha...!");
//         reject("Bhai mehnat ki Zarorat ha...!")
//     }
//     })
// }


// shadiScnz(200000)
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// })
















const div = document.querySelector("div")


axios('https://fakestoreapi.com/products')
.then((res)=>{
    console.log(res.data);
    res.data.map((item)=>{
       div.innerHTML += `
       <div class="card" style="width: 18rem;">
  <img width="400" height="300" src="${item.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${item.title}</h5>
    <h5 class="card-text">Price : Rs ${item.price} PKR</h5>
   <button class ="btn btn-primary">Add Cart</button>
  </div>
</div>`
    })
})
.catch((err)=>{
    console.log(err);
})
