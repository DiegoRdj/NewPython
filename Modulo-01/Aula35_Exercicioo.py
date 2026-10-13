nome = input("Digite seu nome: ")

if len(nome) <= 4:
    print(f"O nome {nome} é um nome curto")
elif len(nome) <= 6:
    print(f"O nome {nome} é um nome normal")
else:
    print(f"O nome {nome} é um nome muitooo grande")