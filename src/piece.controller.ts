import { Body, ClassSerializerInterceptor, Controller, Get, Post, UseInterceptors } from '@nestjs/common';
import { PieceService } from './piece.service';
import { NewPieceDTO } from './dtos/newPiece.dto';
import { GroupPiecesDTO } from './dtos/groupPieces.dto';
import { PieceDTO } from './dtos/piece.dto';

@Controller('piece')
export class PieceController {
  constructor(private readonly pieceService: PieceService) {}
  
  @UseInterceptors(ClassSerializerInterceptor)
  @Post('/new')
  registerNewPiece(@Body() newPieceDTO: NewPieceDTO) {
    return this.pieceService.registerNewPiece(newPieceDTO)
  }

  @Post('/group')
  groupPieces(@Body() groupPiecesDTO: GroupPiecesDTO) {
    return this.pieceService.groupPieces(groupPiecesDTO)
  }

  @Get('/list')
  listPieces() {
    return this.pieceService.listPieces()
  }
}
