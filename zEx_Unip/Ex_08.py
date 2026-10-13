def contagem_de_ocorrencias(num:list, serRepetido:int):
    rep = 0
    tamanho = len(num)
    for i in range(tamanho):
        if num[i] == serRepetido:
            rep += 1
    return rep
print(contagem_de_ocorrencias([4,2,3,2,5,6,2,4,1, 32, 4, 54], 4))