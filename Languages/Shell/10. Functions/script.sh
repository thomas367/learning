#!/bin/bash

# In shell scripting, a function is a block of code that performs a specific task, just like in other programming languages. 
# No need for more explanation. I guess :P

myGlobalVar="Hello, world!"

function my_function {
  local myLocalVar=$1
  echo "$myLocalVar"
}

my_function "Goodbye, world!"
echo "$myGlobalVar"
