def palindromo(palavra:str):
    palavraAoContrario = f"{palavra[::-1]}"
    if palavra == palavraAoContrario:
        return True
    else:
        return False
print(palindromo("oo"))