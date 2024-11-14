import { auth } from "express-oauth2-jwt-bearer";

const jwtCheck = auth({
  audience: "http://localhost:8000",
  issuerBaseURL: "https://dev-ijuln2yaq8wcxu10.us.auth0.com/api/v2/",
  tokenSigningAlg: "RS256",
});

export default jwtCheck;
