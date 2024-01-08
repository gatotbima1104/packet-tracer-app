import { Controller, Get, Param, Query } from '@nestjs/common';
import { HistoryPacketService } from './history-packet.service';
import { TrackerService } from 'src/tracker/tracker.service';

@Controller('history-packet')
export class HistoryPacketController {
  constructor(
    private trackerService: HistoryPacketService,
  ) {}

  @Get('history')
  allHistory(@Query('courier') courier: string) {
    if (courier) {
      return this.trackerService.searchHistory(courier);
    } else {
      return this.trackerService.getHistory();
    }
  }

  @Get('history/:id')
  historyId(@Param('id') id: string) {
    return this.trackerService.getHistoryById(id);
  }
}
