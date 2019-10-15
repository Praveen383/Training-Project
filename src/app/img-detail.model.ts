export class ImgDetails {
    public name: string;
    public img: string;
    public cost: number;
    public size: number;
    public color: string;

    constructor(name: string, img: string, cost: number, size: number, color: string) {
        this.name = name;
        this.img = img;
        this.cost = cost;
        this.size = size;
        this.color = color;
    }

}