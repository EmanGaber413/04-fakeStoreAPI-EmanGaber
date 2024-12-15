
function api(url,method='GET') {
    var XmlHttp = new XMLHttpRequest();
    XmlHttp.open(method, url);
    XmlHttp.send();
    XmlHttp.addEventListener('readystatechange', function () {
        if (XmlHttp.readyState===4 && XmlHttp.status===200) 
            { var JsonData =JSON.parse(XmlHttp.responseText)
            var htmlPostView=document.getElementById('PostData')  
             var HtmlCollection=``
             for (var post of JsonData) {
                HtmlCollection +=
                        `<div class=" card col-3 my-4" style="width: 18rem;">
                        <img src="${post.image}" class="card-img-top p-4 w-100 " style="height: 250px;" >
                         <div  class="card-body">
                             <h5 class="card-title">${post.title}</h5>

                             <div  class="d-flex justify-content-center">
                             <h4 class="card-title text-danger col-6 fw-bolder border border-2 
                             border-danger text-center bg-body-tertiary ">${post.price}</h4>
                             </div>

                             <p class="card-text">${post.description}</p>
                             <a href="#" class="btn btn-info text-center w-100 justify-item-around">Add to Cart </a>
                         </div>
                         </div>`
               htmlPostView.innerHTML=HtmlCollection;
            }}
        
    })
    
}

api('https://fakestoreapi.com/products','GET');





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