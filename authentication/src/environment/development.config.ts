export const config = {
  name: 'AuthenticationService',
  baseAPIRoute: 'api',
  port: process.env.PORT || 3001,
  db: {
    uri:
      process.env.MONGO_URI ||
      'mongodb+srv://burak:505035@cluster0.vwvqbk0.mongodb.net/',
  },
  jwt_key: process.env.JWT_KEY || 'BG',
};
