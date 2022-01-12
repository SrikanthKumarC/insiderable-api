module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'fb3e5759c18a906894d6422852926ad2'),
  },
});
