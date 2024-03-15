import { Invoice } from '@prisma/client';
export declare class InvoiceEntity implements Invoice {
    id: number;
    name: string;
    description: string | null;
    content: string;
    createdAt: Date;
    updatedAt: Date;
}
