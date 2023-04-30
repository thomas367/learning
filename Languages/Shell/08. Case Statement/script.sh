#!/bin/bash

# a simple switch - case statetent

fruit="orange"

case $fruit in
  "apple")
    echo "This is an apple"
    ;;
  "banana")
    echo "This is a banana"
    ;;
  "orange")
    echo "This is an orange"
    ;;
  "grape")
    echo "This is a grape"
    ;;
  *)
    echo "Unknown fruit"
    ;;
esac

echo "End of program"

# Note: the *) and ;; characters in switch case have special meaning
# ;; is like break in other programming languages
# *) is equal to default

#-------------------------------------------------------------------------------------------------------------------------------------------------------------

# a switch - case statement with select loop

options=("option1" "option2" "option3" "quit")

select opt in "${options[@]}"; do
    case $opt in
        "option1")
            echo "You selected Option 1"
            ;;
        "option2")
            echo "You selected Option 2"
            ;;
        "option3")
            echo "You selected Option 3"
            ;;
        "quit")
            echo "Goodbye!"
            break
            ;;
        *)
            echo "Invalid option"
            ;;
    esac
done
