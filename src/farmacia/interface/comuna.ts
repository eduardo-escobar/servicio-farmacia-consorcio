export class Comuna {
    name: string;
}

export class Region {
    name: string;
    romanNumber: string;
    number: string;
    communes: Comuna[];
}