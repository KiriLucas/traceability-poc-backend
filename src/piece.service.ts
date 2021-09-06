import { Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { NewPieceDTO } from './dtos/newPiece.dto';
import { PieceModel } from './models/piece.model';

@Injectable()
export class PieceService {

  registerNewPiece(newPieceDTO: NewPieceDTO) {
    
    const model = plainToClass(PieceModel, newPieceDTO);
    return 'Hello World!' as any;
  }
}
