import { Request, Response, NextFunction } from "express";
import Site from "../models/siteModel";
import { SiteService } from "../services/siteService";
import _ from "lodash";

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
    await SiteService.updateSite(site, { _id: siteId });
    const updatedSite = await SiteService.findById(siteId);
    const createdSite = _.find(updatedSite?.siteLogs, (siteLog) => {
      return siteLog.isCreated;
    });
    return res
      .status(200)
      .send({ ...updatedSite, createdUser: createdSite.name });
  } catch (error) {
    next(error);
  }
};
