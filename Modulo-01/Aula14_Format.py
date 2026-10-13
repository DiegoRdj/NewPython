a = "A"
b = "B"
c = 1.1
strings = 'A = {nome1}, B = {nome2} e C = {nome3:.2f}'
formato = strings.format(nome1 = a, nome2 = b, nome3 = c) # pega na ordem das chaves
print(formato)