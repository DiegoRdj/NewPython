# repeticao
# while(enquanto)
# executa uma ação enquanto uma condição for verdadeira

condicao = True

while condicao:
    nome = input("Qual é seu nome? ")
    print(f"Seu nome é {nome}")

    if nome == "sair":
        break
print("Acabou")