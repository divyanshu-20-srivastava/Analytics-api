import { Redis } from '@upstash/redis'

export const redis = new Redis({
  url: 'https://us1-optimum-octopus-42456.upstash.io',
  token: process.env.REDIS_KEY!,
})