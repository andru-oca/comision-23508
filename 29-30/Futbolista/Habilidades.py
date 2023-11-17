class Habilidades:
    def __init__(self, **kwargs):
        self.habilidades: list = kwargs.get("habilidades", [])

    def agregar_super_tiro(self, tiro):
        self.habilidades.append(tiro)

    def agregar_cabezazo(self, cabezazo):
        self.habilidades.append(cabezazo)
