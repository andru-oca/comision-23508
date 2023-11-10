import random

def generate_german_email(name):
    domains = ["gmail.com", "yahoo.de", "web.de", "t-online.de", "outlook.de"]
    random_domain = random.choice(domains)
    return f"{name.lower()}_{random.randint(100, 999)}@{random_domain}"



_names:list = [
    "Anna", "Benjamin", "Caroline", "David", "Eva", "Felix", "Greta",
    "Hans", "Isabella", "Jakob", "Klara", "Lukas", "Maria", "Niko",
    "Olivia", "Paul", "Quirin", "Rosa", "Simon", "Theresa", "Ursula",
    "Valentin", "Wilma", "Xaver", "Yvonne", "Zacharias"
]


_dni:list = [random.randint(50_000_000, 99_000_000) for _ in range(100)]




def create_user(nombre:str = None, email:str = None, dni:int = None ) -> dict:
    """
    Create a user dictionary with optional parameters.

    Parameters:
    - nombre (str): User's name. If not provided, a random name will be chosen.
    - email (str): User's email. If not provided, a random email will be chosen.
    - dni (int): User's DNI (Documento Nacional de Identidad). If not provided, a random DNI will be chosen.

    Returns:
    dict: A dictionary containing user information, including 'nombre', 'email', and 'dni'.
    """


    if nombre is None and email is None and dni is None:
        nombre_random:str = random.choice(_names)
        return {
            "nombre":nombre_random,
            "email":generate_german_email(nombre_random),
            "dni":random.choice(_dni)
        }

    return {
        "nombre":nombre,
        "email":email,
        "dni":dni
    }
    
def create_database(cant_user:int = 10):
    """
    Create a database of user dictionaries with optional parameters.

    Parameters:
    - cant_user (int): The number of user entries to generate in the database. Default is 10.

    Returns:
    list: A list containing dictionaries, each representing user information. Each entry is created using the
    create_user function with random or specified values for 'nombre', 'email', and 'dni'.
    """
    return [
        create_user()
        for _ in range(cant_user)
    ]