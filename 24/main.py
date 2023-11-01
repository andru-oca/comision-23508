# nombre:str = input("ingrese nombre: \t")

# print("Hola, " + nombre)


# formulario de carga de usuario

nombre = input("ingrese nombre : \n")
apellido = input("ingrese apellido : \n")
email = input("ingrese email : \n")
dni = input("ingrese dni : \n")

text_output = f"""
    Mi nombre es: {nombre}, {apellido}
    Email: {email}
    DNI: {dni:_^20}
"""

print(text_output)

with open("manu_usuario.txt",'w',encoding='utf8') as f:
    f.write(text_output)
    


