<?php

/**
 * Inheritance is a technique of acquiring the properties of another class having features in common.
 * It allows us to increase the reusability and reduce the duplication of code.
 * It is also known as a child-parent relationship, where a child inherits the properties of its parent.
 * This is the reason it is called ‘is-a relationship’ where the child is-a type of parent.
 */

declare(strict_types = 1);

namespace OOP\Principles\Basic\Inheritance;

// A class which is inherited from is called base, super or parent class
// might be defined abstract if its instantiation is forbidden
class Person 
{
    public function __construct(private string $name) {}

    public function introduceYourself()
    {
        return "My name is $this->name.";
    }
}

// A class which inherits from another one is called a subclass, derived class or a child class.
// A student inherits person's features.
class Student extends Person 
{
    public function __construct(string $name, private int $grade)
    {
        parent::__construct(name: $name);
    }

    public function introduceYourself()
    {
        return parent::introduceYourself() . " I am in $this->grade grade."; // code reuse is possible
    }
}

// A teacher also inherits person's features.
class Teacher extends Person 
{
    public function __construct(string $name, private string $subject)
    {
        parent::__construct(name: $name);
    }

    public function introduceYourself()
    {
        return parent::introduceYourself() . " I teach $this->subject.";
    }
}

// Usage is identical as in without-inheritance.php:
echo 'Student:' . PHP_EOL;
$student = new Student(name: 'Tom', grade: 10);
echo $student->introduceYourself() . PHP_EOL;

echo 'Teacher:' . PHP_EOL;
$teacher = new Teacher(name: 'Lilith', subject: 'science');
echo $teacher->introduceYourself() . PHP_EOL;
