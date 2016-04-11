import {Component} from 'angular2/core';
import {AssessmentFrameworkService} from "./assessment.framework.service";
import {AssessmentFramework} from "./assessment.framework";

@Component({
    selector: 'home',
    templateUrl: 'assessment/assessment.framework.component.html',
    styleUrls: ['assessment/assessment.framework.component.css'],
    providers: [AssessmentFrameworkService]
})
export class AssessmentFrameworkComponent {
    public framework:AssessmentFramework;

    constructor(service:AssessmentFrameworkService) {
        this.framework = service.framework;
    }

    addArea(title) {
        debugger;
        this.framework.areas.push({title: title, aspects: []});
    }
}