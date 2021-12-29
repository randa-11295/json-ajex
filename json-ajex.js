arr = []
    
    var xhr = new XMLHttpRequest();
    xhr.open('get',"https://jsonplaceholder.typicode.com/users");
    xhr.send();
    xhr.addEventListener("readystatechange",function(){
        if(xhr.readyState === 4 && xhr.status === 200 ){
           
           var userInfo = JSON.parse(xhr.response); 
        
                for(let i = 0 ; i < userInfo.length ; i++){
                    arr.push(userInfo[i].id);
                    var btn = document.createElement("button");
                    btn.innerHTML = userInfo[i].name;
                    document.getElementsByTagName('div')[0].appendChild(btn)

                }//loop
                var name=  document.getElementsByTagName('button')

                for(let r = 0 ; r < name.length ; r++  ){
                    name[r].addEventListener("click",function(){
                        

                        var xhrId = new XMLHttpRequest();
                        xhrId.open('get',"https://jsonplaceholder.typicode.com/posts?userId=" + arr[r]);
                        xhrId.send();
                        xhrId.addEventListener("readystatechange",function(){
                            if(xhrId.readyState === 4 && xhrId.status === 200 ){
                                userId = JSON.parse(xhrId.response)

                                var element = document.querySelectorAll('section *');
                                        for(let x = 0 ; x < element.length ; x++){
                                            element[x].remove();
                                        }//loop
                                
                                for(let z = 0 ; z < userId.length ; z++ ){



                                    var post = document.createElement("ul");
                                    post.innerHTML =`<li> ${userId[z].title} </li>`;
                                    document.getElementsByTagName('section')[0].appendChild(post)

                                    
                                }//loop

                            //if
                         } //fun
                        }
                        ) //event
                    
                    }//function
                    )//event lisner
                }//loop

        } //if
    }//event fun ..
    )// event ..
    