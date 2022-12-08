import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { ClubDTO } from 'src/dto/club.dto';
import { PlayerDTO } from 'src/dto/player.dto';
import { StadDTO } from 'src/dto/stad.dto';
import { TeamDTO } from 'src/dto/team.dto';
import { Room } from 'src/rooms/room.schema';

export type ReservationDocument = HydratedDocument<Reservation>;

@Schema()
export class Reservation {
    @Prop({ required: true})
    club: ClubDTO

    @Prop({ required: true})
    stad: StadDTO

    @Prop({ required: true})
    owner: PlayerDTO

    @Prop({ required: true})
    room: Room

    @Prop()
    createdAt: Date

    @Prop()
    gameDate: Date

    @Prop()
    totalAmount: number

    @Prop()
    isConfirmed: boolean

    @Prop()
    isClosed: boolean

}

export const ReservationSchema = SchemaFactory.createForClass(Reservation);