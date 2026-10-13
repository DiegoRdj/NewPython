def calculo_de_fatorial(num:int):
    if num == 1 or num == 0:
        return num
    else:  
        return num * calculo_de_fatorial(num - 1)

print(calculo_de_fatorial(5))