import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { plainToClass } from 'class-transformer';
import { NewBatchDTO } from './dtos/newBatch.dto';
import { BatchModel } from './models/batch.model';
import { PieceModel } from './models/piece.model';

@Injectable()
export class BatchService {

  constructor(@InjectModel(BatchModel)
  private batchModel: typeof BatchModel){
  }
  
  registerNewBatch(newBatchDTO: NewBatchDTO) {
    const model = plainToClass(PieceModel, newBatchDTO);
    console.log(model)
    model.save()
  }

  async listAllBatches() {
    return this.batchModel.findAll()
  }

  async getBatchById(batchId: string) {
    return this.batchModel.findOne({ where: { batchId: batchId } })
  }

  async getBatchDetails(batchId: string) {
    return this.batchModel.findOne({ where: { batchId: batchId } })
  }
}
