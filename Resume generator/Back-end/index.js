

function addNewWEField(){
    
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control")
    newNode.classList.add("weField")
    newNode.classList.add("mt-2")
    newNode.setAttribute("rows" , 3)
    newNode.setAttribute('placeholder', 'Enter Here')

    let weOb = document.getElementById("we");
    let weAddButtonOb = document.getElementById("weAddButton");


    weOb.insertBefore(newNode, weAddButtonOb);
    
}


function addNewAQField(){

    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control")
    newNode.classList.add("aqField")
    newNode.classList.add("mt-2")
    newNode.setAttribute("rows" , 3)
    newNode.setAttribute('placeholder', 'Enter Here')

    let aqOb = document.getElementById("aq");
    let aqAddButtonOb = document.getElementById("aqAddButton");


    aqOb.insertBefore(newNode, aqAddButtonOb);
}

// generating cv
function generateCV(){
    
    let nameField = document.getElementById("nameField").value;
    let nameT1 = document.getElementById("nameT1");
    nameT1.innerHTML = nameField;

    //direct
    document.getElementById("nameT2").innerHTML = nameField;
    document.getElementById("contactT").innerHTML = document.getElementById("contactField").value;
    document.getElementById("addressT").innerHTML = document.getElementById("addressField").value;
    document.getElementById("addressT").innerHTML = document.getElementById("addressField").value;



    // links
    document.getElementById("fbT").href = document.getElementById("fbField").value;
    document.getElementById("linkT").href = document.getElementById("LinkedinField").value;
    document.getElementById("gitT").href = document.getElementById("githubField").value;

    // objectives
    document.getElementById("objectiveT").innerHTML = document.getElementById("objectiveField").value;
    
    // work experience
    let wes = document.getElementsByClassName("weField");
    let str = "";
    for(e of wes){
        str += `<li> ${e.value} </li>`;
    }
    document.getElementById("weT").innerHTML = str;


    // Skills and academic qualification
    let aqs = document.getElementsByClassName("aqField");
    let st = "";
    for(e of aqs){
        st += `<li> ${e.value} </li>`;
    }
    document.getElementById("aqT").innerHTML = st;


    // to set profile photo
    let file = document.getElementById("imgField").files[0]
    // console.log(file);
    let reader = new FileReader()
    reader.readAsDataURL(file);
    // console.log(reader.result);

    // seting image in template
    reader.onloadend = function (){
        document.getElementById("imgT").src = reader.result;
    }
    
    // to hide the form and view cv
    document.getElementById("cv-form").style.display = 'none';
    document.getElementById("cv-template").style.display = 'block';

}


function printCV(){
    window.print();
}