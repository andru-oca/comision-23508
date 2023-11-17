from Futbolista import FutbolistaArgentino
from Futbolista import FutbolistaBrasil
from Futbolista import Club, ClubBarrio


def main():
    barcelona: Club = Club(nombre="barcelona", lugar="Sevilla")
    sacachispas: ClubBarrio = ClubBarrio(nombre="Sacachispas")

    alvarez: FutbolistaArgentino = FutbolistaArgentino(
        nombre="julian", habilidades=["tiro del miau", "sarasa"], list_club=[]
    )

    print(alvarez)

    alvarez.get_nombre()

    alvarez.agregar_super_tiro("tiro del dragon")
    alvarez.agregar_cabezazo("mega cabezón")

    alvarez.mostrar_habilidades()

    alvarez.insert_club(barcelona)
    alvarez.insert_club_barrio(sacachispas)

    alvarez.mostrar_clubs()

    # pele:FutbolistaBrasil = FutbolistaBrasil(nombre="pele")
    # pele.get_nombre()


if __name__ == "__main__":
    main()
