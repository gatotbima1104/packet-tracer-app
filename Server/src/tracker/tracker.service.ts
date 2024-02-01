import {
  HttpCode,
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import axios from 'axios';
import * as dotenv from 'dotenv';
import { Tracker } from './entities/tracker.entity';
import { Repository } from 'typeorm';

dotenv.config();

@Injectable()
export class TrackerService {
  //initiate variable
  private url: string;
  private api: string;

  constructor(
    @InjectRepository(Tracker) private trackerRepo: Repository<Tracker>,
  ) {
    //assign variable
    this.api = process.env.API_KEY;
    this.url = process.env.URL;
  }

  async getPacketInformation(courier: string, id: string) {
    try {
      //request api
      const res = await axios.get(
        `${this.url}api_key=${this.api}&courier=${courier}&awb=${id}`,
      );

      //find packet id
      const packetById = await this.trackerRepo.findOne({
        where: { 
          display_id: id 
        },
      });

      //if exist return, if doesn't exist not return
      if (!packetById) {
        //create to db
        const packet = this.trackerRepo.create({
          createdAt: new Date(),
          display_id: id,
          courier,
        });

        //save to db
        await this.trackerRepo.save(packet);
      }

      return res.data.data;
    } catch (error) {
      throw new HttpException(
        {
          statusCode: HttpStatus.NOT_FOUND,
          id,
          message: `${id} is not found !!`,
        },
        HttpStatus.NOT_FOUND,
      );
    }
  }

  async getPakcetById(id: string) {
    const couriers = [
      'jne',
      'jnt',
      'jnt_cargo',
      'sicepat',
      'anteraja',
      'tiki',
      'ninja',
      'pos',
      'spx'
    ];

    try {
      // Checking every courier
      for (const item of couriers) {
        try {
          const res = await axios.get(
            `${this.url}api_key=${this.api}&courier=${item}&awb=${id}`,
          );

          // If data is found, return it
          if (res.data.data) {
            //find packet id
            const packetById = await this.trackerRepo.findOne({
              where: { 
                display_id: id 
              },
            });

            //if exist return, if doesn't exist not return
            if (!packetById) {
              //create to db
              const packet = this.trackerRepo.create({
                createdAt: new Date(),
                display_id: id,
                courier: item,
              });
              
              //save to db
              await this.trackerRepo.save(packet);
            }

            //return
            return res.data.data
          }
        } catch (error) {
          console.log(`${item} doesn't exist currently`, error);
        }
      }
      throw new NotFoundException(
        'Data not found for the provided ID in any courier.',
      );
    } catch (error) {
      throw new HttpException(
        {
          statusCode: HttpStatus.NOT_FOUND,
          id,
          message: `${id} is not found !!`,
        },
        HttpStatus.NOT_FOUND,
      );
    }
  }

  
}
