<?php

/**
 * OCP — Open/Closed Principle
 *
 * Software entities (classes, modules, functions, etc.) should be open for extension,
 * but closed for modification. It’s means the entity that we create should be extendable.
 * By implementing this principle we are able to create a new feature / behaviour without
 * breaking the existing code.
 */

interface Shape 
{
    public function area();
}

class Rectangle implements Shape 
{

    private $width;
    private $height;

    public function __construct($width, $height) 
    {
        $this->width = $width;
        $this->height = $height;
    }

    public function area() 
    {
        return $this->width * $this->height;
    }
}

class Square implements Shape 
{

    private $length;

    public function __construct($length) 
    {
        $this->length = $length;
    }

    public function area() 
    {
        return pow($this->length, 2);
    }
}


class AreaCalculator 
{

    protected $shapes;

    public function __construct($shapes = array()) 
    {
        $this->shapes = $shapes;
    }

    public function sum() 
    {
        $area = [];

        foreach($this->shapes as $shape) {
            $area[] = $shape->area();
        }

        return array_sum($area);
    }
}
