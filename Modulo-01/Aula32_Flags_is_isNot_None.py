# flag = marcar um local
# None = Não Valor
# Is e is not = é ou nao é (tipo, valor, identidade)
# id = identidade

condicao = True
passou_no_if = None
if condicao: 
    passou_no_if = True
    print("Faça Algo")
else:
    print("Não Faça Algo")

if passou_no_if is None:
    print("Não Passou no If")

if passou_no_if is not None:
    print("Passou no If")
