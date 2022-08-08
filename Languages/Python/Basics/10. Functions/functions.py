"""
Functions
DRY - Dont Repeat Yourself
"""

def successMessageFunc():
    print('You found the secret number. Here is your prize.');

def failMessageFunc():
    print('You failed. You just lost the souvlaki');

myTry = int(input('Guess the secret number. Hind its between 1 and 3: '));
secretNum = 2;

if myTry == secretNum:
    successMessageFunc();
else:
    failMessageFunc();

#----------------------------------------------------------------------------------------------
print('------------------------------ Functions with params ----------------------------------');

def addition(num1, num2):
    return (num1 + num2);


num1 = int(input('Enter first number: '));
num2 = int(input('Enter second number: '));
print('Result: ', addition(num1, num2));


#--------------------------------------------------------------------------------------------------
print('------------------------------ Recursive funstions ----------------------------------------');

# Functions that call themselfs

# Python program to display the Fibonacci sequence
nterms = int(input('Enter a number to get the first digits of fibo seq: '));
def fibonacci(n):
   if n <= 1:
       return n;
   else:
       return (fibonacci(n-1) + fibonacci(n-2));

# check if the number of terms is valid
if nterms <= 0:
   print('Plese enter a positive integer');
else:
   print('Fibonacci sequence:');
   for i in range(nterms):
       print(fibonacci(i));


# Factorial of a number using recursion
fact = int(input('Enter a number to find its factorial: '));
def factorial(n):
   if n == 1:
       return n;
   else:
       return n * factorial(n-1);

# check if the number is negative
if fact < 0:
   print('Sorry, factorial does not exist for negative numbers');
elif fact == 0:
   print('The factorial of 0 is 1');
else:
   print('The factorial of ', fact, 'is: ', factorial(fact));
