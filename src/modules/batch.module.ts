import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { SequelizeModule } from "@nestjs/sequelize";
import { PieceModel } from "src/models/piece.model";
import { PieceController } from "src/piece.controller";
import { PieceService } from "src/piece.service";

@Module({
    imports: [    
        ConfigModule.forRoot(),
        SequelizeModule.forRoot({
          dialect: 'mysql',
          host: process.env.DB_HOST,
          port: parseInt(process.env.DB_PORT),
          username: process.env.DB_USER,
          password: process.env.DB_PASSWORD,
          database: process.env.DB_NAME,
          autoLoadModels: true,
          synchronize: true,
        }),
        SequelizeModule.forFeature([PieceModel]),
    ],
    controllers: [PieceController],
    providers: [PieceService],
})
export class PieceModule {}