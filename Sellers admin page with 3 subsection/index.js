
var btn = document.getElementById("btn");
btn.addEventListener('click' ,add_Prdouct);
  function add_Prdouct(e){
   e.preventDefault();
   console.log("iam in")
var product_price=document.getElementById("selling_price").value;
var product_Name=document.getElementById("product_name"). value;
var product_cat=document.getElementById("Catergory").value;
 console.log(product_price ,product_Name,product_cat)
  const obj={
    Product_Price:product_price,
    Product_Name :product_Name,
    Product_Cat:product_cat
  }
  if(obj.Product_Cat==="Electronics"){
    axios
    .post('https://crudcrud.com/api/dd18d6ac886344b0bd15938670755eb3/Electronics',obj)
    .then((res)=>{console.log(res)
      showonScreen(res.data,"Electronics");}
    )
    .catch(err=>console.log(err));
    
  }
else  if(obj.Product_Cat==="Food"){
  axios
  .post('https://crudcrud.com/api/dd18d6ac886344b0bd15938670755eb3/Food',obj)
  .then((res)=>{console.log(res)
    showonScreen(res.data,"Food");
  })
  .catch(err=>console.log(err));
 
}else if(obj.Product_Cat==="Skincare"){
  axios
  .post('https://crudcrud.com/api/dd18d6ac886344b0bd15938670755eb3/Skincare',obj)
  .then((res)=>{console.log(res)
    showonScreen(res.data,"Skincare");
  })
  .catch(err=>console.log(err));
 
}

 function showonScreen(obj ,item){
   console.log(item);
  var parentN=document.getElementById(item);
  console.log(parentN);
  var  li =document.createElement('li');
  
  var btn =document.createElement('button');
  btn.appendChild(document.createTextNode("delete"));
  
  var  text=document.createTextNode(` ${obj._id} ${obj.Product_Price} ${obj.Product_Name} ${obj.Product_Cat}`);
  console.log(text);
  li.appendChild(text);
  li.appendChild(btn);
  parentN.appendChild(li);
  btn.addEventListener('click' ,function(){
    del(obj);
  });
  function del(obj) {
    const userId = obj._id;
    const cat = obj.Product_Cat;
    console.log(userId, cat);
    axios
      .delete(
        `https://crudcrud.com/api/dd18d6ac886344b0bd15938670755eb3/${cat}/${userId}`
      )
      .then((res) => {
        parentN.removeChild(li);
      })
      .catch((err) => console.log(err));
  }
  
}
window.addEventListener('load', function() {
  
  axios.get('https://crudcrud.com/api/dd18d6ac886344b0bd15938670755eb3/Electronics')
    .then(function(res) {
      const parentN = document.getElementById('Electronics');
      res.data.forEach(function(obj) {
        showonScreen(obj, 'Electronics', parentN);
      });
    })
    .catch(function(err) {
      console.log(err);
    });

  })
}
 