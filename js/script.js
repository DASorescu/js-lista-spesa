// dichiaro l'array
// prendo l'elemento dal dom 
// costruisco lo stringone con la lista della spesa 
// stampo in pagina 


const shoppingIteams = ["Uova", "Pane", "Latte", "Biscotti", "Pasta", "Affettati", "Formaggio", "Verdura", "Frutta"];
let shoppingList = document.getElementById("shopping-list");

let list = ("")
let i=0;
while(i< shoppingIteams.length){
    list += (`<li>${shoppingIteams[i]}</li>`);
    i++;
}

shoppingList.innerHTML = list;