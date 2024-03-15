import { ApiProperty } from '@nestjs/swagger';

export class CreateInvoiceDto {
  @ApiProperty()
  name: string;

  @ApiProperty({ required: false })
  description?: string;

  @ApiProperty()
  content: string;

}