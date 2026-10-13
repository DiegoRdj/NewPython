# calc com wgile

while True:
    numero_1 = input("Digite um numero: ")
    numero_2 = input("Digite outro numero: ")
    operador = input("Digite o operador (+-/*): ")

    numeros_validos = None
    num1_f = 0
    num2_f = 0
    
    try:
        num1_f= float(numero_1)
        num2_f = float(numero_2)
        numeros_validos = True
    except Exception:
        numeros_validos is None
    if numeros_validos is None:
        print("Um ou ambos os numeros digitaos são invalidos")
        continue # PARA O LAÇO E CONTINUA LA DE CIMA

    operadores_permitidos = "+-/*"

    if operador not in operadores_permitidos:
        print("Operador Invalido")
        continue

    if len(operador) > 1:
        print("Operador Invalido")
        continue

    print("Realizando sua conta... ")
    if operador == "+":
        print(f"{num1_f} + {num2_f} = {num1_f + num2_f}")
    elif operador == "-":
        print(f"{num1_f} - {num2_f} = {num1_f + num2_f}")
    elif operador == "*":
        print(f"{num1_f} * {num2_f} = {num1_f + num2_f}")
    elif operador == "/":
        print(f"{num1_f} / {num2_f} = {num1_f + num2_f}")


    sair = input("Quer [s]air? ").lower().startswith("s")  # deixa em minusculo e ve se começa com S

    if sair is True:
        break