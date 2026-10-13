velocidade = 61
local_carro = 101

RADAR_1 = 60 #quando usar maisculo, é uma variaveil imutavel
LOCAL_1 = 100 # local onde o radar 1 esta
RADAR_RANGE = 1 # A distancia onde o radar pega

vel_carro_padd_radar_1 = velocidade > RADAR_1
carro_passou_radar1 = local_carro >= (LOCAL_1 - RADAR_RANGE) and\
    local_carro <= (LOCAL_1 + RADAR_RANGE) 
carro_multado_radar_1 = carro_passou_radar1 and vel_carro_padd_radar_1
if vel_carro_padd_radar_1:
    print("Velocidade carro passou do radar 1")

if carro_passou_radar1:
    print("Carro passou radar 1")

if carro_multado_radar_1:
    print("Carro multado em radar")