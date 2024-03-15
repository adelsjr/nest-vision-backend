import { Invoice } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class InvoiceEntity implements Invoice {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty({ required: false, nullable: true })
  description: string | null;

  @ApiProperty()
  content: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}