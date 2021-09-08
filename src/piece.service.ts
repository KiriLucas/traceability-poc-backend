import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { plainToClass } from 'class-transformer';
import { GroupPiecesDTO } from './dtos/groupPieces.dto';
import { NewPieceDTO } from './dtos/newPiece.dto';
import { PieceModel } from './models/piece.model';

@Injectable()
export class PieceService {

  constructor(@InjectModel(PieceModel)
  private pieceModel: typeof PieceModel){
  }
  
  registerNewPiece(newPieceDTO: NewPieceDTO) {
    const model = plainToClass(PieceModel, newPieceDTO);
    model.save()
  }

  groupPieces(groupPiecesDTO: GroupPiecesDTO) {
    // const model = plainToClass(PieceModel, newPieceDTO);
    // model.save()
    return 'Hello World!' as any;
  }
}
