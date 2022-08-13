<?php

/**
 * Abstraction is a technique of providing only the essential details to the user
 * by hiding the unnecessary or irrelevant details of an entity.
 * This helps in reducing the operational complexity at the user-end.
 */

class Tea
{
    // Specific steps are unreachable for client code
    private function boilWater()
    {
        echo 'Boiling water...' . PHP_EOL;
    }

    private function brew()
    {
        echo 'Brewing...' . PHP_EOL;
    }

    private function addSugar()
    {
        echo 'Adding sugar...' . PHP_EOL;
    }

    private function addMilk()
    {
        echo 'Adding milk...' . PHP_EOL;
    }

    // This method abstracts the process of making a tea
    public function make()
    {
         // Implementation of the method can be changed without affecting client code
         // for example addLemon() might be used instead of addMilk()
         $this->boilWater();
         $this->brew();
         $this->addSugar();
         $this->addMilk(); 
    }
}

$tea = new Tea();

// Knowledge of specific steps or their order is NOT required in order to make a tea.
$tea->make();
