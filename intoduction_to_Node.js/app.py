def sum(*args):
    sum = 0

    for arg in args:
        sum += arg

    return sum


total = sum(1, 2, 3)
print(total)