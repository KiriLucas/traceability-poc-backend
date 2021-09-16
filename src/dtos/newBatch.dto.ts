import { IsBatchExistant } from "src/validators/isBatchExistant.validator";

export class NewBatchDTO {
    
    @IsBatchExistant()
    batchId: string;

    pieceModel: string;
    amount: string;
    provider: string;
    manufacturingDate: string;
}