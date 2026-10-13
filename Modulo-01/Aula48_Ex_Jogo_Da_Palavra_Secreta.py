palavra_secreta = input("Digite a palavra secreta: ").lower()
acertou = False

numero_de_letras = len(palavra_secreta)
palavra_escondida = ["*"] * numero_de_letras

print("".join(palavra_escondida))
tentativas = 0
while acertou == False:
    digite_letra = input("Digite uma letra: ").lower()

    for j in range(numero_de_letras):
        if digite_letra == palavra_secreta[j]:
            palavra_escondida[j] = digite_letra

    print("".join(palavra_escondida))
    if "".join(palavra_escondida) == palavra_secreta:
        break
    tentativas += 1
print(f"Voce acertou a palavra '{palavra_secreta}' tendo {tentativas} tentativas")
    