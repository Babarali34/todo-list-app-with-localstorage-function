var items = JSON.parse(localStorage.getItem('todo-list')) || [];

function addItem(){
   var inputBox = document.querySelector('#myInput')
   var item = inputBox.value
   if(item === "")
    return alert("Write Something")
   items.push({
     value:item,
     time : (new Date()).toLocaleDateString("en-US")
   })
   localStorage.setItem('todo-list', JSON.stringify(items))
   listItems()
   inputBox.value = ""
}

function listItems(){
   var list = "";
   for (var i = 0; i < items.length; i++){
    list += "<li class=" + (items[i].done ? "Done" : "") + ">";
    list += items[i].value + " ";
    list += items[i].value + " ";
    list += "<small class ='date' >" + items[i].time + "</small>";
    list += "<span class ='label ' onclick = 'deleteItem("+ i + ")'>\u00D7 </span></li>";

   }
   document.querySelector("#myUl").innerHTML = list;
}

   listItems()



function deleteItem(index){
  items.splice(index,1)
  localStorage.setItem('todo-list',JSON.stringify(items))
  listItems()
}