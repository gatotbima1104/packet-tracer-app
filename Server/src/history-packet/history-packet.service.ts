import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Tracker } from 'src/tracker/entities/tracker.entity';
import { Repository } from 'typeorm';

@Injectable()
export class HistoryPacketService {
  constructor(
    @InjectRepository(Tracker) private trackerRepo: Repository<Tracker>,
  ) {}

  // get history
  getHistory() {
    return this.trackerRepo.find({
      order: {
        createdAt: 'DESC',
      },
    });
  }

  //history by Id
  async getHistoryById(id: string) {
    return await this.findPacketId(id);
  }

  //search history
  async searchHistory(courier: string) {
    return await this.trackerRepo
      .createQueryBuilder('tracker')
      .select(['tracker'])
      .where('tracker.courier ILIKE :courier', { courier: `%${courier}%` })
      .getMany();
  }

  //func getById
  async findPacketId(id: string) {
    const packet = await this.trackerRepo.findOneBy({ id });
    if (!packet) {
      throw new HttpException(
        {
          statusCode: HttpStatus.NOT_FOUND,
          message: 'packet not found',
        },
        HttpStatus.NOT_FOUND,
      );
    }

    return packet;
  }
}
