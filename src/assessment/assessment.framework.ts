export interface AssessmentIndicator {
    title:string;
}

export interface AssessmentAspect {
    title:string;
    indicators:AssessmentIndicator[];
}

export interface AssessmentArea {
    title:string;
    aspects:AssessmentAspect[];
}

export interface AssessmentFramework {
    areas:AssessmentArea[];
}