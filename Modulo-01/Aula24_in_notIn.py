# Strings sao interaveis
# 0 1 2 3 4 5 6
# P E R S O N A

nome = "Persona"
print(nome[2])
print(nome[-1]) #mostra o ultimo
print("a" in nome)
print("Per" in nome) # ele entra na String para ver se esta dentro
print(10 * "-")
print("son" not in nome)
print("G" not in nome)

name = input("Digite seu nome : ")
encontrar = input("Digite o nome que deseja bucar: ")

if encontrar in nome:
    print(f"{encontrar} esta em {name}")
else:
    print(f"{encontrar} nao esta em {name}")