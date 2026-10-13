def soma_recursiva(num1:int):
    if num1 == 1:
        return 1
    else:
        return num1 + soma_recursiva(num1 -1)

def media_art_dos_n_numeros(num:int):
    if num == 1:
        return 1
    else:
        return soma_recursiva(num) / num
print(media_art_dos_n_numeros(5))