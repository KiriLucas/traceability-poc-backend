import { Module } from '@nestjs/common';
import { PieceController } from './piece.controller';
import { PieceService } from './piece.service';

@Module({
  imports: [],
  controllers: [PieceController],
  providers: [PieceService],
})
export class AppModule {}
