def imc(peso:float, altura:float):
    return f"{peso / (altura * altura):.2f}"
print(imc(60, 1.70))