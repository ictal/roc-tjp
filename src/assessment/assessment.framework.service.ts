import {AssessmentFramework, AssessmentArea, AssessmentAspect, AssessmentIndicator} from "./assessment.framework";
import {Injectable} from "angular2/core";

@Injectable()
export class AssessmentFrameworkService {
    public framework:AssessmentFramework;

    constructor() {
        this.framework = {
            areas: [
                {
                    title: 'Onderwijsproces',
                    aspects: [
                        {
                            title: 'Samenhang',
                            indicators: [
                                {title: 'Inhoud'},
                                {title: 'Programmering'}
                            ]
                        },
                        {
                            title: 'Maatwerk',
                            indicators: [
                                {title: 'Differentiatie'}
                            ]
                        }
                    ]
                }
            ]
        };
    }

    get(indexString:string):any {
        let indices = indexString.split('.').map(index => +index);
        switch (indices.length) {
            case 3:
                return this.getIndicator(indices[0], indices[1], indices[2]);
            case 2:
                return this.getAspect(indices[0], indices[1]);
            case 1:
                return this.getArea(indices[0]);
        }
        return null;
    }

    getArea(index:number):AssessmentArea {
        return this.framework.areas[(index - 1)];
    }

    getAspect(areaIndex:number, index:number):AssessmentAspect {
        let area = this.getArea(areaIndex);
        return area && area.aspects[index - 1];
    }

    getIndicator(areaIndex:number, aspectIndex:number, index:number):AssessmentIndicator {
        let aspect = this.getAspect(areaIndex, aspectIndex);
        return aspect && aspect.indicators[index - 1];
    }
}