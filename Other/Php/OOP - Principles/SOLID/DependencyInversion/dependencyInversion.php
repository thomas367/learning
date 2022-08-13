<?php

/**
 * DIP - Dependency Inversion Principle
 * 
 * Dependency Inversion is a great solution to reduce tight coupling in our software.
 * Depend upon abstractions, not concretions.
 */

class Car
{
    // Car class is decoupled from CombustionEngine and ElectricEngine - it has no direct reference to them.
    // It relies on abstraction (i.e. Engine interface).
    public function __construct(private Engine $engine) {} // no hard-coded dependency: an engine is produced externally

    public function start()
    {
        $this->engine->turnOn(); // a car uses - or depends on - the engine
    }
}

interface Engine // abstraction does not depend on concretions
{
    function turnOn();
}

// A combustion engine relies on abstraction (i.e. Engine interface)
class CombustionEngine implements Engine 
{
    function turnOn()
    {
        echo "Starting ignition..." . PHP_EOL;
    }
}

// An electric engine relies on abstraction (i.e. Engine interface)
class ElectricEngine implements Engine 
{
    function turnOn()
    {
        echo "Turning power on..." . PHP_EOL;
    }
}

// A car can be assembled with a combustion engine:
$combustionEngine = new CombustionEngine();
$car = new Car($combustionEngine); // car's dependency is injected via a constructor parameter
$car->start();

// A car can be assembled with an electric engine as well:
$electricEngine = new ElectricEngine();
$car = new Car($electricEngine); // car's dependency is injected via a constructor parameter
$car->start();

// any future engines - like HydrogenCombustionEngine - may be easily injected if they implement Engine interface
