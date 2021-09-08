import { Body, Controller, Get, Post } from '@nestjs/common';
import { PieceService } from './piece.service';
import { NewPieceDTO } from './dtos/newPiece.dto';

@Controller('pieces')
export class PieceController {
  constructor(private readonly pieceService: PieceService) {}

  @Post('/new')
  registerNewPiece(@Body() newPieceDTO: NewPieceDTO) {
    return this.pieceService.registerNewPiece(newPieceDTO)
  }

  @Post('/group')
  groupPieces(@Body() newPieceDTO: NewPieceDTO) {
    return this.pieceService.registerNewPiece(newPieceDTO)
  }
}
