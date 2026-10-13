def verificador_de_numero_par(numero:int):
    if numero % 2 == 0:
        return "PAR"
    else:
        return "IMPAR"
print(verificador_de_numero_par(10))