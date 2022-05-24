import SiteLog, { ISiteLog } from "../models/siteLogModel";

export const SiteLogRepository = {
  createSiteLog: async (siteLog: ISiteLog): Promise<ISiteLog> => {
    return await new SiteLog(siteLog).save();
  },
};
