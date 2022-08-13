<?php

class Rectangle
{
    public function __construct(private float $a, private float $b) {}

    function getSurface()
    {
        return $this->a * $this->b;
    }
}

class Triangle
{
    public function __construct(private float $a, private float $h) {}

    function getSurface()
    {
        return $this->a * $this->h / 2;
    }
}

class Printer
{
    public function displayRectangleSurface(Rectangle $rectangle)
    {
        echo "Surface: {$rectangle->getSurface()} square units." . PHP_EOL;
    }

    public function displayTriangleSurface(Triangle $triangle)
    {
        echo "Surface: {$triangle->getSurface()} square units." . PHP_EOL;
    }
}

$printer = new Printer();

echo 'Rectangle:' . PHP_EOL;
$rectangle = new Rectangle(3, 4);
$printer->displayRectangleSurface($rectangle);

echo 'Triangle:' . PHP_EOL;
$triangle = new Triangle(3, 4);
$printer->displayTriangleSurface($triangle);
