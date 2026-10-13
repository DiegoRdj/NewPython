"""
 012345678
 Olá Mundo
-987654321
fatiamento [i:f:p] [::]
"""
variavel = "Olá Mundo"
print(len(variavel)) # começa do 1, ve todos os caracteres
print(variavel[0:9:1]) # do 0 ate o 9, passo 1,
print(variavel[2::])  # á mundo - começa do 2 e vai ate o fim passo 1
print(variavel[::-1]) # vai mostrar invertido