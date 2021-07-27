// Add two moe feathure add delete and editing
// var headerTitle=document.getElementById("headerItem");
// console.log(headerTitle);
// var submit=document.querySelector('input[type="submit"]')
// submit.value="add items";
 console.log(document.URL)

//  function insert(){
//     let table=document.getElementById("table1");

//     let itemNmae=document.getElementById("itemName").value;
//     let itemUnit=document.getElementById("itemUnit").value;
//     let itemPrice=document.getElementById("itemPrice").value0;

//     let htmlString=`<tr>
//                         <td> ${itemNmae} </td>
//                         <td>${itemUnit}</td>
//                         <td>${itemPrice}</td>
//                     </tr>`;

//     table.insertAdjacentHTML("afterend",htmlString);

//  }


 var form=document.getElementById("formId")
 console.log(form)
 var addItem=document.getElementById("table1")
 form.addEventListener('submit',insert)



 var totalamount=0;

 function insert(e){
   e.preventDefault();
   let itemName=document.getElementById("itemName").value;
   let itemUnit=document.getElementById("itemUnit").value;
   let itemPrice=document.getElementById("itemPrice").value;
  let tt=document.getElementById('total');
  tt.textContent=0
   //console.log(itemPrice)

   let tr1 = document.createElement('tr')
  // console.log(tr)
   
   let thName=document.createElement("th")
   let thUnit=document.createElement("th")
   let thPrice=document.createElement("th")
   let totalPrice=document.createElement('th');
  thName.textContent=itemName;
  thUnit.textContent=itemUnit;
  thPrice.textContent=itemPrice;
  totalPrice.textContent= itemUnit*itemPrice;

   tr1.appendChild(thName)
   tr1.appendChild(thUnit)
   tr1.appendChild(thPrice)
   tr1.appendChild(totalPrice)
   addItem.appendChild(tr1);
   
   thName.contentEditable="true"
   thPrice.contentEditable="true"
totalamount+=itemUnit*itemPrice;
tt.textContent=totalamount; 


var deleteBtn=document.createElement('button')
var editBtn=document.createElement('button');
editBtn.textContent='edit'
tr1.appendChild(editBtn);
deleteBtn.className='btn btn-danger btn-sm float-right delete'
deleteBtn.innerHTML = 'X'
deleteBtn.style.backgroundColor = 'yellow'
// deleteBtn.appendChild(document.createTextNode('x'));
tr1.appendChild(deleteBtn)


//var itemList=document.getElementById('tr');
deleteBtn.addEventListener('click',removeItem);

function removeItem(e){
  
  tt.textContent-=parseInt(tr1.childNodes[3].textContent)
addItem.removeChild(tr1)


    }

    let oldvalue=0;
editBtn.addEventListener('click',editItem);

function editItem(data){
 
  if(data.target.textContent=='edit'){
    tr1.childNodes[0].contentEditable='true'
    tr1.childNodes[1].contentEditable='true'
    tr1.childNodes[2].contentEditable='true'
     oldvalue=parseInt(tr1.childNodes[3].textContent)
    data.target.textContent='save'
  }
  else{
    tr1.childNodes[0].contentEditable='false'
    tr1.childNodes[1].contentEditable='false'
    tr1.childNodes[2].contentEditable='false'
   tt.textContent=parseInt(tt.textContent)+(parseInt(tr1.children[1].textContent*tr1.childNodes[2].textContent))-parseInt(oldvalue)
    // tr1.childNodes[3].textContent=tr1.childNodes[1].textContent*tr1.childNodes[2].textContent
    // tt.textContent=parseInt()
    data.target.textContent='edit'
  }





}


  // tr.appendChild(thName)

  //  return tr;
  
 }

 