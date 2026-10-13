"""
s - string
d - int
f - flaot
.<numero de digitos>f
x ou X - Hexadecimal
(Caractere)(><^)(quantidade)
> - Esquerda
< - Direita
^ - Centro
= - força o numero a aparecer antes dos zeros
Sinal - + ou -
Ex.: 0>-100.if
conversion flags - !r !s !a
"""
variavel = "ABC"
print(f"{variavel: >10}") # 10 espaços na esquerda
print(f"{variavel: <10}.") # 10 espaços na direita
print(f"{variavel:-^10}.") # 10 traços, 5 na esquerda e direita
print(f"{100.1232:0=+10,.1f}")
print(f"O hexadecimal de 1500 é {1500:08x}")