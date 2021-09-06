import { Module } from "@nestjs/common";
import { PieceModule } from "./modules/piece.module";

@Module({
    imports: [PieceModule],
    controllers: [],
    providers: [],
    exports: []
})
export class AppModule {}