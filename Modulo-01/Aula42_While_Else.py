string = "valor qualquer"

i = 0
while i < len(string):
    letra = string [i]

    if letra == " ":
        break # executa o else´~][]
    print(letra)
    i += 1
else:
    print("O else foi execxutado")
print("fora do while")