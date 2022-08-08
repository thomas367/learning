#Executing code a certain number of times
count = 1;
for num in range(3):
    count *= 2;
    print(num);
    print("Count: {}".format(count));


#Iterating through datasets (e.g. lists)
myList = [1, 2, 3, 4, 5, 6];
for element in myList:
    print(element);

#-------------------------------------------------------------------
print('----------------------- Continue & break -----------------------------------');
"""
Break:
It terminates the current working loop and passes the control to the next statement,
and if the break statement resides inside the nested loop, it passes control to the outer loop.
It can be used with both while and for loops. 

Continue: 
It is the second form of the Loop Control Statement, very similar to the break statement.
But when it comes to the working of the continue statement, it works just opposite to the break statement.
Instead of terminating certain conditions, it jumps off to the very next condition.
But it will continue the execution of the loop statement as per its name. 
"""

#Continue
fruitsList = ['apple', 'banana', 'pear', 'moldy banana', 'cherry'];
for fruit in fruitsList:
    if fruit == 'moldy banana':
        continue;
    else:
        print(fruit);
print('Loop stopped. Moldy banana found');

#Break
for fruit in fruitsList:
    if fruit == 'moldy banana':
        break;
    else:
        print(fruit);
print('Loop stopped. Moldy banana found');



#---------------------------------------------------------------------------------------------------------------------------------------
print('------------------------------------------------ While loop -------------------------------------------------------------');

num = 0;
while num < 10:
    print('working');
    num += 1;
