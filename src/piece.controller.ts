import { Body, Controller, Post } from '@nestjs/common';
import { PieceService } from './piece.service';
import { NewPieceDTO } from './dtos/newPiece.dto';

@Controller('pieces')
export class PieceController {
  constructor(private readonly pieceService: PieceService) {}

  @Post('newPiece')
  registerNewPiece(@Body() newPieceDTO: NewPieceDTO ) {
    console.log(newPieceDTO);
    return this.pieceService.registerNewPiece(newPieceDTO)
  }
}
