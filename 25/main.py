"""
    En esta clase vamos a ver:
    
    Condicionales

    Iteraciones
    Textos
    Hacer uso de una base de datos sqlite3

    **extra : como utilizar modulos en python

    Hacer un ejercicio del año bisiesto

"""

# CONDICIONAL IF-ELSE-ELIF 
# LOGIN UTILIZANDO LOS CONDICIONALES

## importar datos de las credenciales

"""
from modulo.credenciales_usuario import PASSWORD , USERNAME


user =  input(" ingrese su user :\n")

if USERNAME == user:
    password =  input(" ingrese su password :\n")


    if password == '':
        print("password no puede vacio")
    elif ' ' in password:
        print("☠ ojo, que tu password tiene un espacio vacio")
    elif not password.isdigit():
        print("el password solo debe ser numerico")
    else:
        if password == PASSWORD:
            print("bienvenido usuario")
else:
    print("usuario no valido")

"""


# number = 0

# while number <10:
#     print(number)
#     number += 1


# flag:bool = True
# chars_de_negacion = ['n','N','no','No','']

# while flag:

#     print("agregar usuario")

#     user_stopper = input("desea agregar otro usuario?")

#     if user_stopper in chars_de_negacion:
#         flag = not flag
#         print("ya no se cargara un usuario")
#         # break


# else:
#     print("Se cerró la carga de usuarios y cerramos la base de datos")


texto = "hola mundo desde codo a codo"

# for i  in range( len(texto) ):
#     print(texto[i])


# inicio =  "inicio de proceso"
# fin = "fin de proceso"

# print(f"{inicio:*^40}")
# for chars in texto:
#     print(chars)
# else:
#     print("cierro ")
#     print(f"{fin:*^40}")


# EJERCICIO °1
# import sqlite3
# nombre_base_datos:str = 'libreria_23508.db'

# conn = sqlite3.connect(nombre_base_datos)

# cursor = conn.cursor()

# ## voy a a crear un tabla

# ddl_query_table = f"""
#     CREATE TABLE USER
#     (
#         rowid
#     ,   username VARCHAR
#     ,   password VARCHAR
#     )

# """
# cursor.execute(ddl_query_table)


# flag:bool = True
# chars_de_negacion = ['n','N','no','No','']

# while flag:
#     print("agregar usuario")
#     user = input("ingrese su usuario:\t")
#     password = input("ingrese su password:\t")

#     insert_query = f"""

#     INSERT INTO USER 
#     (username,password)
#     VALUES
#     ('{user}','{password}')

#     """
#     cursor.execute(insert_query)

#     user_stopper = input("desea agregar otro usuario?:\t")

#     if user_stopper in chars_de_negacion:
#         flag = not flag
#         print("ya no se cargaran usuarios")
#         # break
#     else:
#         print("Carga de siguiente usuario")

# else:
#     conn.commit()
#     print("Se commitiaron los cambios")
#     conn.close()
#     print("Se cierra la base de datos")





# EJERCIO ° 2


fecha_tope:str = input("fecha de tope:\n")

if fecha_tope.isdigit():
    """
    DocStrings
    ----------
    args None
    return bool de año bisiesto

    desc: 
        - permite hacer una validacion de año bisiesto
    """

    fecha_tope:int = int(fecha_tope)
    for year in range(1990,fecha_tope):
        primera_condicion:bool = (year % 400 == 0)
        segunda_condicion:bool = (year%4 == 0) and (year%100 != 0) 

        if primera_condicion or segunda_condicion:
            print(f"El año: {year:~^10} es bisiesto 😎")
else:
    print("No válido")












