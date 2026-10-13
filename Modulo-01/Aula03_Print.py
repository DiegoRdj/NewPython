# dentro do () se chama argumentos
# \r\n -> CLRF
# \n -> LF

print(12, 34, sep=' - ', end="\r\n") # pula uma linha, natural do python
print(56, 78, sep=" & ", end="-") # coloca um traço ao inves de pular linha
print(9, 10, sep=" + ", end="\n") # pula linha tbm
