# Interpolçao basica de Strings
# s - String
# d e i - int
# f - float
# x e X
#

nome = "Persona"
preco = 1000.97563543
variavel = '%s, o preço é R$%.2f' % (nome, preco)
#%s coloca uma String       % = outro valor, ele vai pegar na ordem, ent nome dps preco
print(variavel)
print("O hexadecimal de %d é %08x" % (1500, 1500))
#             preenche o zeros o X
