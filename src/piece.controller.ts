import { Controller, Post } from '@nestjs/common';
import { PieceService } from './piece.service';
import { NewPieceDTO } from './dtos/newPiece.dto';

@Controller()
export class PieceController {
  constructor(private readonly pieceService: PieceService) {}

  @Post()
  registerNewPiece(): NewPieceDTO {
    return this.pieceService.registerNewPiece() as any;
  }
}
