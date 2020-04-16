import { Animal } from "./Animal";

export class Dog extends Animal {
	constructor(name: string, private _tricks: number) {
		super(name);
    }
    
    public get tricks() : number {
        return this._tricks;
    }
    
    public set tricks(v : number) {
        this._tricks = v;
    }
}
