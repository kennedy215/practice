# def find_last(search,target):
#     last_position = -1
#     while True:
#         position = search.find(target,last_position +1)
#         if position == -1:
#             return last_position
#         last_position = position
#
#
#
# print find_last('aaaa','a')

# def weekend(day):
#    if day == ("Saturday" or "Sunday"):
#        return True
#    else:
#        return False
#
# def weekend(day):
#     if day == 'Saturday' or day == 'Sunday':
#         return True
#     else:
#         return False
# #
# #
# #
# print weekend('Monday')
# #>>> False
#
# print weekend('Saturday')
# #>>> True
#
# print weekend('Sunday')
# #>>> True
#
# print weekend('July')
#>>> False

# def find_second(search,target):
#     first = search.find(target)
#     second = search.find(target, first + 1)
#     return second

# def stamps(int):
#     a = 5
#     b = 2
#     c = 1
#
#     count = 0
#     while int % 5 == 0


# def stamps(int):
#     a, remainder = int/5, int%5
#     b, c = remainder/2, remainder%2
#     return a, b, c
#
#
# print(stamps(381))


# def set_range(a,b,c):
#     max_number = max(a,b,c)
#     min_number = min(a,b,c)
#
#     return max_number - min_number
#
# print set_range(10, 4, 7)
# #>>> 6  # since 10 - 4 = 6
#
# print set_range(1.1, 7.4, 18.7)
# #>>> 17.6 # since 18.7 - 1.1 = 17.6


# def fix_machine(debris, product):
#     runs = len(product)
#     while runs > 0:
#         check = debris.find(product[runs-1])
#         if check == -1:
#             return "Give me something that's not useless next time."
#         runs = runs - 1
#     return product
#
#
# ### TEST CASES ###
# print "Test case 1: ", fix_machine('UdaciousUdacitee', 'Udacity') == "Give me something that's not useless next time."
# print "Test case 2: ", fix_machine('buy me dat Unicorn', 'Udacity') == 'Udacity'
# print "Test case 3: ", fix_machine('AEIOU and sometimes y... c', 'Udacity') == 'Udacity'
# print "Test case 4: ", fix_machine('wsx0-=mttrhix', 't-shirt') == 't-shirt'


def nextDay(year,month,day):
    if day < 30:
        return year, month, day + 1
    else:
        if month < 12:
            return year, month + 1, 1
        else:
            return year + 1, 1, 1

### For example:
print nextDay(1999, 12, 30) #=> (2000, 1, 1)
print nextDay(2013, 1, 30) #=> (2013, 2, 1)
print nextDay(2012, 12, 30) #=> (2013, 1, 1)  (even though December really has 31 days)
###
