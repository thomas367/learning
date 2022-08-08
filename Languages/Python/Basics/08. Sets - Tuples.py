"""
Tuples - ()
Sets - {}
"""
# Tuple is a collection of values separated by comma and enclosed in parenthesis.
# Unlike lists, tuples are immutable. The immutability can be considered as the identifying feature of tuples.
myTuple = (1, 2, 3, 4, 5);
print(myTuple[1]); # prints 2

# Set is an unordered collection of distinct immutable objects. A set contains unique elements.
# Although sets are mutable, the elements of sets must be immutable. There is no order associated
# with the elements of a set. Thus, it does not support indexing or slicing like we do with lists.
mySet = {22, 22, 1, 2, 3, 5, 5, 5, 5, 5, 'tiger', 'tiger', 'tiger'};
print(mySet);
