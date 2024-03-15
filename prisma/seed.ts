import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
    // create dummy Invoice example
    const invoice_raw = await prisma.invoice.upsert({
      where: { name: 'fatura cartao itau - raw' },
      update: {},
      create: {
        name: 'fatura cartao itau',
        content: 'Sua Fatura fechou em R$5.000,00',
        description:
          "Invoice simples de cartao de credito cujo conteudo nao esta estruturado"
      },
    });

    const invoice_good = await prisma.invoice.upsert({
        where: { name: 'fatura cartao itau - processada e estruturada' },
        update: {},
        create: {
          name: 'fatura cartao itau - processada e estruturada',
          content: '{"valor": "R$5.000,00", "Mensagem":"Sua Fatura fechou em"}',
          description:
            "Invoice simples de cartao de credito com conteudo estruturado"
        },
      });

    console.log({ invoice_raw, invoice_good });
}

    // execute the main function
main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
    // close Prisma Client at the end
        await prisma.$disconnect();
    });