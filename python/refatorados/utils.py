#não sei se faz muito sentido adicionar criteio aqui, mas vamos ver né
def my_filter(func,values,criterio = lambda a:a):
    filtered_values = []
    for i in values:
        if func(criterio(i)):
            filtered_values.append(i)
    return filtered_values


def get_number_between(text,min, max,invalid_text = "Número inválido"):
    number = int(input(text))
    while number < min or number > max:
        print(invalid_text)
        number = int(input(text))
    return number

def get_positive_number(text, invalid_text = "Número inválido"):
    number = int(input(text))
    while number < 0:
        print(invalid_text)
        number = int(input(text))
    return number

def bubble_sort(values,criterio = lambda a: a,reverse = False):
    for i in range(len(values)):
        for j in range(len(values) - 1 - i):
            if (criterio(values[j]) < criterio(values[j + 1]) if reverse else criterio(values[j]) > criterio(values[j + 1])):
                values[j], values[j + 1] = values[j + 1], values[j]

def ordenar(values, criterio = lambda a: a, reverse = False):
    values_copy = values[:]
    bubble_sort(values_copy, criterio, reverse)
    return values_copy

def open_file(file_name):
    file = open(file_name, "r")    
    words = []
    for line in file:
        words.append(line.strip())
    return words

def save_file(file_name,values):
    file = open(file_name, "w")
    for i in values:
        file.write(f"{i}\n")


def my_map(func, values):
    new_values = []
    for i in values:
        new_values.append(func(i))
    return new_values

def my_reduce(func, values, initial_value = 0):
    result = initial_value
    for i in values:
        result = func(result, i)
    return result

def binary_search(value,array,criterio = lambda a:a):
    left = 0
    right = len(array) - 1
    while left <= right:
        mid = (left + right) // 2
        if criterio(array[mid]) == criterio(value):
            return mid
        elif criterio(criterio(array[mid])) < criterio(value):
            left = mid + 1
        else:
            right = mid - 1
    return -1

def linear_search(value,array):
    values_copy = array[:]
    for i in values_copy:
        if values_copy[i] == value:
            return i
    return -1
