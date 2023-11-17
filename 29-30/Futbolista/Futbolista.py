from .AbstractFutbolista import Futbolista
from .Habilidades import Habilidades
from .Club import Club, ListClub


# Herencia compuesta


class FutbolistaArgentino(Futbolista, Habilidades, ListClub):
    def __init__(self, **kwargs):
        self.nombre: str = kwargs.get("nombre", "no_definido")
        self.cant_goles: int = kwargs.get("cant_goles", 0)
        self.edad: int = kwargs.get("edad", 16)
        self.nacionalidad: str = kwargs.get("nacionalidad", "argentino")
        # super().__init__(**kwargs)
        Habilidades.__init__(self, **kwargs)
        ListClub.__init__(self, **kwargs)

    def __str__(self):
        return f"""
        Soy un futbolista {self.nacionalidad}
        Mi nombre es: {self.nombre}
    """

    def get_nombre(self):
        print(f"Soy futbolista {self.nacionalidad}, mi nombre es {self.nombre}")

    def get_nacionalidad(self):
        pass

    def mostrar_habilidades(self):
        for habilidad in self.habilidades:
            print(f"* habilidad: {habilidad}")

    def mostrar_clubs(self):
        for club in self.list_club:
            print(club.muestrar_definicion())


class FutbolistaBrasil(Futbolista):
    def __init__(self, **kwargs):
        self.nombre: str = kwargs.get("nombre", "no_definido")

    def get_nombre(self):
        respuesta: str = (
            f"Sou um jogador de futebol brasileiro, meu nome é: {self.nombre}"
        )
        print(respuesta)

    def get_nacionalidad(self):
        pass
