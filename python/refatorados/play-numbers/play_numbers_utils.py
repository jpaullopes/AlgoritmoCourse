from random import randint

def menu_design(): 
    return'''---------------------- [ PLAY NUMBERS ] --------------------
[ 0 ]  - SAIR
[ 1 ]  - INICIALIZAR VETOR NUMÉRICO
[ 2 ]  - MOSTRAR TODOS OS VALORES
[ 3 ]  - RESETAR VETOR (PEDIR VALOR NÚMERO PADRÃO)
[ 4 ]  - VER QUANTIDADE DE ITENS NO VETOR
[ 5 ]  - VER MENOR E MAIOR VALORES E SUAS POSIÇÕES
[ 6 ]  - SOMATÓRIO DOS VALORES
[ 7 ]  - MÉDIA DOS VALORES
[ 8 ]  - MOSTRAR VALORES POSITIVOS E QUANTIDADE
[ 9 ]  - MOSTRAR VALORES NEGATIVOS E SUAS QUANTIDADES
[ 10 ] - ATUALIZAR TODOS OS VALORES POR UMA DAS REGRAS
[ 11 ] - ADICIONAR NOVOS VALORES
[ 12 ] - REMOVER ITENS POR VALOR EXATO
[ 13 ] - REMOVER POR POSIÇÃO
[ 14 ] - EDITAR VALOR ESPECÍFICO POR POSIÇÃO
[ 15 ] - SALVAR VALORES EM ARQUIVO
------------------------------------------------------------'''

def line():
    return "------------------------------------------------------------"

def mini_menu_one():
        return'''---------------------- [ OPÇÕES ] --------------------------
[ 1 ] - GERAR LISTA COM VALORES ALEÁTORIOS
[ 2 ] - INFORMAR VALORES
[ 3 ] - CARREGAR VALORES DE UM ARQUIVO
------------------------------------------------------------'''


def mini_menu_ten():
        return'''---------------------- [ OPÇÕES ] --------------------------
[ 1 ] - MULTIPLICAR POR UM VALOR
[ 2 ] - ELEVAR A UM VALOR
[ 3 ] - REDUZIR A UMA FRAÇÃO
[ 4 ] - SUBSTITUIR VALORES NEGATIVOS POR UM NÚMERO ALEATÓRIO
[ 5 ] - ORDENAR VALORES
[ 6 ] - EMBARALHAR VALORES
------------------------------------------------------------'''

def ordenation_menu():
   return'''---------------------- [ ORDENAR ] --------------------------
[ 1 ] - CRESCENTE
[ 2 ] - DECRESCENTE
------------------------------------------------------------'''

def open_file(file_name):
    file = open(file_name, "r")    
    words = []
    for line in file:
        words.append(line.strip())
    return words

def random_list(size,min,max):
    values = []
    for i in range(size):
        values.append(float(randint(min,max)))
    return values

def get_list(size):
    values = []
    for i in range(size):
        value = int(input(f"{i+1}° valor: "))
    return values

def exibition(values):
    exibition_values = ''
    for i,j in enumerate(values):
        exibition_values += f'[{i+1}] -> [{j}]\n'
    return exibition_values

def shuffle(array):
    new_array = array[:]
    for i in range(len(new_array)):
        random_position = randint(0,len(new_array)-1)
        temp = new_array[i]
        new_array[i] = new_array[random_position]
        new_array[random_position] = temp
    return new_array