import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {HomeComponent} from '../home/home.component';
import {AssessmentFrameworkComponent} from "../assessment/assessment.framework.component";

@Component({
    selector: 'tjp-app',
    providers: [],
    pipes: [],
    directives: [ROUTER_DIRECTIVES],
    templateUrl: 'app/application.component.html',
})

@RouteConfig([
    {path: '/', component: HomeComponent, name: 'Home', useAsDefault: true},
    {path: '/assessment', component: AssessmentFrameworkComponent, name: 'AssessmentFramework'}
])

export class ApplicationComponent {
    public navigation:{title:string, route:any[]}[];

    constructor() {
        this.navigation = [
            {title: 'Home', route: ['/Home']},
            {title: 'Waarderingskader', route: ['/AssessmentFramework']},
        ];
    }

}