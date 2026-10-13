import os
# importa o os

palavra_secreta = "persona"
letras_acertadas = ''
numero_tentativas = 0

while True:

    letra_digitado = input("Digite uma Letra: ")
    numero_tentativas += 1
    
    if len(letra_digitado) > 1:
        print("Digite apenas uma letra")
        continue

    if letra_digitado in palavra_secreta:
        letras_acertadas += letra_digitado

    palavra_formada = ""

    for letra_secreta in palavra_secreta:
        if letra_secreta in letras_acertadas:
            palavra_formada += letra_secreta
        else: 
            palavra_formada += "*"

    print("palavra_formada", palavra_formada)

    if palavra_formada == palavra_secreta:
        os.system('clear')
        print("Voce ganhou!! PARABENS")
        print("A palavra era", palavra_formada)
        print("Tentativas:", numero_tentativas)
        palavra_secreta = "persona"
        letras_acertadas = ''
        numero_tentativas = 0