import { SiteLogService } from "./siteLogService";
import { SiteRepository } from "../repositories/siteRepository";
import { ISite } from "./../models/siteModel";
import { Mapper } from "../utils/mapper";

export const SiteService = {
  createSite: async (site: ISite): Promise<ISite> => {
    const siteLog = Mapper.mapToSiteLog(site, true);
    const newSiteLog = await SiteLogService.createSiteLog(siteLog);
    site.siteLogs.push(newSiteLog.id);
    return await SiteRepository.createSite(site);
  },
  updateSite: async (site: any, selectCriteria: any) => {
    const siteLog = Mapper.mapToSiteLog(site);
    const newSiteLog = await SiteLogService.createSiteLog(siteLog);
    site.siteLogs.push(newSiteLog.id);
    return await SiteRepository.updateSite(site, selectCriteria);
  },
  findById: async (id: String) => {
    return await SiteRepository.findById(id);
  },
};
