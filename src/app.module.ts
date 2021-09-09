import { Module } from "@nestjs/common";
import { BatchModule } from "./modules/batch.module";
import { PieceModule } from "./modules/piece.module";

@Module({
    imports: [PieceModule, BatchModule],
    controllers: [],
    providers: [],
    exports: []
})
export class AppModule {}