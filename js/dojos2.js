console.log("ok");
let square = document.querySelector("div");
square.addEventListener("mouseover", function(event){
    
    event.target.style.borderRadius = "0%";
} );
square.addEventListener("mouseout", function(event){
     
    event.target.style.borderRadius = "50%";
});
let fleche = document.querySelectorAll("header");

for(let i = 0; i < fleche.length; i++){
    fleche[i].addEventListener("click", function(){
       // addEventListener ne marche pas sur une nodelist
       // apliquer forEach(function(){

    //    })  
    })
};


//autre manière de faire
// let square = document.querySelector("div");
// square.onmouseover = function(event) {
//     let cible = event.target;
//     cible.style.borderRadius = '0%';
//   };
  
//  square.onmouseout = function(event) {
//     let cible = event.target;
//     cible.style.borderRadius = '50%';
//   };
  // square.addEventListener("onmouseover", function( mouseOver ) {
//     mouseOver.target.style.borderRadius = "0%";
// });
// // 
