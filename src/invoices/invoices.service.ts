import { Injectable } from '@nestjs/common';
import { CreateInvoiceDto } from './dto/create-invoice.dto';
import { UpdateInvoiceDto } from './dto/update-invoice.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class InvoicesService {
  
  constructor(private prisma: PrismaService) {}

  create(createInvoiceDto: CreateInvoiceDto) {
    return this.prisma.invoice.create({ data: createInvoiceDto });
  }

  findAll() {
    return this.prisma.invoice.findMany();
  }

  findOne(id: number) {
    return this.prisma.invoice.findUnique({ where: { id } });
  }

  update(id: number, updateInvoiceDto: UpdateInvoiceDto) {
    return `This action updates a #${id} invoice`;
  }

  remove(id: number) {
    return this.prisma.invoice.delete({ where: { id } });
  }
}
