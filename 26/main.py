"""

# LIST |  ARRAYs

fruit_emojis:list = ["🍎", "🍌", "🍇", "🍓", "🍊", "🍍", "🥝", "🍒", "🥥", "🍋", "🍈", "🥭", "🍑", "🍏", "🥑", "🍉", "🍅", "🍆", "🥔"]

# print(fruit_emojis)

# iteraciones 

fruit_emojis[-1],fruit_emojis[0] = fruit_emojis[0], fruit_emojis[-1]


# ~ push  -> append

fruit_emojis.append("🦊")
# fruit_emojis.append("hola mundo")
# fruit_emojis.append([True,False,1_000_000])
# fruit_emojis.append(lambda x : x)


# print("lista con append\n",fruit_emojis)

# js pop -> pop

fruit_emojis.pop()
uva:str = fruit_emojis.pop(2)

# print("lista sin el lambda\n", fruit_emojis)


# ---------- INSERT


fruit_emojis.insert(2,uva)
# print("Volvio el pre-vino\n", fruit_emojis)


# --- Verduleria Manu

# for index,fruta in enumerate(fruit_emojis,start=100):
#     print(f"La fruta: {index:3} es -> {fruta:_^5}")


# ---- 
for index,fruta in enumerate(fruit_emojis):
    if fruta in ["🥥","🍍"]:
        print("Hay coincidencia, por lo tanto borramos")
        fruit_emojis.pop(index)


# print(fruit_emojis)

# -------------

# list comprehension
fruteria_limpia:list = [
    var_fruta # valor de variable
    for var_fruta in fruit_emojis # lugar de la iteracion
    if var_fruta not in ["🥥","🍍"] # condicion
]

# print(fruteria_limpia)

verduleria:tuple = ("manu",True,[])

for fruta in fruit_emojis:
    verduleria[2].append(fruta)

print(verduleria)

# verduleria[2] = []

print("tupla original\n ==>",verduleria)
# dado a que verduleria es una tuple => transformarlo a una lista
verduleria:list = list(verduleria)
# verduleria modificalo por que ahora es mutable
verduleria[2] = []
# volvelo a convertir en algo no mutable
verduleria:tuple = tuple(verduleria)

print("actualizamos la tupla\n ==>",verduleria)

nueva_mercaderia:list = fruit_emojis + ["🍎", "🍌", "🍇", "🍓", "🍊", "🍍", "🥝"] * 3

print(nueva_mercaderia)

# SET

frutas_unicas:set = set(nueva_mercaderia)

conteo_frutas:list = []

for fruta_unica in list(frutas_unicas):
    counter = 0
    for f in nueva_mercaderia:
        if fruta_unica == f:
            counter += 1

    conteo_frutas.append(
        (fruta_unica,counter)
    )


print(conteo_frutas)
"""

# DESAFIO -> FIZZ BUZZ

"""
 * Escribe un programa que muestre por consola (con un print) los
 * números de 1 a 100 (ambos incluidos y con un salto de línea entre
 * cada impresión), sustituyendo los siguientes:
 * - Múltiplos de 3 por la palabra "fizz".
 * - Múltiplos de 5 por la palabra "buzz".
 * - Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".
"""




# DICT 


german:dict = {
    "nombre" : "German"
,   "dni" :9801729387192873
,   "email" : "german_garmendia@mail.com"
,   "lg" : ["python","java","js"]
,   10 : "messi traeme la copa"
,   ("german_123" , "1234") : 1_000_000 
}

print(german)

print(german["lg"][0])

print(german.items())

for k,v in german.items():
    print(f"la llave es: {k} y el value es: {v}")


# -------

# user:str = input("ingrese user\t")
# pwd:str = input("ingrese password\t")

# print(german[(user,pwd)])


import random
import string


user:list = "belen,walter,melina,susana".split(",")

pwd:list = [ 
    ''.join(random.choices(string.ascii_uppercase + string.digits, k=6))
    for pwd in range(4)
]


usuarios_unicos:list = [
    {
        "nombre":u
    ,   "password":p
    ,   "status" : True
    ,   "mail" : f"{u}_underCo@mail.com"
    }
    for u,p in zip(user,pwd)
]


for usuario in usuarios_unicos:
    with open (f"{usuario['nombre']}.txt","w",encoding="utf8") as f:
        mensaje_:str = f"""

            Bienvenido,{usuario['nombre']}
            Tu email es: {usuario['mail']}
            Tu password provisorio es : {usuario['password']}

        """

        f.write(mensaje_)
















