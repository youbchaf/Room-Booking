import { StadDTO } from "./stad.dto";

export class ClubDTO{
    constructor(
        public _id:string,
        public name:string,
        public description:string,
        public address:string,
        public country:string,
        public city:string,
        public region:string,
        public phone:string,
        public stade:StadDTO[],

    ){}
}