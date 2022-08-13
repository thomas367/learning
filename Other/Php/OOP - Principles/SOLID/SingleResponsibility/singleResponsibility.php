<?php

/**
 * SRP - Single Responsibility Principle
 *
 * A class should have only a single responsibility and we only have one reason
 * to change or modify it’s class. If we have another reason to change class then
 * we need to split into different class.
 */

class StudentService
{
    public function insertStudent(Student student)
    {
        // insert student
    }

    public function updateStudent(Student student)
    {
        // update student
    }

    public function deleteStudent(Student student)
    {
        // delete student
    }
}

class CourseService
{

    public function insertCourse(Course course)
    {
        // insert course
    }

    public function updateCourse(Course course)
    {
        // update course
    }

    public function deleteCourse(Course course)
    {
        // delete course
    }
}

