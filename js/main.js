let ulContant = document.getElementById("ul-contant")
ulContant.innerHTML = ""

let ulContant2 = document.getElementById("ul-contant2")
ulContant2.innerHTML = ""


function lisUsers(){
    ulContant.innerHTML = ""
    let request = new XMLHttpRequest()
    request.open("GET","https://jsonplaceholder.typicode.com/users")
    request.responseType = "json"
    request.send()
    request.onload = () =>{
        if(request.status >= 200 && request.status < 300){
            let posts = request.response
            
            for(element of posts){
                let userId = element.id
                let contant = 
                    `
                        <li onclick="clickFunction(${userId})">
                            <div class="ul-li-div">
                                <h5>${element.name}</h5>
                                <h5><hr></h5>
                                <h5>${element.email}</h5>
                            </div>
                        </li>
                    `
                ulContant.innerHTML+=contant
                // console.log(userId)
            }
        }else{
            console.log("error")
        }
        
    }
    
}

function lisContant(index){
    ulContant2.innerHTML = ""
    let request = new XMLHttpRequest()
    request.open("GET","https://jsonplaceholder.typicode.com/posts?userId="+index)
    request.responseType = "json"
    request.send()
    request.onload = () =>{
        if(request.status >= 200 && request.status < 300){
            let posts = request.response
            
            for(element of posts){
                let contant = 
                    `
                        <li>
                            <div class="ul-li-div">
                                <h5>${element.title}</h5>
                                <h5><hr></h5>
                                <h5>${element.body}</h5>
                            </div>
                        </li>
                    `
                ulContant2.innerHTML+=contant
            }
        }else{
            console.log("error")
        }
        
    }
    
}

function clickFunction(userId){
    lisContant(userId)
}

lisUsers()

lisContant(1)