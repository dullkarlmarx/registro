function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}
const todo=document.getElementsByClassName("form-control")
for (por_cada of todo){
  if (por_cada.value.length !== 0){
    showAlertSuccess();
  }else{
    showAlertError();
  }
}