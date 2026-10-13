# o OR valida se um for validado

entrada = input("[E]ntrar [S]air: ")
senha_digitada = input("Senha: ")

senha_perimitda = "123456"
if (entrada == "E" or entrada == "e") and senha_digitada == senha_perimitda:
    print("Entrar")
else:
    print("Sair")

    print(True or False or False or "abc" or True) # retorna o ultimo true da tela