import { CreateInvoiceDto } from './dto/create-invoice.dto';
import { UpdateInvoiceDto } from './dto/update-invoice.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class InvoicesService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createInvoiceDto: CreateInvoiceDto): import(".prisma/client").Prisma.Prisma__InvoiceClient<{
        id: number;
        name: string;
        description: string;
        content: string;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        name: string;
        description: string;
        content: string;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__InvoiceClient<{
        id: number;
        name: string;
        description: string;
        content: string;
        createdAt: Date;
        updatedAt: Date;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: number, updateInvoiceDto: UpdateInvoiceDto): string;
    remove(id: number): import(".prisma/client").Prisma.Prisma__InvoiceClient<{
        id: number;
        name: string;
        description: string;
        content: string;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
