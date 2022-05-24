import { Request, Response, NextFunction } from "express";
import Site from "../models/siteModel";
import { SiteService } from "../services/siteService";

export const createSite = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, location, description, latitude, longitude } = req.body;
    const site = new Site({
      name,
      location,
      description,
      latitude,
      longitude,
    });
    const newSite = await SiteService.createSite(site);
    return res.status(201).send(newSite);
  } catch (error) {
    next(error);
  }
};

export const updateSite = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { siteId } = req.params;
    const site = await SiteService.findById(siteId);
    site?.set(req.body);
    const updateSite = await SiteService.updateSite(site, { _id: siteId });
    return res.status(200).send(updateSite);
  } catch (error) {
    next(error);
  }
};
