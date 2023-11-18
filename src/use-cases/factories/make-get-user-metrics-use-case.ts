import { PrismaCheckInsRepository } from "../../repositories/prisma/prisma-check-ins-repository";
import { GetUserMetricsUseCaseCase } from "../get-user-metrics";

export function makeGetUserMetricsUseCase() {
  const checkInsRepository = new PrismaCheckInsRepository();
  const useCase = new GetUserMetricsUseCaseCase(checkInsRepository);

  return useCase;
}
