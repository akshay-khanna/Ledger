function validateRange(){
if(document.getElementById("start_date").value >document.getElementById("end_date").value){
    document.getElementById("end_date").focus();
    return false;
}
return true;
}
function validateForm(){

    if(!validateRange()){
        alert("End date cannot be lesser than Start Date")
        return false;
    }

 
}