#!/bin/bash

# In Bash and other Linux shells, when a program is executed, it uses three standard I/O streams. Each stream is represented by a numeric file descriptor:
# 0 - stdin, the standard input stream.
# 1 - stdout, the standard output stream.
# 2 - stderr, the standard error stream.

# The below commands redirect the standard output to result file.
date > result.txt
date 1> result.txt

# The below command redirect the standard error to error file.
du -ch /snaps/ 2> error.txt

# The below command redirect the standard output to result file and standard error to error file.
find / -name "*.conf" 1> result.txt 2> error.txt


# The below commands and FUNDCTIONALLY equal.Both redirect standard output and standard error to result file. 
grep -R foo /etc/ &> result.txt # Standard output and standard error are merged and redirected to the result file. &> is a shorthand 2>&1 >
grep -R foo /etc/ > result.txt 2>&1 # Redirects standard output to the result file, then redirects standard error to the same file as standard output using the "2>&1" operator.

# Warning: The order of redirection is important. 
#The below command redirects standard error to standard output and then redirects standard output to result.
# This mean that standard output is empty, and only error messages will be redirected to the file.
grep -R foo /etc/ 2>&1 > result.txt

# The below example supress both standard output and standard error by redirecting to /dev/null.
# /dev/null is like a black hole and used to discard forever the standard output/standard error.
grep -R foo /etc/ &> /dev/null
