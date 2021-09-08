import { Table, Model, Column, DataType } from "sequelize-typescript";

@Table({ tableName: 'groups', underscored: true})
export class GroupModel extends Model {

    @Column({ type: DataType.STRING, allowNull: false })
    groupId: string;

    @Column({ type: DataType.STRING, allowNull: false, defaultValue: 0 })
    pieceId: string;
}