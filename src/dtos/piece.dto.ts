import { Exclude, Expose } from "class-transformer";

@Exclude()
export class PieceDTO {

    @Expose()
    id: number;
    
    @Expose()
    pieceId: string;

    @Expose()
    batchId: string;

    @Expose()
    groupId: string;
}