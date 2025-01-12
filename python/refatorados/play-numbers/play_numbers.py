import sys
import os
from random import randint
#para conseguir importar o modulo um diretorio acima
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))
import utils
import play_numbers_utils as pu


def main():
    print(pu.menu_design())
    option = utils.get_number_between("Digite a opção desejada: ",0,1,"Você só pode escolher a opção [1] ou [0].")

    while option != 0:
        if option == 1:
            print(pu.mini_menu_one())
            segund_option = utils.get_number_between("Digite a opção desejada: ",1,3)
            if segund_option == 1:
                size = int(input("Informe o tamanho da lista: "))
                min = int(input("Informe o valor mínimo: "))
                max = int(input("Informe o valor máximo: "))
                values = pu.random_list(size, min, max)
            elif segund_option == 2:
                size = utils.get_positive_number("Informe o tamanho da lista: ")
                values = pu.get_list(size)
            else:
                file_name = input("Informe o nome do arquivo: ")
                values = utils.my_map(lambda a : float(a), utils.open_file(file_name))
                print("Dados carregados com sucesso!")
            
        elif option == 2:
            print(pu.exibition(values))
        elif option == 3:
            new_value = float(input("Informe o novo valor: "))
            values = utils.my_map(lambda a : new_value,values)
        elif option == 4:
            size_list = len(values)
            print(f"A lista possui {size_list} elementos.")
        elif option == 5:
            min_value = utils.my_reduce(lambda a, b : a if a < b else b, values, values[0])
            min_index = utils.binary_search(min_value,values)
            max_value = utils.my_reduce(lambda a, b : a if a > b else b, values, values[0])
            max_index = utils.binary_search(max_value,values)
            print(f"O menor valor é [{min_value}] e está na posição [{min_index}].")
            print(f"O maior valor é [{max_value}] e está na posição [{max_index}].")
        elif option == 6:
            sum = utils.my_reduce(lambda a,b : a+b,values,0)
            print(f"A soma dos elementos é: [{sum}]")
        elif option == 7:
            sum = utils.my_reduce(lambda a, b : a+b, values, 0)
            media = sum / len(values)
            print(f"A média dos elementos é: [{media}]")
        elif option == 8:
            positive_values = utils.my_filter(lambda a: a > 0, values)
            quantity = len(positive_values)
            print(pu.exibition(positive_values))
            print(f"A quantidade de valores positivos é: [{quantity}]")
        elif option == 9:
            negative_values = utils.my_filter(lambda a: a < 0, values)
            quantity = len(negative_values)
            print(pu.exibition(negative_values))
            print(f"A quantidade de valores negativos é: [{quantity}]")
        elif option == 10:
            print(pu.mini_menu_ten())
            third_option = utils.get_number_between("Digite a opção desejada: ", 1, 6)
            if third_option == 1:
                multiplied_value = float(input("Informe o valor a ser multiplicado: "))
                values = utils.my_map(lambda a: a * multiplied_value, values)
                print("Valores alterados com sucesso!")
            elif third_option == 2:
                exponent = float(input("Informe o valor do expoente: "))
                values = utils.my_map(lambda a: a ** exponent, values)
                print("Valores alterados com sucesso!")
            elif third_option == 3:
                fraction = float(input("Informe o valor da fração: "))
                values = utils.my_map(lambda a: a / fraction, values)
                print("Valores alterados com sucesso!")
            elif third_option == 4:
                min = int(input("Informe o valor mínimo do número aleatório: "))
                max = int(input("Informe o valor máximo do número aleatório: "))
                values = utils.my_map(lambda a: float(randint(min,max)) if a < 0 else a, values)
                print("Valores alterados com sucesso!")
            elif third_option == 5:
                print(pu.ordenation_menu())
                ordenation_type = utils.get_number_between("Informe o tipo de ordenação: ",1,2)
                values = utils.ordenar(values,reverse = True if ordenation_type == 2 else False)
                print("Valores ordenados com sucesso!")
            else :
                values = pu.shuffle(values)
                print("Valores embaralhados com sucesso!")
        elif option == 11:
            #modicicar isso para que n valores sejam adicionados 
            amount = int(input("Informe a quantidade de valores a serem adicionados: "))
            for i in range(amount):
                new_value = float(input("Informe o novo valor: "))
                values.append(new_value)
                print("Novo valor adicionado com sucesso!")
        elif option == 12:
            removed_value = float(input("Informe o valor a ser removido: "))
            values = utils.my_filter(lambda a: a != removed_value,values)
        elif option == 13:
            position = int(input("Informe a posição do valor a ser removido: "))
            values = utils.my_filter(lambda a: utils.linear_search(a) != position,values)
            print("Valor removido com sucesso!")
        elif option == 14:
            position = utils.get_number_between("Informe a posição do valor a ser editado: ",0,None) - 1
            new_value = float(input("Informe o novo valor: "))
            values[position] = new_value
            print("Valor editado com sucesso!")
        elif option == 15:
            file_name = 'play_numbers.txt'#input("Informe o nome do arquivo: ")
            utils.save_file(file_name, values)
            print("Arquivo salvo com sucesso!")
        file_name = 'play_numbers.txt'
        utils.save_file(file_name, values)
        print(pu.menu_design())
        option = utils.get_number_between("Digite a opção desejada: ", 0, 15)
        print(pu.line())

    print("Programa finalizado!")
    print("Obrigado por usar o programa!")
    

main()