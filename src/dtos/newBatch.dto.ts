import { IsBatchExistant } from "src/validators/isBatchExistant.validator";

export class NewBatchDTO {
    
    @IsBatchExistant()
    batchId: string;

    pieceModel: string;
    ammount: string;
    provider: string;
    manufacturingDate: string;
}