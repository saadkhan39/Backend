import dotenv from "dotenv";
import express from "express";
import passport from "passport";
import morgan from "morgan";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";

dotenv.config();

const app = express();

app.use(passport.initialize());

app.get('/', (req, res) => {
    res.send('Hello World');
})



// Configure Passport to use Google OAuth 2.0 strategy
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    (accessToken, refreshToken, profile, done) => {
      // Here, you would typically find or create a user in your database
      // For this example, we'll just return the profile
      return done(null, profile);
    }
  )
);

// Route to initiate Google OAuth flow
app.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

// Callback route
app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    session: false,
     failureRedirect: '/'
  }),
  (req, res) => {
   console.log(req.user)
        res.send('Google authentication successful');
  }
);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});