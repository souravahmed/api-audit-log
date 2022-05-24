import { SiteLogRepository } from "../repositories/siteLogRepository";
import { ISiteLog } from "./../models/siteLogModel";

export const SiteLogService = {
  createSiteLog: async (siteLog: ISiteLog): Promise<ISiteLog> => {
    return await SiteLogRepository.createSiteLog(siteLog);
  },
};
