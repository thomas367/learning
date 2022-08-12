<?php

/**
 * Polymorphism means “many forms”. By its name, it is a feature that allows you to perform an action in multiple or different ways.
 */

declare(strict_types = 1);

namespace OOP\Principles\Basic\Polymorphism;

// In general it could also be a class
interface Figure 
{
    function getSurface();
}

// Rectangle and Triangle classes are polymorphic - they can appear to be of a generalized type (Figure):
class Rectangle implements Figure
{
    public function __construct(private float $a, private float $b) {}

    function getSurface()
    {
        return $this->a * $this->b;
    }
}

class Triangle implements Figure
{
    public function __construct(private float $a, private float $h) {}

    function getSurface()
    {
        return $this->a * $this->h / 2;
    }
}

class Printer
{
    // This method is polymorphic - it accepts both Rectangle and Triangle:
    public function displaySurface(Figure $figure)
    {
        echo "Surface: {$figure->getSurface()} square units." . PHP_EOL;
    }
}

$printer = new Printer();

echo 'Rectangle:' . PHP_EOL;
$rectangle = new Rectangle(a: 3, b: 4);
$printer->displaySurface(figure: $rectangle);

echo 'Triangle:' . PHP_EOL;
$triangle = new Triangle(a: 3, h: 4);
$printer->displaySurface(figure: $triangle);
