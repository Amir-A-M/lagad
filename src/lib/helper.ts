import { headers } from "next/headers";
import redisClient from "./redis";

export function getIp() {
  let forwardedFor = headers().get('x-forwarded-for')
  let realIp = headers().get('x-real-ip')
  if (forwardedFor) return forwardedFor.split(',')[0].trim()
  if (realIp) return realIp.trim()
  return null;
}


/**
 * @returns error message for limited user OR false
 */
export const isRateLimited = async () => {
  const ip = getIp()
  if (!ip)
    return "IP پیدا نشد!!"

  const currentTry = Number(await redisClient.GET(ip)) || 0

  const suspensionKey = ip + '-suspension';
  const suspensionTries = Number(await redisClient.GET(suspensionKey)) || 0

  if (suspensionTries > 15)
    return "موقتا دسترسی شما به سیستم مسدود شده است!"

  if (currentTry > 4)
    return "محدودیت نرخ ترافیک برای شما فعال شده است! لطفاً پس از ۱ دقیقه مجدداً تلاش نمایید."

  await Promise.all([
    redisClient.SET(ip, currentTry + 1, {
      EX: 60,
    }),
    redisClient.SET(suspensionKey, currentTry + 1, {
      EX: 60 * 60 * 5,
    }),
  ])

  return false
}
