const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const path = require("path");
const cors = require("cors");
const hallRegRouts = express.Router();

const users = require("./routes/api/users");
const profile = require("./routes/api/profile");
const posts = require("./routes/api/posts");
const timetable = require("./routes/api/timetable");
const tha = require("./routes/api/tha");
const mun = require("./routes/api/mun");
const nine = require("./routes/api/nine");
const ten = require("./routes/api/ten");
const eleven = require("./routes/api/eleven");
const booking = require("./routes/api/booking");
const hallreg = require("./routes/api/hallreg");

//hallregistration model
const HallRegisterSchema = require("./models/Hallreg");

const app = express();

app.use(cors());

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI || db)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport Config
require("./config/passport")(passport);

// Use Routes
app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/posts", posts);
app.use("/api/tha", tha);
app.use("/api/mun", mun);
app.use("/api/nine", nine);
app.use("/api/ten", ten);
app.use("/api/eleven", eleven);
app.use("/api/booking", booking);
app.use("/api/hallreg", hallreg);

const port = process.env.PORT || 5000;

if (process.env.NODE.ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.json(__dirname, "client", "build", "index.html")); //relative path
  });
}

//hallreg routs

hallRegRouts.route("/").get(function (req, res) {
  HallRegisterSchema.find(function (err, todos) {
    if (err) {
      console.log(err);
    } else {
      res.json(todos);
    }
  });
});

hallRegRouts.route("/:id").get(function (req, res) {
  let id = req.params.id;
  HallRegisterSchema.findById(id, function (err, todo) {
    res.json(todo);
  });
});

hallRegRouts.route("/add").post(function (req, res) {
  let todo = new HallRegisterSchema(req.body);
  todo
    .save()
    .then(todo => {
      res.status(200).json({ todo: "todo added successfully" });
    })
    .catch(err => {
      res.status(400).send("adding new todo failed");
    });
});

hallRegRouts.route("/update/:id").post(function (req, res) {
  HallRegisterSchema.findById(req.params.id, function (err, todo) {
    if (!todo) res.status(404).send("data is not found");
    else todo.hallname = req.body.hallname;
    todo.location = req.body.location;
    todo.seat = req.body.seat;
    todo.projecter = req.body.projecter;
    todo.whiteboard = req.body.whiteboard;
    todo.other = req.body.other;

    todo
      .save()
      .then(todo => {
        res.json("Todo Updated");
      })
      .catch(err => {
        res.status(400).send("Update not possible");
      });
  });
});

app.use("/todos", hallRegRouts);

//server static assets if in production
if (process.env.NODE_ENV === 'production') {
  //set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(port, () => console.log(`Server running on port ${port}`));
