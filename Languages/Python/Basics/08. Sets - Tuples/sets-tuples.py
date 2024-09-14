"""
Tuples - ()
Methods:
-count
-index
-------------------
Sets - {}
Methods:
-add
-clear
-copy
-difference
-difference_update 
-discard
-intersection
-intersection_update
-isdisjoint
-issubset
-issuperset
-pop
-remove
-symmetric_difference
-symmetric_difference_update
-union
-update
"""
# Tuple is a collection of values separated by comma and enclosed in parenthesis.
# Unlike lists, tuples are immutable. The immutability can be considered as the identifying feature of tuples.
myTuple = (1, 2, 3, 4, 5);
print(myTuple[1]); # prints 2

# Returns the amount of time the given element exists in tuple
print(myTuple.count(1)); # prints 1 cause exists one time in tuple
print(myTuple.count(7)); # prints 0 cause not exists in tuple

# Return the index position of given element inside tuple
print(myTuple.index(3)); # prints 2 cause the given element is third in tuple
# print(myTuple.index(7)); Raises ValueError: tuple.index(x): x not in tuple

#---------------------------------------------------------------------------------------------------
# Set is an unordered collection of distinct immutable objects. A set contains unique elements.
# Although sets are mutable, the elements of sets must be immutable. There is no order associated
# with the elements of a set. Thus, it does not support indexing or slicing like we do with lists.
mySet = {1, 2, 3, 5, 22, 'tiger'};
print(mySet); # {'tiger', 1, 2, 3, 5, 22}

# Adds an element to set
mySet.add(7);
print(mySet); # {'tiger', 1, 2, 3, 5, 22, 7}

# removes all elements from set
anotherSet = {1, 2, 3, 4, 5};
anotherSet.clear();
print(anotherSet); # set()

# Returns a shallow copy of the set.
s1 = {1,2,3};
s1_copy = s1.copy();
print(s1_copy);  # {1, 2, 3}

# Returns the difference of two or more sets.
s2 = {1, 2, 3, 4};
s3 = {3, 4, 5};
print(s2.difference(s3));  # {1, 2}

# Removes elements found in other sets from the original set.
s4 = {1, 2, 3, 4};
s5 = {3, 4, 5};
s4.difference_update(s5);
print(s4);  # {1, 2}

# Removes an element from the set if present, no error if it doesn't exist.
s = {1, 2, 3};
s.discard(2);
print(s);  # {1, 3}

# Returns the intersection of two or more sets.
s6 = {1, 2, 3};
s7 = {2, 3, 4};
print(s6.intersection(s7));  # {2, 3}

# Updates the set with the intersection of itself and others.
s8 = {1, 2, 3};
s9 = {2, 3, 4};
s8.intersection_update(s9);
print(s9);  # {2, 3, 4}

# Returns True if sets have no elements in common.
s10 = {1, 2, 3};
s11 = {4, 5};
print(s10.isdisjoint(s11));  # True

# Returns True if the set is a subset of another set.
s12 = {1, 2};
s13 = {1, 2, 3};
print(s12.issubset(s13));  # True

# Returns True if the set is a superset of another set.
s14 = {1, 2, 3};
s15 = {1, 2};
print(s14.issuperset(s15));  # True

# Removes and returns an arbitrary element from the set.
s16 = {1, 2, 3};
element = s16.pop();
print(element);  # (an arbitrary element like 1, 2, or 3)

# Removes an element from the set, raises an error if it doesn't exist.
s17 = {1, 2, 3};
s17.remove(2);
print(s);  # {1, 3}

# Returns the symmetric difference of two sets (elements in either set, but not both).
s18 = {1, 2, 3};
s19 = {3, 4, 5};
print(s18.symmetric_difference(s19));  # {1, 2, 4, 5}

# Updates the set with the symmetric difference of itself and another set.
s20 = {1, 2, 3};
s21 = {3, 4, 5};
s20.symmetric_difference_update(s21);
print(s20);  # {1, 2, 4, 5}

# Returns the union of two or more sets (all elements from both sets).
s22 = {1, 2, 3};
s23 = {3, 4, 5};
print(s22.union(s23));  # {1, 2, 3, 4, 5}

# Updates the set with the union of itself and others.
s24 = {1, 2, 3};
s25 = {3, 4, 5};
s24.update(s25);
print(s24);  # {1, 2, 3, 4, 5}
