import { PrismaClient } from '@prisma/client';

export const getDb = async () => {
  //TODO prismaClient.ts에서 import해와서 사용하기
  const prisma = new PrismaClient();
  await prisma.$connect().then(() => {
    console.log('DB 시작했다');
  });
  return {
    prisma,
    [Symbol.asyncDispose]: async () => {
      await prisma.$disconnect().then(() => {
        console.log('DB 끝났다~');
      });
    },
  };
};
