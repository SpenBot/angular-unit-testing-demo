# angular-unit-testing
8/20 demo presentation





# QUICK DEMO

  - counter-test
```     
        $ ng serve
        $ ng test
        $ ng test --code-coverage
```

  - demo app, demo karma, demo coverage






# UNIT TESTING AT ITS VERY BASIC

  - testing modules in an isolated environment

  - in Angular we use **JASMINE** as our framework, which gives us these methods
  ```ts
          describe()
          it()  
  ```
  - describe() to define a suite (a group of related tests)
  - it() to describe a spec (a test)

  - **KARMA** is what looks for and runs the spec.ts files

  + basic-unit-test.ts

  - some common Jasmine methods:
      - toBe(), toContain() toBeDefined(), toBeFalsy(), toBeGreaterThan()
      - .toHaveBeenCalled(), .toHaveBeenCalledWith()
      - .not.toBeNull(), .and.returnValue(true)
      - .and.callFake()







# ANGULAR GENERATED BOILER-PLATE SPEC FILES

  - with the Angular CLI we can generate components, and their spec files

```     
        $ ng new students-test
        $ ng generate component students
```

  + students.component.spec.ts


  - in Angular unit testing, we aren't interested in just testing the logic of our modules (properties and methods)
  - checking the logic of our classes is not enough, we want to check our components as a whole

  - we want to check the Templates as part of our component too
    - whats being rendered, are the events working, etc.
  - we want to check things like our Services too  

  - our unit tests need to be a little more integrated


  - in order to do this, we have to have Angular compile an instance of the component in a test environment that includes things like your templates and dependencies   

    - there are two beforeEach() blocks
      - in the first you configure your testing module
      - in the second, you create the component

    - TestBed.createComponent() creates an instance of the component in a testing environment module TestBed

    - ComponentFixture is a wrapper around our component instance
      - with this we can access both the component instance as well as its template

    - why do we do beforeEach()?
      - because tests have side effects.
      - you want to reset your component, clean state

    - so now, you can run tests on 'component' that acts as the entire compiled component





# THE BULLSHIT OF ANGULAR TESTING

  - you can write test forever, so be smart





# THINGS TO TEST IN ANGULAR

  - now that we can run tests on our compiled components, we can do tests on all these

    - modules
    - directives
    - navigation
    - template renders
    - template events and user interactions
    - routes
    - services
    - forms
    - event emitters
    - alerts and confirms
    - the list goes on!




# COMPONENT/TEMPLATE INTEGRATED TESTING

  - debugElement and nativeHTML element for testing template renders

  + counter.component.spec.ts

  - debugElement allows you to query the DOM
    - you can query here BY a CSS class, or you can query BY an ng* directive too
    - debugElement gives you access to attributes and styles and shit
  - nativeElement gives you access to innerText and shit of the element if you need it.




# OTHER EXAMPLES OF SHIT

  - common examples
  - forms
  - spyOn()




- demo done


>> END <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
