type Age = String | Number

export class Member {
    constructor(
        public name: String, 
        public age: Age
        ) {}
}

interface memberType {
    name: String,
    age: Age
}

export const members: Array<memberType> = [
    new Member("Kerson Veloso", 26),
    new Member("Luke Skywalker", "unknown")
];
