
var JsonData =''
var XmlHttp = new XMLHttpRequest();
function api(url,method='GET') {
    XmlHttp.open(method, url);
    XmlHttp.send();
    XmlHttp.addEventListener('readystatechange', function () {
        if (XmlHttp.readyState===4 && XmlHttp.status===200) 
            {  JsonData =JSON.parse(XmlHttp.responseText)
             var htmlPostView=document.getElementById('PostData')  
             var HtmlCollection=``
             for (var post of JsonData) {
                HtmlCollection +=
                        `<div class=" card col-3 my-4" style="width: 18rem;">
                         <img src="${post.image}" class="card-img-top p-4 w-100 " style="height: 250px;" >
                         <div  class="card-body">
                             <h5 class="card-title">${post.title}</h5>

                             <div  class="d-flex justify-content-center">
                             <h4 class="card-title text-black col-6 fw-bolder border border-2 
                             border-black text-center bg-body-tertiary cc"  onclick="ApplyRed(this)"
                              >${post.price} $</h4>
                             </div>

                             <p class="card-text">${post.description}</p>
                             <a href="#" class="btn btn-info text-center w-100 justify-item-around">Add to Cart </a>
                         </div>
                         </div>
                         
                         `
                         
              

              }
              htmlPostView.innerHTML=HtmlCollection;
         }  
        
    })
    //  document.querySelector('.red').addEventListener (, function () { this.classlist.add=("text-danger") ;})
    
   
    }

     function ApplyRed() {cc.classList.add('red')};
    
    // Function to add a class
   

api('https://fakestoreapi.com/products','GET');

// function ApplyRed(e) {e.classList.add("text-danger");
// }





    








// slider
function slider(url,method='GET') {
    
    XmlHttp.open(method, url);
    XmlHttp.send();
    XmlHttp.addEventListener('readystatechange', function () {
        if (XmlHttp.readyState===4 && XmlHttp.status===200) 
            {  JsonData =JSON.parse(XmlHttp.responseText)
             var SliderModel=document.getElementById('model-slider')  
             var HtmlCollection2=``

       for (var slide of JsonData) {
    
HtmlCollection2 +=
 `<div class="content w-50 m-auto  position-absolute z-3 " style="z-index: 1000;">
<img src="./photo-1554995207-c18c203602cb.avif" alt="" class="w-100">
<div class="position-relative d-flex justify-content-between top-50">
  <button><i class="fa-solid fa-backward"></i></button>
  <button><i class="fa-solid fa-forward"></i></button>
</div >
<div class="position-absolute top-0 end-0">
  <button><i class="fa-regular fa-rectangle-xmark"></i></button></div>
 </div>`
 SliderModel.innerHTML = HtmlCollection2
}}})}
 

slider('https://fakestoreapi.com/products','GET')





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