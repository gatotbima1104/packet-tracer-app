import { Module } from '@nestjs/common';
import { HistoryPacketService } from './history-packet.service';
import { HistoryPacketController } from './history-packet.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tracker } from 'src/tracker/entities/tracker.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Tracker])],
  controllers: [HistoryPacketController],
  providers: [HistoryPacketService],
})
export class HistoryPacketModule {}
