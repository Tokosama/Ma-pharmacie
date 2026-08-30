import {Redis} from "ioredis";
import "dotenv/config";

const redisUrl = process.env.REDIS_URL;

if (!redisUrl) {
  throw new Error("Missing Enviremment Variable");
}

const redis = new Redis(redisUrl);

export default redis;
