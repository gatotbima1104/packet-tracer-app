import { Module } from '@nestjs/common';
import { TrackerModule } from './tracker/tracker.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HistoryPacketModule } from './history-packet/history-packet.module';
import typeOrmConfig from './config/database/typeorm.config';

@Module({
  imports: [TrackerModule, TypeOrmModule.forRoot(typeOrmConfig), HistoryPacketModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
