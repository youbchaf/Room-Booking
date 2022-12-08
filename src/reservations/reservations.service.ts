import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ReservationDTO } from './reservation.dto';
import { Reservation, ReservationDocument } from './reservation.schema';

@Injectable()
export class ReservationsService {
    constructor(@InjectModel(Reservation.name) private reservationModel: Model<ReservationDocument>) { }

    async create(reservation: ReservationDTO): Promise<Reservation> {
        const createdRoom = new this.reservationModel(reservation);
        return createdRoom.save();
    }

    async findAll(): Promise<Reservation[]> {
        return this.reservationModel.find().exec();
    }
}
