import dotenv from 'dotenv';

dotenv.config();

const config = {
  port: process.env.PORT,
  react_app_url: process.env.REACT_APP_URL,
  user_service_url: process.env.USER_SERVICE_URL,
};

export default config;