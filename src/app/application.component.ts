import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {HomeComponent} from '../home/home.component';

@Component({
    selector: 'tjp-app',
    providers: [],
    pipes: [],
    directives: [ROUTER_DIRECTIVES],
    templateUrl: 'app/application.component.html',
})

@RouteConfig([
    {path: '/', component: HomeComponent, name: 'Home', useAsDefault: true}
])

export class ApplicationComponent {
    public navigation:{title:string, route:any[]}[];

    constructor() {
        this.navigation = [
            {title: 'Home', route: ['/Home']}
        ];
    }

}