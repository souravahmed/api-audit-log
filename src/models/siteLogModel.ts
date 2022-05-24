import * as mongoose from "mongoose";
import { ISite } from "./siteModel";

export interface ISiteLog extends ISite {
  site: mongoose.Schema.Types.ObjectId;
  isCreated: Boolean;
}

const siteLogSchema = new mongoose.Schema<ISiteLog>(
  {
    name: String,
    location: String,
    description: String,
    latitude: Number,
    longitude: Number,
    site: { type: mongoose.Schema.Types.ObjectId, ref: "Site" },
    isCreated: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const siteLogModel = mongoose.model<ISiteLog>("SiteLog", siteLogSchema);
export default siteLogModel;
