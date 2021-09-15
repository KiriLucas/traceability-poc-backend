import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { plainToClass } from 'class-transformer';
import { GroupPiecesDTO } from './dtos/groupPieces.dto';
import { NewPieceDTO } from './dtos/newPiece.dto';
import { PieceDTO } from './dtos/piece.dto';
import { PieceModel } from './models/piece.model';

@Injectable()
export class PieceService {

  constructor(@InjectModel(PieceModel)
  private pieceModel: typeof PieceModel) {
  }

  registerNewPiece(newPieceDTO: NewPieceDTO) {
    const model = plainToClass(PieceModel, newPieceDTO);
    model.save()
  }

  async findPiece(pieceId): Promise<PieceModel> {
    return await this.pieceModel.findOne({ where: { pieceId: pieceId } })
  }

  async groupPieces(groupPiecesDTO: GroupPiecesDTO) {

    const pieceA: PieceModel = await this.findPiece(groupPiecesDTO.pieceAId)
    const pieceB: PieceModel = await this.findPiece(groupPiecesDTO.pieceBId)

    if (pieceA.groupId && pieceB.groupId) {
      throw new Error('Both pieces already have a group')
    } else {
      const groupId = pieceA.groupId || pieceB.groupId ? this.getGroup(pieceA, pieceB) : this.createGroup(pieceA, pieceB)
      pieceA.groupId = groupId
      pieceB.groupId = groupId
      pieceA.save()
      pieceB.save()
      return groupId
    }
  }

  getGroup(pieceA: PieceModel, pieceB: PieceModel) {
    return pieceA.groupId ? pieceA.groupId : pieceB.groupId
  }

  createGroup(pieceA: PieceModel, pieceB: PieceModel) {
    const groupId = pieceA.batchId.substring(0, 2) + pieceB.batchId.substring(0, 2) + pieceA.pieceId + pieceB.pieceId
    return groupId
  }
}