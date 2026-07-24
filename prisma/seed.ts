import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.organization.create({
    data: {
      name: 'Flow Force Demo Org',
      businessType: 'SOFTWARE_COMPANY',
      primaryColor: '#3f6df6',
      secondaryColor: '#0f172a',
      timezone: 'UTC',
      currency: 'USD',
      settings: {
        create: {
          theme: 'light',
          modules: ['Projects', 'People', 'Reports', 'Automation'],
          notifications: { email: true, push: true },
          security: { mfaReady: true },
        },
      },
    },
  });
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
