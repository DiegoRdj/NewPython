def filtragem_de_numeros_pares(numerosLista:list):
    tamanho = len(numerosLista)
    listaDePares = []
    listaNum = 0
    for i in range(tamanho):
        
        if numerosLista[i] % 2 == 0:
            listaDePares.append(numerosLista[i])
            
    return listaDePares
print(filtragem_de_numeros_pares([1,2,3,4,5,6,7,8]))
