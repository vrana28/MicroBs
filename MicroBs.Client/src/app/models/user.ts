export class User {
    constructor(id: number, name: string, username: string, password: string){
        this.id = id;
        this.name = name;
        this.username = username;
        this.passsword = password;
    }
    
    id: number;
    name: string;
    username: string;
    passsword: string;

}