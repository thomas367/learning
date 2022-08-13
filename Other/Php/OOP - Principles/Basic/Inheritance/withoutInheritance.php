<?php

class Student
{
    public function __construct(private string $name, private int $grade) {}

    public function introduceYourself()
    {
        return "My name is $this->name. I am in $this->grade grade.";
    }
}

class Teacher
{
    // name property duplication
    public function __construct(private string $name, private string $subject) {} 

    // partly code duplication
    public function introduceYourself()
    {
        return "My name is $this->name. I teach $this->subject." ; 
    }
}

echo 'Student:' . PHP_EOL;
$student = new Student('Tom', 10);
echo $student->introduceYourself() . PHP_EOL;

echo 'Teacher:' . PHP_EOL;
$teacher = new Teacher('Lilith', 'science');
echo $teacher->introduceYourself() . PHP_EOL;
