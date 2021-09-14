import { Injectable } from '@nestjs/common';
import { registerDecorator, ValidationOptions, ValidationArguments, ValidatorConstraintInterface, ValidatorConstraint } from 'class-validator';
import { BatchService } from "src/batch.service";

@Injectable()
@ValidatorConstraint({ async: true })
export class IsBatchExistantValidation implements ValidatorConstraintInterface {
    constructor(private readonly batchService: BatchService) { }

    async validate(batchId: string, validationArguments?: ValidationArguments): Promise<boolean> {
        return !!!await this.batchService.getBatchById(batchId)
    }

    defaultMessage(args: ValidationArguments) {
        return `This batch was already registered`;
    }
}

export function IsBatchExistant(validationOptions?: ValidationOptions) {
    return function (object: Object, propertyName: string) {
        registerDecorator({
            name: 'isBatchExistant',
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: [],
            validator: IsBatchExistantValidation
        });
    };
}

