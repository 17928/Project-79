menu_list_array=["Veg Margherita Pizza",
"Chicken Tandoori Pizza",
"Veg Supreme Pizza",
"Paneer Tikka Pizza",
"Duluxe Veggie Pizza",
"Veg Extravaganza Pizza"];
function getmenu(){
    var htmldata="";
    menu_list_array.sort();
    for(var i=0;i<menu_list_array.length;i++){
        htmldata=htmldata+ menu_list_array[i] + '<br>'
    }
    document.getElementById("display_menu").innerhtml=htmldata;
}
function add_iten(){
    var htmldata;
    var imgtags='<img id="iml" src="https://pngimg.com/uploads/pizza/pizza_PNG43985.png"/>'
    var item=document.getElementById("add_item").value;
    menu_list_array.sort();
    htmldata=""
    for(var i=0;i<menu_list_array.length;1++){
        htmldata=htmldata+imgtags+ menu_list_array[i]+'<br>';
    }
    document.getElementById("display_addedmenu").innerhtml = htmldata;
}
function add_top(){
    var item=document.getElementById("add_item").value;
    menu_list_array.push(item);
    add_item();
}