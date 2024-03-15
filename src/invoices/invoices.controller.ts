import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { InvoicesService } from './invoices.service';
import { CreateInvoiceDto } from './dto/create-invoice.dto';
import { UpdateInvoiceDto } from './dto/update-invoice.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { InvoiceEntity } from './entities/invoice.entity';

@Controller('invoices')
@ApiTags('invoices')
export class InvoicesController {
  constructor(private readonly invoicesService: InvoicesService) {}

  @Post()
  @ApiCreatedResponse({ type: InvoiceEntity })
  create(@Body() createInvoiceDto: CreateInvoiceDto) {
    return this.invoicesService.create(createInvoiceDto);
  }

  @Get()
  @ApiOkResponse({ type: InvoiceEntity, isArray: true })
  findAll() {
    return this.invoicesService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: InvoiceEntity })
  findOne(@Param('id') id: string) {
    return this.invoicesService.findOne(+id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: InvoiceEntity })
  update(@Param('id') id: string, @Body() updateInvoiceDto: UpdateInvoiceDto) {
    return this.invoicesService.update(+id, updateInvoiceDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: InvoiceEntity })
  remove(@Param('id') id: string) {
    return this.invoicesService.remove(+id);
  }
}
