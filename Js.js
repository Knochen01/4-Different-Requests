let url = "https://ron-swanson-quotes.herokuapp.com/v2/quotes"
let xhrB = document.querySelector('#XHR-btn');
let FetchB = document.querySelector('#FETCH-btn');
let JqueryB = document.querySelector('#JQUERY-btn');
let AxiosB = document.querySelector('#Axios-btn');
let quotes = document.querySelector('#quotes');

//  XMLHttpRequest
xhrB.addEventListener('click', function(){
   let request = new XMLHttpRequest();
   request.onreadystatechange = function() {
       if (this.status == 200 && this.readyState == 4) {
       let data = JSON.parse(request.responseText);
       console.log(data[0]);
       quotes.innerText = data
       }
   }
   request.open("GET", url);  
   request.send();
})

//  FetchRequest
FetchB.addEventListener('click', function(){
fetch( url)
    .then(extract)
    .catch(errorHandling)

    function extract(response) {
        response.json().then(function(data){
            console.log(data[0])
            quotes.innerText = data
        })
    }
    function errorHandling(err){
        console.log("ERROR", err)
    }
    })

// JQUERY REQUEST
$("#JQUERY-btn").click(function(){
    $.getJSON(url)
    .then(function(request){
        console.log(request[0])
        quotes.innerText = request[0]
    })
    .catch(function(err){
        console.log(err)
    })
})

// AXIOS REQUEST
$("#Axios-btn").click(function() {
    axios.get(url)
    .then(function(response){
        console.log(response.data[0])
        quotes.innerText = response.data[0]
    })
    .catch(function(err){
        if ( err.response) {
            console.log("Response error", err.response.status)
        }
        else if ( err.request) {
            console.log("Response error")
        }
        else {
            console.log("ERROR", err.message)
        }
    })
})