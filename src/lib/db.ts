// utils/prisma.ts or lib/prisma.ts
import { PrismaClient } from '@prisma/client';

// Declare a global variable to store the PrismaClient instance in development
// This prevents multiple instances during hot-reloading
declare global {
  var prisma: PrismaClient | undefined;
}

// Create or reuse the PrismaClient instance
export const prisma =
  globalThis.prisma ||
  new PrismaClient({
    // Optional: Add logging for better debugging
    // log: ['query', 'info', 'warn', 'error'],
  });

// In development, attach the instance to globalThis to prevent re-instantiation
if (process.env.NODE_ENV !== 'production') {
  globalThis.prisma = prisma;
}
