module.exports = {
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  mongoURI: process.env.MONGO_URI,
  cookieKey: process.env.COOKIE_KEY,
  redirectAOut: 'https://redhand.herokuapp.com/auth/google/callback',
  redirect: 'https://redhand.herokuapp.com',
  awsKey: process.env.AWS_ACCESS_KEY_ID,
  awsSecret: process.env.AWS_SECRET_ACCESS_KEY,
  Bucket: process.env.S3_BUCKET_NAME,
};
