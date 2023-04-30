#!/bin/bash

# There are five basic operators in bash/shell scripting:

# Arithmetic Operators
# Relational Operators
# Boolean Operators
# String  Operators
# File Test Operators
#-------------------------------------------------------------------------------------------------------------------------------------------------------------

# Arithmetic Operators (+, -, *, /, %, =, ==, !=)
# Bourne shell didn't originally have any mechanism to perform simple arithmetic operations but it uses external programs, like expr.

var1=40
var2=20

# + (Addition Operator)
echo "Total value: $(expr $var1 + $var2)" # Result 60

# - (Subtraction)
echo "Total value: $(expr $var1 - $var2)" # Result 40

# * (Multiplication)
echo "Total value: $(expr $var1 \* $var2)" # Result 800

# / (Division)
echo "Total value: $(expr $var1 / $var2)" # Result 2

# % (Modulus)
echo "Total value: $(expr $var1 % $var2)" # Result 0

# = (Assignment)
# We already implement this with the a and b variables.

# == (Equality)
[ $var1 == $var2 ]; echo "$?" # Result 1 -> False

# != (Not Equality)
[ $var1 != $var2 ]; echo "$?" # Result 0 -> True

# Note: In bash, 0 (which really means no error) means TRUE, non-zero (such as 1) means there was some error, aka FALSE.

#-------------------------------------------------------------------------------------------------------------------------------------------------------------

# Relational Operators (-eq, -ne, -gt, -lt, -ge, -le)
# The below relational operators that are specific to numeric values. These operators do not work for string values unless their value is numeric.
# Eg. these operators will work to check a relation between 10 and 20 as well as in between "10" and "20" but not in between "ten" and "twenty".

var3=20
var4=10

# -eq (Equality)
[ $var3 -eq $var4 ]; echo "$?" # Result 1 -> False

# -ne (Not Equality)
[ $var3 -ne $var4 ]; echo "$?" # Result 0 -> True

# -gt (Greater than)
[ $var3 -gt $var4 ]; echo "$?" # Result 0 -> True

# -lt (Less than)
[ $var3 -lt $var4 ]; echo "$?" # Result 1 -> False

# -ge (Greater than or equal)
[ $var3 -ge $var4 ]; echo "$?" # Result 0 -> True

# -le (Less than or equal)
[ $var3 -le $var4 ]; echo "$?" # Result 1 -> False

#-------------------------------------------------------------------------------------------------------------------------------------------------------------

# Boolean Operators (!, ||, &&)

var5=10
var6=5

# ! (Logical Negation)
# [! condition ];

# -o (Logical OR)
[ "$var5" -lt 20 ] || [ "$var6" -gt 100 ]; echo "$?" # Result 0 -> True

# -a (Logical AND)
[ "$var5" -lt 20 ] && [ "$var6" -gt 100 ]; echo "$?" # Result 1 -> False

#-------------------------------------------------------------------------------------------------------------------------------------------------------------

# String  Operators (=, !=, -z, -n, str)

var7="abc"
var8="def"

# = (Equality)
[ $var7 = $var8 ]; echo "$?" # Result 1 -> False

# != (Not Equality)
[ $var7 != $var8 ]; echo "$?" # Result 0 -> True

# -z (Zero length string)
[ -z $var8 ]; echo "$?" # Result 1 -> False (If str length is = 0 return true otherwise return false)

# -n (Non-zero length string)
[[ -n $var8 ]]; echo "$?" # Result 0 -> True  (If str length is > 0 return true otherwise return false)

# str (Not Empty String)
[ $var7 ]; echo "$?" # Result 0 -> True (If str is not empty string return true otherwise return false.)

#-------------------------------------------------------------------------------------------------------------------------------------------------------------

# File Test Operators (-b, -c, -d, -f, -g, -k, -p, -t, -u, -r, -w, -x, -s, -e)

# -b (Block Special File)	
# [ -b $file ] # If yes returns true, otherwise false.

# -c (Character Special File)	
# [ -c $file ] # If yes returns true, otherwise false.

# -d (Is Directory)	
# [ -d $file ] # If yes returns true, otherwise false.

# -f (Is File)
# [ -f $file ] # If yes returns true, otherwise false.

# -g (File has set group ID (SGID) bit set)	
# [ -g $file ]  # If yes returns true, otherwise false.

# -k (File has sticky bit set)	
# [ -k $file ] # If yes returns true, otherwise false.

# -p (File is a named pipe)
# [ -p $file ] # If yes returns true, otherwise false.

# -t (File descriptor is open and associated with a terminal)
# [ -t $file ] # If yes returns true, otherwise false.

# -u (File has its Set User ID (SUID) bit set)
# [ -u $file ] # If yes returns true, otherwise false.

# -r (File is readable)	
# [ -r $file ] # If yes returns true, otherwise false.

# -w (File is writable)	
# [ -w $file ] # If yes returns true, otherwise false.

# -x (File is executable)	
# [ -x $file ] # If yes returns true, otherwise false.

# -s (File size greater than zero)	
# [ -s $file ] # If yes returns true, otherwise false.

# -e (File exists)
# [ -e $file ] # If yes returns true, otherwise false.
