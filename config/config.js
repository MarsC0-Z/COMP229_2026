 const config = {
 env: process.env.NODE_ENV || 'development', 
 port: process.env.PORT || 3000,
 jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key", 
 mongoUri: process.env.MONGODB_URI ||"mongodb+srv://amarulivermore2_db_user:RZzry04eYL5cQuYD@cluster0.dl0seom.mongodb.net/Skeleton?appName=Cluster0"||
 process.env.MONGO_HOST ||
 'mongodb://' + (process.env.IP || 'localhost') + ':' + 
(process.env.MONGO_PORT || '27017') +
 '/mernproject' 
 }
 export default config
