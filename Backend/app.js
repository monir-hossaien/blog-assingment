import cors from 'cors'
import helmet from 'helmet'
import { rateLimit } from 'express-rate-limit'
import express from "express";
import routes from "./src/Routes/api.js";
import cookieParser from "cookie-parser";
const app = express();

// Global middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cookieParser());

// cors setup
app.use(cors({
    origin: " http://localhost:5173", // Allow frontend domain
    credentials: true,
}));
app.use(helmet())

// // Trust the first proxy
// app.set('trust proxy', 1);

// route setup
app.use("/api/v1", routes);

// api limiter
// const limiter = rateLimit({windowMs: 1000 * 1000, limit: 100,});
// app.use(limiter)

app.get("/", (req, res) => {
    res.send("Hello from Express on Vercel!")
});

//unknown routes
app.use((req,res,next)=>{
    res.status(404).json({
        status:"error",
        message:"Routes Not Found",
    });
    next()
})


app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});


// development error handler
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
// app.use(function(err, req, res, next) {
//     res.status(err.status || 500);
//     res.render('error', {
//         message: err.message,
//         error: {}
//     });
// });

export default app;