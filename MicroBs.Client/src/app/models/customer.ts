export class Customer {
    constructor(id: number, name: string, lastName: string, code: string, city: string){
        this.id = id;
        this.name = name;
        this.lastName = lastName;
        this.code = code;
        this.city = city;
    }
    
    id: number;
    name: string;
    lastName: string;
    code: string;
    city: string;
}
