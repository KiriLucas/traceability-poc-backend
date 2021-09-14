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
  
  async registerNewBatch(newBatchDTO: NewBatchDTO) {
    console.log('batata')
    const batch = await this.getBatchById(newBatchDTO.batchId)
    const model = plainToClass(BatchModel, newBatchDTO);
    model.save()
    return model.batchId
  }

  async listAllBatches() {
    return this.batchModel.findAll()
  }

  async getBatchById(batchId: string) {
    return await this.batchModel.findOne({ where: { batchId: batchId } })
  }

  async getBatchDetails(batchId: string) {
    return this.batchModel.findOne({ where: { batchId: batchId } })
  }
}
