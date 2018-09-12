
//////// BASIC EXAMPLES /////////////////////////////
/////////////////////////////////////////////////////

export function greet (name) {
  return 'Welcome ' + name;
}

//////

import { greet } from './greet';

describe('greet', () => {
  it('should include the name in the message', () => {
    // expect(greet('spen')).toBe('Welcome spen')
    expect(greet('spen')).toContain('spen')
  })
});


/////////////////////////////////////////////////////

export function getCurrencies () {
  return ['USD', 'AUD', 'EUR'];
}

/////

import { getCurrencies } from './getCurrencies';

describe('getCurrencies', () => {
  it('should return the supported currencies', () => {
    const result = getCurrencies();
    expect(result).toContain('USD');
    expect(result).toContain('AUD');
    expect(result).toContain('EUR');
  })
});




///////// FORMS /////////////////////////////////////
/////////////////////////////////////////////////////


import { FormBuilder, Validators, FormGroup } from '@angular/forms';


export class TodoFormComponent {

  form: FormGroup;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      name: ['', Validators.required],
      email: [''],
    });
  }

}

/////

import { Form Builder } from '@angular/forms';
import { TodoFormComponent } from './todo-form.component';


describe('TodoFormComponent', () => {
  var component: TodoFormComponent;

  beforeEach(() => {
    component = new TodoFormComponent(new FormBuilder)
  });

  it('should create a form with 2 controls', () => {
    expect(component.form.contains('name')).toBeTruthy();
    expect(component.form.contains('email')).toBeTruthy();
  });

  it('should name control required', () => {
    let control = component.form.get('name');

    control.setValue('');
    expect(control.valid).toBeFalsy();
  });
});


///////// EVENT EMMITTERS ///////////////////////////
/////////////////////////////////////////////////////

import { EventEmitter } from '@angular/core';

export class VoteComponent {
  totalVotes = 0;
  @Output() voteChanged = new EventEmitter();

  upVote() {
    this.totalVotes++;
    this.voteChanged.emit(this.totalVotes);
  }
}

//////

import { VoteComponent } from './vote.component';

describe('VoteComponent', () => {

    var component: VoteComponent;

    beforeEach(() => {
      component = new VoteComponent();
    });

    it('should raise vote changed event when upvoted', () => {
        let totalVotes = null;
        component.voteChanged.subscribe(tv => totalVotes = tv)

        component.upVote();

        // expect(totalVotes).not.toBeNull()
        expect(totalVotes).toBe(1)
    });

});



//////// SPIES //////////////////////////////////////
/////////////////////////////////////////////////////

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


export class TodoService {
  constructor(private http: Http) {
  }

  add(todo) {
    return this.http.post('...', todo).map(r => r.json());
  }

  getTodos() {
    return this.http.get('...').map(r => r.json());
  }

  delete(id) {
    return this.http.delete('...').map(r => r.json());
  }
}

//////

import { TodoService } from './todo.service'


export class TodosComponent {

    todos: any[] = [];
    message;

    constructor(private service: TodoService) {}

    ngOnInit() {
      this.service.getTodos().subscribe(t => this.todos = t);
    }

    add() {
      var newTodo = { title: '... ' };
      this.service.add(newTodo).subscribe(
        t => this.todos.push(t),
        err => this.message = err);
    }

    delete(id) {
      if (confirm('Are you sure?'))
        this.service.delete(id).subscribe();
    }
}


/////

import { TodosComponent } from './todos.component';
import { TodoService } from './todo.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';


describe('TodosComponent', () => {

    let component: TodosComponent;
    let service: TodoService;

    beforeEach(() => {
      service = new TodoService(null)
      component = new ToDosComponent(service)
    });

    it('should set todos property with the items returned from server', () => {

      let todos = [1, 2, 3]

        // arrange
        spyOn(service, 'getToDos').and.callFake( () => {
          return Observable.from([ todos ])
        })

        //act
        component.ngOnInit()

        //assert
        // expect(component.todos.length).toBe(3)
        expect(component.todos).toBe(todos)

    });

  });



///////// CONFIRMATION BOXES /////////////////////////
//////////////////////////////////////////////////////

it('should call server to delete a todo if user confirms', () => {

    // arrange
    spyOn(window, 'confirm').and.returnValue(true)
    let spy = spyOn(service, 'delete').and.returnValue(true)

    //act
    component.delete(1)

    //assert
    expect(spy).toHaveBeenCalledWith(1);

});








// END //////////////////////////////////////////////////
