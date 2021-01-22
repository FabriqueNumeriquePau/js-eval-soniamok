const xhr = new XMLHttpRequest();
xhr.addEventListener("readystatechange", function(){

    if(xhr.readyState===4 && xhr.status===200){
        console.log(xhr.response);
        /*const menu = JSON.parse(xhr.response);
        for(let elt of menu)*/
    }
});

xhr.open("get","data/menu.json", true);

xhr.send();
