# Seu nome é {nome}
# Seu nome é invertido é {nome invertido}
# Seu nome contem (ou nao) espaços
# Seu nome tem {n} letras;p-
# A primeira letra do seu nome é {letra}
# a ultima letra do seu nome é {letra}
nome = input("Digite seu nome: ")
idade = int(input("Digite sua idade: "))
if nome and idade:
    print(f"Seu nome é {nome}, tem {idade} anos")
    print(f"Seu nome invertido é: {nome[::-1]}")
    print(f"Seu nome contem espaço? {" " in nome}")
    print(f"Seu nome tem {len(nome)} letras")
    print(f"A primeira letra do seu nome é {nome[0]}")
    print(f"A ultima letra do seu nome é {nome[-1]}")
else:
    print("Preenche tudo ai vei")