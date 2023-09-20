const  german = {
    nombre : "g3rman",
    salario: 1000000,
    mail:"mail@mail.com"
}

console.table(german)

let userName = prompt("Ingrese su nombre de usuario")
let className =  prompt("ingrese una class (smooth y hacker)")
let edad = prompt("ingrese su edad")
let edadReal = Number(edad) + 5

let salario , email


let respuesta = `
<header class="${className }">
<h1>HOLA SOY ${userName}</h1>
<hr>
<h3>mi edad declarada es : ${edad || "nada"}</h3>
<hr>
<h3>la edad real es de: ${edadReal || "nada"}</h3>
</header>
`


edad < 22 ? 
alert("guarda que no es cierto"):
document.write(
    respuesta    
)