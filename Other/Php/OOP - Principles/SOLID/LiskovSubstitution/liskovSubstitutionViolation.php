<?php

abstract class Bird
{
    abstract public function makeSound();

    public function fly()
    {
        echo 'It can fly.' . PHP_EOL;
    }
}

class Duck extends Bird
{
    public function makeSound()
    {
        echo 'Quack!' . PHP_EOL;
    }
}

// Requires reimplementation of fly() method
class Ostrich extends Bird 
{
    public function makeSound()
    {
        echo 'Boom or hiss.' . PHP_EOL;
    }

    // Implementing this method for an ostrich does not make sense
    public function fly()
    {
        // problem: the child is not extending the functionality of the parent but instead restricting it
        throw new RuntimeException('Sorry, an ostrich cannot fly...');
    }
}

// Requires implementation of makeSound() method
class Hummingbird extends Bird 
{
    // Implementing this method for a hummingbird does not make sense
    public function makeSound()
    {
        // problem: the child is not extending the functionality of the parent but instead restricting it
        throw new RuntimeException('Sorry, a hummingbird cannot make a sound...');
    }

    public function fly()
    {
        echo 'A hummingbird can fly in all directions, including backwards and upside down!' . PHP_EOL;
    }
}

class BirdWatcher
{
    public function watchFlying(Bird $bird)
    {
        $bird->fly();
    }

    public function listen(Bird $bird)
    {
        $bird->makeSound();
    }
}

$birdWatcher = new BirdWatcher();

$duck = new Duck();
$ostrich = new Ostrich();
$hummingbird = new Hummingbird();

$birdWatcher->watchFlying($duck);
// $birdWatcher->watchFlying($ostrich); // a bird is not replaceable by an ostrich; throws a runtime exception
$birdWatcher->watchFlying($hummingbird);

$birdWatcher->listen($duck);
$birdWatcher->listen($ostrich);
// $birdWatcher->listen($hummingbird); // a bird is not replaceable by a hummingbird; throws a runtime exception
