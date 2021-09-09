import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { plainToClass } from 'class-transformer';
import { GroupPiecesDTO } from './dtos/groupPieces.dto';
import { NewBatchDTO } from './dtos/newBatch.dto';
import { NewPieceDTO } from './dtos/newPiece.dto';
import { BatchModel } from './models/batch.model';
import { PieceModel } from './models/piece.model';

@Injectable()
export class BatchService {

  constructor(@InjectModel(BatchModel)
  private batchModel: typeof BatchModel){
  }
  
  registerNewBatch(newBatchDTO: NewBatchDTO) {
    const model = plainToClass(PieceModel, newBatchDTO);
    model.save()
  }

  async listAllBatches() {
    return this.batchModel.findAll()
  }

  async getBatchById(batchId: string) {
    return this.batchModel.findAll()
  }
}
