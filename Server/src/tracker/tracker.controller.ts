import { Controller, Get, Query } from '@nestjs/common';
import { TrackerService } from './tracker.service';

@Controller('tracker')
export class TrackerController {
  constructor(private readonly trackerService: TrackerService) {}

  //tracer information
  @Get()
  async getTracker(
    @Query('courier') courier: string,
    @Query('id') id: number,
  ) {
    return this.trackerService.getPacketInformation(courier, id);
  }
}
