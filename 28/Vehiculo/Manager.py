from .Vehiculo import Vehiculo

class Manager:
    def __init__(self,**kwargs)->None:
        self.db:list[Vehiculo] = kwargs.get("db",[])

    def insertar_vehiculo(self,v:Vehiculo):
        self.db.append(v)
        print(f"se agregó un vehiculo {v.nombre_vehiculo}")
    
    def mostrar_vehiculos(self):
        if isinstance(self.db, list):
            for v in self.db:
                print(v.to_string())


    def save_vehiculos(self):
        if isinstance(self.db, list):
            out_text:str = ''

            for v in self.db:
                out_text += v.to_string()

            with open("base_datos.txt","w",encoding="latin-1") as f:
                f.write(out_text)
