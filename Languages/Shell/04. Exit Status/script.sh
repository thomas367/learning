#!/bin/bash

# Every Linux or Unix command executed by the shell script or user has an exit status. 
# Exit status is an integer number. 0 exit status means the command was successful without any errors. 
# A non-zero (1-255 values) exit status means command was a failure.

# We can use exit statuses in our scripts too.

# Exit Codes With Special Meanings
# ------------------------------------------------
# Exit status	|     Description
# 1	            | Catchall for general errors
# 2	            | Misuse of shell builtins (according to Bash documentation)
# 126	        | Command invoked cannot execute
# 127	        | Command not found
# 128	        | Invalid argument to exit command
# 128+n	        | Fatal error signal “n”
# 130	        | Bash script terminated by Control-C
# 255*	        | Exit status out of range


#  Below are some examples with the use of the exit status


# echo "This script exits with status 0"
# exit 0


#-------------------------------------------------

# echo "There was an error...."
# exit 1
