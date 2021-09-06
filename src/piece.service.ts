import { Injectable } from '@nestjs/common';
import { NewPieceDTO } from './dtos/newPiece.dto';

@Injectable()
export class PieceService {

  registerNewPiece(): NewPieceDTO {
    
    return 'Hello World!' as any;
  }
}
