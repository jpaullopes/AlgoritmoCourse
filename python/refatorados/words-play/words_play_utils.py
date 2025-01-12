#tentando voltar a escrever em inglês
def menu_design():
    return """--------------------- [ WORD-PLAY ] ---------------------
[ 1 ] - LOAD FILE
[ 2 ] - PALAVRAS COM MAIS DE 20 LETRAS
[ 3 ] - PALAVRAS SEM "X" LETRA
[ 4 ] - PALAVRAS COM MAIS DE "X" LETRAS
[ 5 ] - LETRAS PROIBIDAS
[ 6 ] - PALAVRA FORMADA APENAS POR "X" LETRAS
[ 7 ] - LETRAS OBRIGATÓRIAS
[ 8 ] - ORDEM ALFABETICA
[ 9 ] - PALAVRAS SEM A LETRA "E"
[ 0 ] - SAIR
---------------------------------------------------------"""

def open_file(file_name):
    file = open(file_name, "r")    
    words = []
    for line in file:
        words.append(line.strip())
    return words
    
def avoids(word, banid_letters):
    for letter in word:
        if letter in banid_letters:
            return False
    return True

#verifica se a palavra é composta apenas pelas letras informadas e retorna verdadeiro ou falso
def uses_only(word,letters):
    for l in letters:
        for c in word:
            if (l not in word) or (c not in letters): 
                return False    
    return True

#retorna se a palvra tem certas letras
def uses_all(word,letters):
    for l in letters:
        if l not in word: 
            return False  
    return True

def array_transformation(string):
    new_array = []
    for i in string:
        new_array.append(i)
    return new_array

def exibition(values):
    exibition_values = ''
    for i,j in enumerate(values):
        exibition_values += f'[{i+1}] -> [{j}]\n'
    return exibition_values

def line():
    return '---------------------------------------------------------'
