
var JsonData =[];
var modelImg =document.querySelector(".modelImg")
var XmlHttp = new XMLHttpRequest();
function api(url,method='GET') {
    XmlHttp.open(method, url);
    XmlHttp.send();
    XmlHttp.addEventListener('readystatechange', function () {
        if (XmlHttp.readyState===4 && XmlHttp.status===200) 
            {  JsonData =JSON.parse(XmlHttp.responseText)
             var htmlPostView=document.getElementById('PostData')  
             var HtmlCollection=``
             var index=-1
             for (var post of JsonData) {index++
                var images= document.querySelectorAll("#image")
                
                HtmlCollection +=
                        `<div class=" card col-3 my-4" style="width: 18rem;">
                         <img  data-slide="${index}" src="${post.image}" class="card-img-top p-4 w-100 " style="height: 250px;"  id="image">
                         <div  class="card-body">
                             <h5 class="card-title">${post.title}</h5>

                             <div  class="d-flex justify-content-center">
                             <h4 class="card-title text-black col-6 fw-bolder border border-2 
                             border-black text-center bg-body-tertiary red"  
                              >${post.price} $</h4>
                             </div>

                             <p class="card-text">${post.description}</p>
                             <a href="#" class="btn btn-info text-center w-100 justify-item-around">Add to Cart </a>
                         </div>
                         </div>
                         
                         `     
                         
                        
              }

              htmlPostView.innerHTML=HtmlCollection;
              var images= document.querySelectorAll("#image")
              
              var model =document.querySelector(".model-slider")
              

 images.forEach(function (imageOfArray) {
                
              
    imageOfArray.addEventListener("click",function () {
                    // console.log(imageOfArray)
           
                model.classList.add("d-block")
                // model.Style.display="block"
                
                modelImg.src= imageOfArray.src; 
                // console.log(imageOfArray.dataset.slide)
                currectIndex=imageOfArray.dataset.slide


               
    } ) 


   
})

var closeBtn= document.querySelector(".close")
closeBtn.addEventListener("click",function () {if (model.classList.contains=("d-block")) {
    model.classList.remove("d-block")
                                              } 
    
  }) 


  var previousBtn =document.querySelector(".previousBtn")
                    
  previousBtn.addEventListener("click",function () {
                         
  currectIndex-=1
  if (currectIndex >-1) {
    var previmage= images.item(currectIndex);
    modelImg.src= previmage.src; 
  }
  else{
    currectIndex=19
    modelImg.src= previmage.src; 
  }
 

                            // modelImg.src= imageOfArray.src;
            
                        
                    } )
    
                   
                  
                   
           
              
           
         
       
    }
    //  document.querySelector('.red').addEventListener ("click", function () { this.classlist.add=("text-danger") ;})

})}  

   
  

    

   
   

api('https://fakestoreapi.com/products','GET');



// slider2




    








// slider1

// function slider(url,method='GET') {
    
//     XmlHttp.open(method, url);
//     XmlHttp.send();
//     XmlHttp.addEventListener('readystatechange', function () {
//         if (XmlHttp.readyState===4 && XmlHttp.status===200) 
//             {  JsonData =JSON.parse(XmlHttp.responseText)
//              var SliderModel=document.getElementById('model-slider')  
//              var HtmlCollection2=``

//        for (var slide of JsonData) {
    
// HtmlCollection2 +=
//  `<div class="content w-50 m-auto  position-absolute z-3 " style="z-index: 1000;">
// <img src="./photo-1554995207-c18c203602cb.avif" alt="" class="w-100"  id="image">
// <div class="position-relative d-flex justify-content-between top-50">
//   <button><i class="fa-solid fa-backward"></i></button>
//   <button><i class="fa-solid fa-forward"></i></button>
// </div >
// <div class="position-absolute top-0 end-0">
//   <button><i class="fa-regular fa-rectangle-xmark"></i></button></div>
//  </div>`
//  SliderModel.innerHTML = HtmlCollection2
// }}})}
 

// slider('https://fakestoreapi.com/products','GET')





//     `<div class=" p-5 col-md-4 " >
            //       <div class="  ">
            //        <h3>${post.title}</h3>
            //        <h4 class='text-danger ' >${post.price}</h4>
                  
                   
            //        <div>
            //        <img src="${post.image}" alt="" srcset="" class="w-100 container p-2"  style="height: 300px; width: 200px;">
            //         </div>
            //          <p>${post.description}</p>
            //        <p>${post.category}</p>
            //       </div>
            //     </div>`
            //    }  