import {Component, Template, bootstrap} from 'angular2/angular2'

@Component({
    selector: 'my-component'
})
@Template({
    inline: "<div>Hello my name is {{name}}</div>"
})
class MyComponent {
    constructor() {
        this.name = 'Max';
    }
    sayMyName() {
        console.log('My name is', this.name);
    }
}

bootstrap(MyComponent);