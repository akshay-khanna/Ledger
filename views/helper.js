function validateRange(){
    //alert("here")
   //alert(document.getElementById("start_date").value); 
   //alert(document.getElementById("end_date").value);
if(document.getElementById("start_date").value >document.getElementById("end_date").value){
    document.getElementById("end_date").focus();
    return false;
}
return true;
}
function validateForm(){
    //alert("Ht")
    if(!validateRange()){
        alert("End date cannot be lesser than Start Date")
        return false;
    }
    alert("hr");
 
}