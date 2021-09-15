import { Table, Model, Column, DataType } from "sequelize-typescript";

@Table({ tableName: 'pieces', underscored: true})
export class PieceModel extends Model<PieceModel> {

    @Column({ type: DataType.STRING, allowNull: false })
    pieceId: string;

    @Column({ type: DataType.STRING, allowNull: false })
    batchId: string;

    @Column({ type: DataType.STRING, allowNull: true })
    groupId: string;
}