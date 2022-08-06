"""
Lists and methods
Methods:
-append
-remove
-pop
-sort
-reverse
-------------------
Functions:
-len()
-min()
-max()
----------------------
-Slicing
-Indexes
"""

myList = [1, 4, 62, 878];

# add element at the end of list
myList.append(1000);
print(myList);

# remove last element
myList.pop();
print(myList);

# remove specific element of list
myList.remove(62);
print(myList);

# For sort method all elements of the list must be the same type
newListNumbers = [1, 45, 2, 900, 10, 34, 12];
newListNumbers.sort();
print(newListNumbers);

newListLetters = ['g', 'a', 'b', 'q', 'm', 'n',  'o'];
newListLetters.sort();
print(newListLetters);

#---------------------------------------------------------------------------------------------------
# Reverse the elements order of the list
# below example will return [900, 2, 45, 1] 
newList = [1, 45, 2, 900];
newList.reverse();
print(newList);

# Return the length of the list
print(len(newListNumbers));
print(len(newListLetters));

# Return the min element of the list. All elements of the list must be the same type.
print(min(newListNumbers));
print(min(newListLetters));

# Return the max element of the list. All elements of the list must be the same type.
print(max(newListNumbers));
print(max(newListLetters));

#-------------------------------------------------------------------------------------------------------

anotherList = [1, 5, 2, 90, 30, 45, 100, 56, 1000];
#indexes. Will print nth + 1 element of the list. List start counting from zero.
print(anotherList[3]);

#slicing. Will print evething between index[3] to just below index[6]. [90, 30, 45] in this example.
print(anotherList[3:6]);
