//Variables 

let usuarioActal;

const cuentas = [
    {nom: 'Mali',
    apellido: 'Domingues',
    saldo: 200,
    password: 'md'},
    {nom: 'Miguel',
    apellido: 'Cabrera',
    saldo: 100,
    password: 'mc'},
    {nom: 'Fernando',
    apellido: 'Montes',
    saldo: 300,
    password: 'fm'}    
];

//Funciones

//Funcion que selecciona usuario

function seleccionaUsuario(cuentas, nom, ape) {
    let seleccion;
    cuentas.forEach(element => {         
        if(element.nom == nom && element.apellido == ape) {seleccion = element}              
    });

    return seleccion; 
}

//Funcion que consulta el saldo del usuario

function consultarSaldo(user) {
    return user.saldo;    
}

//Funcion que agrega saldo

function ingresaSaldo(user,  monto) {
    user.saldo += monto;
    return user.saldo;
}

//Funcion que resta saldo

function restaSaldo(user,  monto) {
    user.saldo -= monto;
    return user.saldo;
}


//Pruebas con Quokka

usuarioActal = seleccionaUsuario(cuentas, 'Miguel', 'Cabrera');
console.log(usuarioActal);
console.log(consultarSaldo(usuarioActal));
console.log(ingresaSaldo(usuarioActal, 500));
console.log(restaSaldo(usuarioActal, 50));

