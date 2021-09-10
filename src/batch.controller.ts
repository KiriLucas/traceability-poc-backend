import { Body, ClassSerializerInterceptor, Controller, Get, Param, Post, UseInterceptors } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { BatchService } from './batch.service';
import { NewBatchDTO } from './dtos/newBatch.dto';

@Controller('batch')
export class BatchController {
    constructor(private readonly batchService: BatchService) { }

    @UseInterceptors(ClassSerializerInterceptor)
    @Post('/new')
    registerNewBatch(@Body() newBatchDTO: NewBatchDTO) {
        console.log(newBatchDTO);

        // return this.batchService.registerNewBatch(newBatchDTO)
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
