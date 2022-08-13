<?php

class Rectangle 
{

    public $width;
    public $height;

    public function __construct($width, $height) 
    {
        $this->width = $width;
        $this->height = $height;
    }
}

class Square 
{

    public $length;

    public function __construct($length) 
    {
        $this->length = $length;
    }
}

// If we add another shape like a Circle we have to change the AreaCalculator in order to
// calculate the new shape area and this is not sustainable.
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
            if($shape instanceof Square) {
                $area[] = pow($shape->length, 2);
            } else if($shape instanceof Rectangle) {
                $area[] = $shape->width * $shape->height;
            }
        }

        return array_sum($area);
    }
}
