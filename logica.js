document.getElementById("formulario").addEventListener("submit",function(event){
    event.preventDefault();
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("correo").value;
    var password = document.getElementById("password").value;
    
    console.log("Nombre : "+ nombre)
    console.log("Email : "+ email)
    console.log("Contraseña :"+ password)
});