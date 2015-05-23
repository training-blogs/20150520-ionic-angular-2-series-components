@Component({
    selector: 'app'
})
@View({
    url: 'main.html',
})
class MyApp {
    constructor() {
        console.log('App Start')
    }
}

bootstrap(MyApp)