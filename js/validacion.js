function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}
const todo = document.getElementsByClassName("form-control")

/*
let boton = document.getElementById("regBtn");
boton.addEventListener("click", () => {
    for (var i=0; i < todo.length; i++) {
        if (por_cada.value.length !== 0) {
            showAlertSuccess();
        }
        if (por_cada.value.length == 0) {
            showAlertError();
        }
    }
}); */
let boton = document.getElementById("regBtn");
boton.addEventListener("click", () => {
    let cantCompletas = 0;
    for (por_cada of todo) {
        if (por_cada.value.length != 0) {
            cantCompletas += 1;
        }
    }
    if (cantCompletas == 5) {
        showAlertSuccess();
    } else {
        showAlertError();
    }
});