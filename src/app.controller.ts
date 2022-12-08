import { Controller, Get } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { AppService } from './app.service';
import { RoomDTO } from './rooms/room.dto';
import { Room } from './rooms/room.schema';
import { RoomsService } from './rooms/rooms.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
    private readonly roomService: RoomsService) {}

  @MessagePattern({cmd:'add-room'})
  async addRoom(data:RoomDTO):Promise<Room>{
    return this.roomService.create(data)
  }

  @MessagePattern({cmd:'all-rooms'})
  async allRooms():Promise<Room[]>{
    return this.roomService.findAll()
  }
}
