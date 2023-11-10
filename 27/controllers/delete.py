from .tools import check_db

def delete_user(dni:int,db_user:list=None)->None:
    """
    Delete a user from the database based on their DNI.

    Parameters:
    - dni (int): The DNI (Documento Nacional de Identidad) of the user to be deleted.
    - db_user (list): A list containing user dictionaries. If not provided or None, the function returns without
      making any changes.

    Returns:
    None: The function modifies the provided 'db_user' list in place, removing the user with the specified DNI.
    """
    
    if not check_db(db_user):
        return None


    # return [
    #     user
    #     for user in db_user
    #     if  user["dni"] == dni
    # ]


    for index,user in enumerate(db_user):
        if user["dni"] == dni :
            db_user.pop(index)
    