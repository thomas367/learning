<?php

/**
 * ISP - Interface Segregation Principle
 * 
 * Many client-specific interfaces are better than one general-purpose interface.
 * Here, the idea is split the ‘big’ interface to the smaller interface until client 
 * of the interface will only know about the methods that are related to them.
 */

// More specific interface
interface Car 
{
    function changeBrakePads();
}

interface EngineCar extends Car
{
    function changeOil();
}

class OrdinaryCar implements EngineCar
{
    public function changeBrakePads()
    {
        echo 'Changing brake pads...' . PHP_EOL;
    }

    public function changeOil()
    {
        echo 'Changing oil...' . PHP_EOL;
    }
}

// ElectricCar class is not required to implement changeOil() method
class ElectricCar implements Car
{
    public function changeBrakePads()
    {
        echo 'Changing brake pads...' . PHP_EOL;
    }
}

$ordinaryCar = new OrdinaryCar();
echo 'Ordinary car:' . PHP_EOL;
$ordinaryCar->changeBrakePads();
$ordinaryCar->changeOil();

$electricCar = new ElectricCar();
echo 'Electric car:' . PHP_EOL;
$electricCar->changeBrakePads();
// $electricCar->changeOil(); // static analysis: Method 'changeOil' not found in ElectricCar
