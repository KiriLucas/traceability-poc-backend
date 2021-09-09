import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { BatchService } from './batch.service';
import { NewBatchDTO } from './dtos/newBatch.dto';

@Controller('batch')
export class BatchController {
    constructor(private readonly batchService: BatchService) { }

    @Post('/new')
    registerNewBatch(@Body() newBatchDTO: NewBatchDTO) {
        return this.batchService.registerNewBatch(newBatchDTO)
    }

    @Get('/list')
    listBatches() {
        return this.batchService.listAllBatches()
    }

    @Get('/findBatch/:batchId')
    getBatchById(@Param('batchId') id: string) {
        return this.batchService.getBatchById(id)
    }
}
