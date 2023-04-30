#!/bin/bash

# for loop examples

# for loop 1st form
for ANIMAL in bear tiger dog cat
do
  echo "Animal: $ANIMAL" # print the animal list
done

# for loop 2nd form
array=("bear" "tiger" "dog" "cat")
for element in "${array[@]}"
do
  echo "Animal: $element" # print the animal list
done

# Note: The array can also be writen as array=(bear tiger dog cat).
# It's recommended to enclose array elements in double quotes to avoid issues with spaces and special characters.

#-------------------------------------------------------------------------------------------------------------------------------------------------------------

# while loop example

count=0

while [ $count -lt 5 ]
do
  echo $count # print the numbers 0 1 2 3 4
  count=$((count+1))
done

#-------------------------------------------------------------------------------------------------------------------------------------------------------------

# until loop example

num=0

until [ $num -ge 5 ]
do
  echo $num # print the numbers 0 1 2 3 4
  num=$((num+1))
done

#-------------------------------------------------------------------------------------------------------------------------------------------------------------

# select loop example
# select loop requires switch - case so there will be an example in that script.
