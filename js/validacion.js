const alertPlaceholder = document.getElementById('liveAlertPlaceholder')

const alertSuccess = () => {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
        `<div class="alert alert-success alert-dismissible" role="alert" id="alert-success">`,
        `    <p>Datos guardados correctamente</p>`,
        `    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>`,
        `</div>`
    ].join('')

    alertPlaceholder.append(wrapper)
}

const alertError = () => {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
        `<div class="alert alert-danger alert-dismissible" role="alert" id="alert-danger">`,
        `    <p>Los datos ingresados no cumplen con los requisitos solicitados</p>`,
        '    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        '</div>'
    ].join('')
    alertPlaceholder.append(wrapper)
}




const todo = document.getElementsByClassName("form-control")

let boton = document.getElementById("regBtn");
boton.addEventListener("click", () => {
    let cantCompletas = 0;
    for (por_cada of todo) {
        
        if (por_cada.value.length != 0) {
            cantCompletas += 1;
        }
    }
    if (cantCompletas == 5) {
        alertSuccess();

    } else {
        alertError();

    }
});
