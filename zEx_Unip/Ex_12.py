def contagem_de_vogais(frase:str):
    tamanho = len(frase)
    vogais = 0
    for i in range(tamanho):
        if frase[i] == "a" or frase[i] == "e" or frase[i] == "i" or\
        frase[i] == "o" or frase[i] == "u":
            vogais += 1
    return vogais
print(contagem_de_vogais("unip")) 