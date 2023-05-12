matrix = [
    [1, 2, 0, 8, 0],
    [0, 1, 1, 1, 0],
    [0, 1, 3, 1, 7],
    [3, 1, 1, 1, 0],
    [0, 0, 2, 0, 1]
]


def sum_matrix_layer(my_matrix, start, end):
    layer_sum = 0
    for i in range(start, end+1):
        if i == start or i == end:
            layer_sum += sum(my_matrix[i])
            print(f"adding whole row for: {sum(my_matrix[i])}")
        else:
            layer_sum += sum_partial_array(my_matrix[i], start, end)
            print(
                f"adding half row for: {sum_partial_array(my_matrix[i], start, end)}")
    return layer_sum


def sum_partial_array(array, left_side, right_side):
    return array[left_side] + array[right_side]


print(sum_matrix_layer(matrix, 1, 3))
