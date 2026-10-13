# iteravel -> str, range, etc (__iter__)
# Iterador -> quem sabe entregar um valor por vez
# next -> me entregue o proximo valor
# iter -> me entregue seu iterador

texto = iter("JOKER") #__iter__()

print(texto.__next__())
print(texto.__next__())
print(texto.__next__())
print(texto.__next__()) # ficou indo um por um

print(next(texto)) # chama o proximo valor

txt = "Makoko" #interavel
iteratodor = iter(txt) #iterator

while True:
    try:
        letra = next(iteratodor)
        print(letra)
    except StopIteration:
        break 
