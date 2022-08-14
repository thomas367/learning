# JavaScript design patterns 

Here you will find some of the most usefull (in my opinion) design patterns implemented in JavaScript. Enjoy! :)

## Creational

* [Factory] - Factory simply generates an instance for client without exposing any instantiation logic to the client.                                                                 
* [Prototype] - In this, we use a sort of a “skeleton” of an existing object to create or instantiate new objects.
* [Singleton] - Pattern where only one instance of a class can exist.
* [Abstract Factory] - Factory that groups the individual but related/dependent factories together without specifying their concrete classes.
* [Builder] - Separate the construction from its representation. Useful when there are a lot of steps involved in creation of an object.


## Structural

* [Adapter] - Lets you wrap an otherwise incompatible object in an adapter to make it compatible with another class.
* [Bridge] - Decouple an abstraction of object from its implementation so that the two can vary independently.
* [Composite] - Composes objects into tree-like structures to represent whole-part hierarchies.
* [Decorator] - Lets you dynamically change the behavior of an object at run time by wrapping them in an object of a decorator class.
* [Facade] - Provides a simplified interface to a complex subsystem. (jquery)
* [Flyweight] - Minimize memory usage or computational expenses by sharing as much as possible with similar objects. (memoization, cache)
* [Proxy] - Provides a placeholder for another object to control access, reduce cost, and reduce complexity.

## Behavioral

* [Chain Of Resp] - Request enters from one end and keeps going from object to object till it finds the suitable handler. (even propagation)
* [Command] - Provide the means to decouple client from receiver. (Reciver, Command, Invoker)
* [Iterator] - Way to sequentialy access the elements of an object without exposing the underlying presentation.
* [Observer] - Defines a dependency between objects so that whenever an object changes its state, all its dependents are notified. (Pub/Sub, Observables)
* [Mediator] - Control the interaction between two objects. (chatroom, users)
* [Memento] - Capturing and storing the current state of an object in a manner that it can be restored later on in a smooth manner. (edit ,save, restore)
