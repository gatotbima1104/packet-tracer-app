import { Controller, Get, Param, Query } from '@nestjs/common';
import { HistoryPacketService } from './history-packet.service';

@Controller('history-packet')
export class HistoryPacketController {
  constructor(
    private trackerService: HistoryPacketService,
  ) {}

  @Get()
  allHistory(@Query('courier') courier: string) {
    if (courier) {
      return this.trackerService.searchHistory(courier);
    } else {
      return this.trackerService.getHistory();
    }
  }

  @Get(':id')
  historyId(@Param('id') id: string) {
    return this.trackerService.getHistoryById(id);
  }
}
