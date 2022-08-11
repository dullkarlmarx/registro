function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}
const todo = document.getElementsByClassName("form-control")


let boton = document.getElementById("regBtn");
boton.addEventListener("click", () => {
    for (i = 0; i < por_cada.length; i++) {
        if (por_cada.value.length !== 0) {
            showAlertSuccess();
        }
        if (por_cada.value.length == 0) {
            showAlertError();
        }
    }
});

