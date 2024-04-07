import { createClient } from "redis";

const redisClient = createClient({

})

redisClient.on('error', (err) => {
  console.log(err);
})

if (!redisClient.isOpen) {
  redisClient.connect()
}

export default redisClient