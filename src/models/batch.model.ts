import { Table, Model, Column, DataType } from "sequelize-typescript";

@Table({ tableName: 'batches', underscored: true})
export class BatchModel extends Model {

    @Column({ type: DataType.STRING, allowNull: false })
    batchId: string;

    @Column({ type: DataType.STRING, allowNull: false, defaultValue: 0 })
    pieceModel: string;

    @Column({ type: DataType.STRING, allowNull: false, defaultValue: 0 })
    amount: string;

    @Column({ type: DataType.STRING, allowNull: false, defaultValue: 0 })
    provider: string;

    @Column({ type: DataType.STRING, allowNull: false, defaultValue: 0 })
    manufacturingDate: string;
}