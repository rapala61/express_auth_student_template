# Steps to use the template:

The best way to use it is to fork it and then use it in your own projects.
Once you have it cloned in your localhost from your fork, make sure you implement the next steps:

1. Run `npm install`
2. create a new file at the root of your project named `.env`. The contents should be: `JWT_SECRET=THE_SUPER_SECRET_FOR_YOUR_JWT_TOKENS`. This is the token used to encrypt your authorization tokens when a user successfully logs in.
3. Change the mongo database to the one you are using in `index.js` line: 14.

 `mongoose.connect( process.env.MONGOLAB_URI || "mongodb://localhost/your_database_name_goes_here" );
`
