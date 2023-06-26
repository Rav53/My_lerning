#  Даны два произвольные списка. 
#  Удалите из первого списка элементы присутствующие во втором списке.

# my_list_1 = [2, 5, 8, 2, 12, 12, 4]
# my_list_2 = [2, 7, 12, 3]
# for i in my_list_2:
#        while i in my_list_1:
#               my_list_1.remove(i)
# print(my_list_1)

my_list_1 = [2, 5, 8, 2, 12, 12, 4]
my_list_2 = [2, 7, 12, 3]
i = 0
while i < len(my_list_1):
    if my_list_1[i] in my_list_2:
            my_list_1.remove(my_list_1[i])
    else:
        i += 1      
print(my_list_1)

