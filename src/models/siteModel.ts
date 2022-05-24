import * as mongoose from "mongoose";
import { ISiteLog } from "./siteLogModel";

export interface ISite {
  id: mongoose.Schema.Types.ObjectId;
  name: String;
  location: String;
  description: String;
  latitude: Number;
  longitude: Number;
  siteLogs: Array<mongoose.Schema.Types.ObjectId>;
  createdAt: Date;
  updatedAt: Date;
}

const siteSchema = new mongoose.Schema<ISite>(
  {
    name: String,
    location: String,
    description: String,
    latitude: Number,
    longitude: Number,
    siteLogs: [{ type: mongoose.Schema.Types.ObjectId, ref: "SiteLog" }],
  },
  { timestamps: true }
);

const siteModel = mongoose.model<ISite>("Site", siteSchema);
export default siteModel;
