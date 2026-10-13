def maior_elemento(lista:list):
    tamanho = len(lista)
    valor = lista[0]
    for i in range(tamanho):
        if valor < lista[i]:
            valor = lista[i]
    return valor
print(maior_elemento([12, 214, 15, 152]))