import { ISite } from "./../models/siteModel";
import Site from "../models/siteModel";

export const SiteRepository = {
  createSite: async (site: ISite): Promise<ISite> => {
    return await new Site(site).save();
  },
  updateSite: async (updatedSite: ISite, selectCriteria: any) => {
    return await Site.updateOne(selectCriteria, { $set: updatedSite });
  },
  findById: async (id: String) => {
    return await Site.findById(id).populate("siteLogs");
  },
};
