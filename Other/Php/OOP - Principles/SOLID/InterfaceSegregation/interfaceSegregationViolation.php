<?php

interface Car
{
    function changeBrakePads();
    function changeOil();
}

class EngineCar implements Car
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

class ElectricCar implements Car
{
    public function changeBrakePads()
    {
        echo 'Changing brake pads...' . PHP_EOL;
    }

    // ElectricCar class should not need to implement the changeOil() method
    // future change to method's signature in the Car interface requires a change here
    public function changeOil() 
    {
        throw new RuntimeException('Impossible action!'); // might also do nothing
    }
}

$engineCar = new EngineCar();
echo 'Engine car:' . PHP_EOL;
$engineCar->changeBrakePads();
$engineCar->changeOil();

$electricCar = new ElectricCar();
echo 'Electric car:' . PHP_EOL;
$electricCar->changeBrakePads();
// $electricCar->changeOil(); // throws a runtime exception or does nothing
