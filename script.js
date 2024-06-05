const inputbox= document.getElementById("input-box");
const listcontainer= document.getElementById("list-container");

function addTask(){
    if(inputbox.value===''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML= inputbox.value;
        listcontainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML="\u00d7"
        li.appendChild(span);
    }
    inputbox.value="";
    savetask();
}

listcontainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        savetask();
    }
    else if(e.target.tagName=="SPAN"){
        e.target.parentElement.remove();
        savetask();
    }
    
}, false);

function savetask(){
    localStorage.setItem("task",listcontainer.innerHTML);
}

function showtask(){
    listcontainer.innerHTML= localStorage.getItem("task");
}

showtask();

