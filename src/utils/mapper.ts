import SiteLog from "../models/siteLogModel";
import { ISite } from "../models/siteModel";

export const Mapper = {
  mapToSiteLog: (site: ISite) => {
    return new SiteLog({
      name: site.name,
      location: site.location,
      description: site.description,
      latitude: site.latitude,
      longitude: site.longitude,
      site: site.id,
    });
  },
};
