def calculo_de_desconto(preco:float, desconoto:float):
    return preco * (1 - desconoto / 100)
print(calculo_de_desconto(100, 10))