from .tools import check_db

def read_users(dni:int, db_user:list=None) -> (dict|None):
    if not check_db(db_user):
        return None

    for user in db_user:
        if user["dni"] == dni:
            print(f"""
            User encontrado
            nombre: {user["nombre"]}
            email: {user["email"]}
                        
            """)
            return user

    print("usuario no encontrado")


    return {}

