def maior_de_tres_numeros(num1:int, num2:int, num3:int):
    if num1 > num2 and num1 > num3:
        return num1
    elif num2 > num1 and num2 > num3:
            return num2
    else:
         return num3
print(maior_de_tres_numeros(5,7,1))