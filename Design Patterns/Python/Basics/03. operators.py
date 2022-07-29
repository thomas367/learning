"""
Operators: + - / * ** %
Comparison: > < >= <= == !=
Logical Operators: and or
"""
# operators
addOne = 2 + 3; # 5
addTwo = 'hi' + ' skynet'; # 'hi skynet'
sub = 10 - 8; # 2
divOne = 10 / 5; # 2.0
divTwo = int(10 / 5); # 2
multi = 10 * 9; # 90
power = 10 ** 3; # 1000
modulus = 10 % 3; # 1

# comparison
10 > 20; # false
10 > 5; # true
10 < 500; #true
11 <= 11; #true
10 >= 9; #true
10 == 10; #true
10 != 9; #true

# logical operators
10 < 20 and 30 > 19; # true
10 < 20 and 30 > 40; # false
10 < 20 or 30 > 40; # true
