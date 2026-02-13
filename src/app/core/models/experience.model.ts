export interface ExperienceModel{
    role: string;
    project: string;
    period: string;
    description: string;
    img: string;
    details: string[];
    stack: string[];
    repositories : Repositories;
}

interface Repositories{
    frontend : Repository;
    backend : Repository;
}

interface Repository{
    available : Boolean;
    url : string;
    platform : string;
}