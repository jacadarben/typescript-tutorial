export class Animal {
    constructor(private _name: string) {}
    
    public get name() : string {
        return this._name;
    }
    
    public set name(v : string) {
        this._name = v;
    }
    
    public walk(distance: number): void{
        console.log(`Hi, my name is ${this._name} and I just walked ${distance} feet`);
    }
}