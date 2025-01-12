import sys
import osa conseguir importar o modulo um diretorio acima
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))
import utils
#par
import words_play_utils as wpu

def main():
    print(wpu.menu_design())
    option = utils.get_number_between("Digite a opção desejada: ",0,1,"Você só pode escolher a opção [1] ou [0].")
    print(wpu.line())

    while option != 0:
        if option == 1:
            file_name = input("Digite o nome do arquivo: ")
            words = wpu.open_file(file_name)
            print(wpu.line())
            print("Arquivo carregado com sucesso!")
        elif option == 2:
            temp = utils.my_filter(lambda a: len(a) > 20, words)
            print(wpu.exibition(temp))
        elif option == 3:
            letter = input("informe um caractere: ")[0]
            temp = utils.my_filter(lambda a: letter not in a, words)
            print(wpu.exibition(temp))
        elif option == 4:
            word_size = int(input('Informe a quantidade minima de letras das palavras: '))
            temp = utils.my_filter(lambda a: len(a) > word_size, words)
            print(wpu.exibition(temp))
        elif option == 5:
            letters_prohibited = input('Informe as letras proibidas: ')
            temp = utils.my_filter(lambda a:wpu.avoids(a,letters_prohibited), words)
            print(wpu.exibition(temp))
        elif option == 6:
            letters_required = input('Informe as letras que fromarão a palavra: ')
            temp = utils.my_filter(lambda a:wpu.uses_only(a, letters_required), words)
            print(wpu.exibition(temp))
        elif option == 7:
            letters_required = input('Informe as letras obrigatórias: ')
            temp = utils.my_filter(lambda a:wpu.uses_all(a, letters_required), words)
            print(wpu.exibition(temp))
        elif option == 8:
            temp = utils.my_filter(lambda a: wpu.array_transformation(a) == utils.ordenar(wpu.array_transformation(a)), words)
            print(wpu.exibition(temp))
        elif option == 9:
            letter = 'e'
            temp = utils.my_filter(lambda a: letter not in a, words)
            print(wpu.exibition(temp))

        #recomeço da iteração    
        print(wpu.menu_design())
        option = utils.get_number_between("Digite a opção desejada: ", 0, 9)
        print(wpu.line())
    #finalização
    print("Obrigado por usar o programa!")
    
main()