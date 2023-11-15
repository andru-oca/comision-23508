from Vehiculo import Vehiculo
from Vehiculo import Manager


def main():

    gol:Vehiculo = Vehiculo(
        ruedas  = 4 ,
        motor   =  "V16",
        numero_motor    = "alpha-centaury666"
    )


    choclito:Vehiculo = Vehiculo(
        ruedas=3,
        motor="a dogde patas",
        numero_motor="kajsdjaskld89897789"
    )

    local_database:Manager = Manager()

    local_database.insertar_vehiculo(gol)
    local_database.insertar_vehiculo(choclito)

    local_database.mostrar_vehiculos()
    local_database.save_vehiculos()





if __name__ == '__main__':
    main()





