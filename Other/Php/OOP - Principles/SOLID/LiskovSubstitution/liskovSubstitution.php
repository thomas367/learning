<?php

/**
 * LSP - Liskov’s Substitution Principle
 * 
 * Objects in a program should be replaceable with instances of their subtypes 
 * without altering the correctness of that program.
 */

interface Audible
{
    function makeSound();
}

abstract class Flyable
{
    public function fly()
    {
        echo 'It can fly.' . PHP_EOL;
    }
}

class Duck extends Flyable implements Audible
{
    public function makeSound()
    {
        echo 'Quack!' . PHP_EOL;
    }
}

// Requires only implementation of a method that makes sense
class Ostrich implements Audible
{
    public function makeSound()
    {
        echo 'Boom or hiss.' . PHP_EOL;
    }
}

// Requires only implementation of a method that makes sense
class Hummingbird extends Flyable 
{
    // In this particular case the method has been reimplemented
    public function fly() 
    {
        echo 'A hummingbird can fly in all directions, including backwards and upside down!' . PHP_EOL;
    }
}

class BirdWatcher
{
    // Accepts only objects able to implement fly() method
    public function watchFlying(Flyable $bird) 
    {
        $bird->fly();
    }

    // Accepts only objects able to implement makeSound() method
    public function listen(Audible $bird) 
    {
        $bird->makeSound();
    }
}

$birdWatcher = new BirdWatcher();

$duck = new Duck();
$ostrich = new Ostrich();
$hummingbird = new Hummingbird();

$birdWatcher->watchFlying($duck);
// Static analysis - "Expected parameter of type 'Flyable', 'Ostrich' provided":
// $birdWatcher->watchFlying($ostrich);
$birdWatcher->watchFlying($hummingbird);

$birdWatcher->listen($duck);
$birdWatcher->listen($ostrich);
// Static analysis - "Expected parameter of type 'Audible', 'Hummingbird' provided":
// $birdWatcher->listen($hummingbird);
