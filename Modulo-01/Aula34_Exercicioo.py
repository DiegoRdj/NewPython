horario = input("Caro senhor, informe a hora por gentileza: ")

try:
    horarioInt = int(horario)
    if horarioInt >=0 and horarioInt < 12:
        print("Bom dia!")
    elif horarioInt <= 17:
        print("Boa tarde!")
    elif horarioInt <= 24:
        print("Boa noite!")
    else:
        print("Coloca a hora normal seu jumento")
except:
    print("Caro senhor, coloque o horario, seu burro")