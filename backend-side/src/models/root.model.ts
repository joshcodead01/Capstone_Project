import { PrismaClient } from '@prisma/client';

export const { user, profile, category, sub_Category, product, set_Category } = new PrismaClient();

