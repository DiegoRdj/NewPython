#and e or ou
# se um é falso, todos sao falsos

entrada = input("[E]ntrar [S]air: ")
senha_digitada = input("Senha: ")

senha_perimitda = "123456"
if entrada == "E" and senha_digitada == senha_perimitda:
    print("Entrar")
else:
    print("Sair")