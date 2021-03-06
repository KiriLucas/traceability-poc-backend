import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { SequelizeModule } from "@nestjs/sequelize";
import { BatchController } from "src/batch.controller";
import { BatchService } from "src/batch.service";
import { BatchModel } from "src/models/batch.model";
import { IsBatchExistantValidation } from "src/validators/isBatchExistant.validator";
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
        SequelizeModule.forFeature([BatchModel]),
    ],
    controllers: [BatchController],
    providers: [BatchService, IsBatchExistantValidation],
    exports: [BatchService]
})
export class BatchModule {}