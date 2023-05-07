#!/bin/bash

# Wildcard characters are used to define the pattern for searching or matching text on string data in the bash shell.
# Another common use of wildcard characters is to create regular expressions.

# The main wildcards are:

# Asterisk (*) - This wildcard represents zero or more characters of a filename or string.
# Question mark (?) - This wildcard represents a single character of a filename or string.
# Bracket expressions ([ ]) - This wildcard matches any single character that is enclosed within the brackets.
# Negation (!) - This wildcard matches any character that is not included in a bracket expression.
# Curly braces ({ }) - This is not technically a wildcard, but a shell expansion feature that allows you to generate multiple strings based on a pattern.

ls ./*.txt # List all the files of the current directory that have a .txt file extension.

ls ./????.* # Lists all files in the current directory that have a four-letter name with any file extension.

ls ./[a-z].txt # Lists all files in the current directory that have a lower case letter name that have a .txt file extension.

ls ./file{1,2,3}????.txt # Lists all files in the current directory that have a name file followed by the number in brackets that have a .txt file extension.
