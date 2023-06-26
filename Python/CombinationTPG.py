import itertools 
numbers = [3, 4, 5, 6, 8, 9, 10]
combinations = [] 
for i in range(1, len(numbers) + 1): 
    for combination in itertools.combinations_with_replacement(numbers, i): 
        if sum(combination) == 16: 
            if combination not in combinations: combinations.append(combination) 
for combination in combinations: 
    print(combination)