#!/bin/bash

FILE="/etc/shadow"

# if condition
if [ -e "$FILE" ]
then
  echo "Shadow passwords are enabled."
fi

#-------------------------------------------------------------------------------------------------------------------------------------------------------------

# if - else condition
if [ -w "$FILE" ]
then
  echo "You have permissions to edit ${FILE}."  
else
  echo "You do NOT have permissions to edit ${FILE}."
fi

#-------------------------------------------------------------------------------------------------------------------------------------------------------------

read -rp "Enter a number: " num

# if - elseif - else condition
if [[ $num -lt 0 ]]; then
     echo "Not a valid positive number input"
elif [[ $num -gt 1 && $num -lt 10 ]]; then
     echo "Valid 1 digit number entered"
elif [[ $num -gt 9 && $num -lt 100 ]]; then
     echo "Valid 2 digit number entered"
elif [[ $num -gt 100 ]]; then
     echo "Valid 3 digit or more number entered"
else
    echo "Number equal to zero"
fi
