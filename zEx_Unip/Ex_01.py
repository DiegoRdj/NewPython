def menor_de_dois_numeros(num1:int, num2:int):
    if num1 > num2:
        return num1
    elif num2 > num1:
        return num2
    else:
        return "São iguais"
print(menor_de_dois_numeros(10, 20))