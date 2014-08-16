Phosphor
========

A next-generation rendering framework built on emergent web technologies, Phosphor is designed to facilitate rapid prototyping of interactive WebGL applications and showcase the bleeding edge of what the web has to offer.

It is written in ES6, the next-generation standard for the JavaScript language and leverages WebGL for rendering. 


## Technologies

Phosphor's focus is on leveraging modern web technologies and open source software to create a framework for interactive 3D applications that is not only powerful but performant. To accomplish this goal, we have decided to leverage the following libraries/tools:

### di.js 
  - **Provides**: Dependency Injection
  - **Project Page**: https://github.com/angular/di.js
  - **Rationale**: The goal is to create a rendering engine that is not only feature-rich but modular and extensible. Using dependency injection allows us to expose services only through an interface that defines the functionality the service provides. This makes repurposing and testing the engine significantly easier.

### RequireJS
  - **Provides**: Asynchronous Module Definition (AMD) 
  - **Project Page**: http://requirejs.org/
  - **Rationale**: While RequireJS is not a core component of Phosphor's framework, it is used extensively to load the engine and its many dependencies into the browser.

### three.js 
  - **Provides**: WebGL/Canvas Rendering
  - **Project Page**: http://threejs.org/
  - **Rationale**: three.js is the preeminent WebGL framework on the web. It provides easy-to-use implementations of common rendering elements like materials, meshes and lights and lets us avoid writing thousands of lines of boilerplate GL code. three.js is used to implement Phosphor's default graphics provider.
  - 
### Cannon.js
  - **Provides**: Physics Simulation
  - **Project Page**: http://www.cannonjs.org
  - **Rationale**: Cannon.js is a small and efficient 3D physics framework written in JavaScript. It provides the basic elements of physical simulation (bodies, collisions, constraints, etc.) and may easily be run in an HTML5 WebWorker, improving performance by allowing physics computations to execute in a separate thread. Cannon.js is used to implement Phosphor's default physics provider.

### React
  - **Provides**: Interface Components
  - **Project Page**: http://facebook.github.io/react/index.html
  - **Rationale**: React is a lightweight and remarkably efficient library for building user interfaces from small, reusable components. Its one-way reactive data binding makes it perfect for allowing users to visualize and interact with data. React is used to implement Phosphor's default interface provider.

## Design

Phosphor strives to be *reactive*, *modular* and *compositional*. That's quite enough buzzwording for one paragraph so let's break down the way that Phosphor embodies these values.

#### Reactive
Rather than rely on continuous polling of services or round-robin style update loops, whenever it is possible Phosphor's services and components rely on events for the data they require. By using components that react only when there is a change in data's state, we avoid costly and unnecessary updates on scene objects. 

#### Modular
Phosphor is built on a strong dependency injection framework which allows entire services/component implementations to be swapped out without the need to rebuild the application (or even reload in many cases). Service/component implementations designed to achieve some specific functionality can be grouped together into portable and reusable modules for other Phosphor projects.

#### Compositional 
Entities in a Phosphor scene are best viewed as containers rather than objects themselves. An entity is simply a "thing" but *components* describe the "thing". To build a `Truck` object in a traditional inheritance-based engine, we would subclass our `Entity` base to create a `Vehicle` class that describes the various behaviours available to all vehicles, like the number of wheels and whether the lights are on or off. In Phosphor, you build the truck by adding descriptive components that define its behaviours like `Suspension` and `Lights`.

