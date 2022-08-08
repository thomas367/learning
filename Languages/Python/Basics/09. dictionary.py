"""
- Basic dictionaries
- Accessing a value
- Accessing all key:value pairs
- Print all values
- Changing a value
- Adding a key:value pair
- Removing a key:value pair
"""
myDict = {'John':30, 'Jethro':32, 'Rambo':27, 'Jennifer':29, 'Fiona':29};

# Accessing a value
print(myDict['Fiona']); # prints 29
print('-------------------------------------------------');

# Accessing all key value pairs
for pair in myDict:
    print(pair); # print all keys
print('-------------------------------------------------');
for pair in myDict:
    print(myDict[pair]); # print all values
print('-------------------------------------------------');

# Changing a value
myDict['John'] = 31;
print(myDict); # John is 31 now. Too bad for John
print('--------------------------------------------------');

# Adding new key value pair
myDict['Shanks'] = 46;
print(myDict); # Shanks joined our dict
print('--------------------------------------------------');

# Removing a key value pair
myDict.pop('Rambo');
print(myDict); #Rambo left our dict and went to  hollywood
