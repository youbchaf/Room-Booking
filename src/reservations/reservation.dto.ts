import { ClubDTO } from "src/dto/club.dto";
import { PlayerDTO } from "src/dto/player.dto";
import { StadDTO } from "src/dto/stad.dto";
import { TeamDTO } from "src/dto/team.dto";
import { Room } from "src/rooms/room.schema";

export class ReservationDTO{
    constructor(
        public _id:string,
        public club:ClubDTO,
        public stad: StadDTO,
        public owner: PlayerDTO,
        public room: Room,
        public createdAt: Date,
        public gameDate: Date,
        public totalAmount: number,
        public isConfirmed: boolean,
        public isClosed: boolean,
    ){}
}