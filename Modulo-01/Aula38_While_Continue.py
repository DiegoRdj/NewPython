contador = 0

while contador <= 40:
    contador += 1

    print(contador)

    if contador == 6:
        print("Não vou mostrar o 6")
        continue

    if contador >= 10 and contador <= 20:
            print("Não vou mostrar o ", contador)

    if contador == 40:
        break # para while

print("Acabou")
