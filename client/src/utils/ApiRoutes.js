require('dotenv').config();

export const HOST = process.env.HOST;

const AUTH_ROUTE = `${HOST}/api/auth`;

export const CHECK_USER_ROUTE = `${AUTH_ROUTE}/check-user`;