#  ------------ functiones

# def greeting(nombre:str) -> None:
#     print(f"Hola, {nombre}")
#     return None
# nombre:str = input("ingresa tu nombre: \n")

# greeting( nombre )

# CRUD 
"""

database (crear un usuario | muchos usuarios)
- ingreso la operacion del CRUD
- controllers : logica del negocio
- que paso hacer despues?

"""

from database import create_database
from controllers import delete_user
from controllers import read_users
from controllers import create_user



db_user:list[dict] = create_database()
print(db_user)

def main():
    print("gracias por usar nuestro gestor de usuarios")
    choice_crud:str = input("""
    Ingrese la opcion de operacion que quiere hacer
    Opciones :                             
        - a para leer
        - b para crear
        - c para editar
        - d para borrar
    """)

    if choice_crud == "a":
        _dni:str = input("dni usuario :\n")
        read_users(int(_dni),db_user)
        return
    if choice_crud == "b":
        _dni:str = input("dni usuario :\n")
        create_user(int(_dni),db_user)
        print(db_user)
        return
    
    if choice_crud == "c":
        ...
        return

    if choice_crud == "d":
        _dni:str = input("dni usuario :\n")
        print(len(db_user))
        delete_user(int(_dni),db_user)
        print(len(db_user))


main()