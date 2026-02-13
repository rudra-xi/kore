import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";
import { PrismaClient } from "../../generated/prisma/client";
import "server-only";

/**
 * Database connection configuration using Prisma with a PostgreSQL adapter.
 * 'server-only' ensures this logic is never executed or bundled on the client side,
 * protecting sensitive database credentials and connection logic.
 */

const connectionString = process.env.DATABASE_URL;
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);

/**
 * Factory function to instantiate the PrismaClient with the edge-compatible adapter.
 */
const prismaClientSingleton = () => {
	return new PrismaClient({ adapter });
};

const globalForPrisma = global as unknown as { prisma: PrismaClient };

/**
 * Intent: Singleton Instance Management.
 * In development, Next.js reloads modules on every code change. This pattern
 * prevents exhausting database connection limits by persisting the Prisma
 * instance on the global object across hot-reloads.
 */
export const prisma = globalForPrisma.prisma || prismaClientSingleton();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
