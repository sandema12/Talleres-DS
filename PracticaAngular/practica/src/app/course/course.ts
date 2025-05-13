export class Course {
    name: string;
    proffessor: string;
    credits: number;

    public constructor(name: string, proffessor: string, credits: number) {
        this.name = name;
        this.proffessor = proffessor;
        this.credits = credits;
    }

}
