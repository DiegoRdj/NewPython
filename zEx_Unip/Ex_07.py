def validacao_de_faixa_numerica(num1:int, num2:int, num3:int):
    if num1 + num2 + num3 >= 26:
        return False
    else:
        return True
print(validacao_de_faixa_numerica(10, 6, 10))