numero = input("Digite um numero: ")
numF = ...
try:
    numF = int(numero)
    if numF % 2 == 0:
        print(f"O numero escolhido ({numF}) é par")
    else:
        print(f"O numero escolhido ({numF}) é impar")    
except:
    print("Vc é burro? coloca um numero inteiro")
