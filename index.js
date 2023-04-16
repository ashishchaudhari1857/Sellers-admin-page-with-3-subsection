 var btn = document.getElementById("btn");
btn.addEventListener('click' ,add_Prdouct);
  async function add_Prdouct(e){
   e.preventDefault();

var product_price=document.getElementById("selling_price").value;
var product_Name=document.getElementById("product_name"). value;
var product_cat=document.getElementById("Catergory").value;
 console.log(product_price ,product_Name,product_cat)
  const obj={
    Product_Price:product_price,
    Product_Name :product_Name,
    Product_Cat:product_cat
  };
  //   addinng data to  backend
        try{
     const res=  await axios .post(`https://crudcrud.com/api/fa74e857125148f1a14cd2c3cae5d746/${obj.Product_Cat}`,obj)
      showonScreen(res.data,`${obj.Product_Cat}`);
    }catch(err){
   console.log(err);
    }  
  }

  

 async function showonScreen(obj ,item){
   console.log(item);
  var parentN=document.getElementById(item);
  console.log(parentN);
  var  li =document.createElement('li');
  
  var btn =document.createElement('button');
  btn.appendChild(document.createTextNode("delete"));
  
  var  text=document.createTextNode(`  ${obj.Product_Price} Rs ${obj.Product_Name} ${obj.Product_Cat}`);
  console.log(text);
  li.appendChild(text);
  li.appendChild(btn);
  parentN.appendChild(li);
  btn.addEventListener('click' ,function(){
    del(obj);
  });
   async function del(obj) {
    try{
    const userId = obj._id;
    const cat = obj.Product_Cat;
    console.log(userId, cat);
    
     const res= await axios.delete(`https://crudcrud.com/api/fa74e857125148f1a14cd2c3cae5d746/${cat}/${userId}`)
          parentN.removeChild(li);
    }catch(err){
      console.log(err);
  }
  //  i  add some comment
}
  }


window.addEventListener('load', refresh);
async function refresh(){
  const categories = ["Electronics", "Food", "Skincare"];
for(let category  of categories )
   try {
     const res =await axios.get(`https://crudcrud.com/api/fa74e857125148f1a14cd2c3cae5d746/${category}`);
      const  our_array =res.data;
      our_array.forEach((obj) => {
       showonScreen(obj,`${category}`);
     });
     
   }catch(err){
     console.log(err);
   }
  
}

  
