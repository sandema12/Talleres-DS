export class Serie {

    public id : number;
    public name : string;
    public channel : string;
    public seasons : number;
    public desc : string;
    public poster : string;
    public webpage : string;
    

    public constructor (id : number, name : string, channel : string, seasons : number, desc : string, webpage : string, poster : string){
        this.id= id;
        this.name= name;
        this.channel= channel;
        this.seasons= seasons;
        this.desc= desc;
        this.poster=poster;
        this.webpage=webpage;
        
    }
}