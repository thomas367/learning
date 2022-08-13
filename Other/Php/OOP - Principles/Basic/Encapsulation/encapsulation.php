<?php

/**
 * Encapsulation is a technique of restricting a user from directly modifying the data members
 * or variables of a class in order to maintain the integrity of the data. How do we do that?
 * We restrict the access of the variables by switching the access-modifier to private
 * and exposing public methods that we can use to access the data.
 */

class Dog
{
    // weight and mood can be managed only by a dog
    private int $weight = 1;
    private string $mood = 'good';

    public function setWeight(int $weight)
    {
        // possibility to set rules; could also throw an exception for invalid data
        if ($weight > 0) {
            $this->weight = $weight;
        }
    }

    // value is changed indirectly by interacting with a dog (petting and teasing it)
    public function pet()
    {
        $this->mood = 'good';
    }

    // mood is limited to allowed set of values ('good' and 'bad')
    public function tease()
    {
        $this->mood = 'bad';
    }

    public function __toString()
    {
        return "Dog's weight is $this->weight unit(s) and it's in a $this->mood mood.";
    }
}

$dog = new Dog();
echo "After dog's creation: $dog" . PHP_EOL;

$dog->tease();
echo "After teasing: $dog" . PHP_EOL;

$dog->pet();
echo "After petting: $dog" . PHP_EOL;

$newWeight = -1;
$dog->setWeight($newWeight);
echo "After setting weight to $newWeight unit(s): $dog" . PHP_EOL;

$newWeight = 5;
$dog->setWeight($newWeight);
echo "After setting weight to $newWeight unit(s): $dog" . PHP_EOL;

// Direct internal state modification is NOT possible, preventing from setting incorrect internal state:
// $dog->weight = -1; // cannot access private property
// $dog->mood = 'cold'; // cannot access private property
