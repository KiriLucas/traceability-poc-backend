import { Body, Controller, Get, Post } from '@nestjs/common';
import { PieceService } from './piece.service';
import { NewPieceDTO } from './dtos/newPiece.dto';
import { GroupPiecesDTO } from './dtos/groupPieces.dto';

@Controller('pieces')
export class PieceController {
  constructor(private readonly pieceService: PieceService) {}

  @Post('/new')
  registerNewPiece(@Body() newPieceDTO: NewPieceDTO) {
    return this.pieceService.registerNewPiece(newPieceDTO)
  }

  @Post('/group')
  groupPieces(@Body() groupPiecesDTO: GroupPiecesDTO) {
    return this.pieceService.groupPieces(groupPiecesDTO)
  }
}
