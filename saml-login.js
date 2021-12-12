const passport = require('passport');
const passportSaml = require('passport-saml');

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

// SAML strategy for passport -- Single IPD
const strategy = new passportSaml.Strategy(
  {
    entryPoint: process.env.SSO_ENTRYPOINT,
    issuer: process.env.SSO_ISSUER,
    callbackUrl: process.env.SSO_CALLBACK_URL,
    cert: process.env.SSO_CERT,
  },
  (profile, done) => done(null, profile),
);

passport.use(strategy);

module.exports = passport;
