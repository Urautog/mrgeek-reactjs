const express = require('express');
const methodOverride = require('method-override');
const session = require('express-session');
const cors = require('cors');
const db = require('./src/models');
const isLogin = require('./src/middlewares/isLogin');

const homeRoutes = require('./src/routes/homeRoutes');
const authRoutes = require('./src/routes/authRoutes');
const productRoutes = require('./src/routes/productRoutes');
const adminRoutes = require('./src/routes/adminRoutes');
const userRoutes = require('./src/routes/userRoutes');
const categoryRoutes = require('./src/routes/categoryRoutes');
const cartRoutes = require('./src/routes/cartRoutes');

const app = express();
const port = 5000;

// app.set('view engine', 'ejs');
// app.set('views', __dirname + '/src/views');

// (async () => {
//   await db.sequelize.sync();
// })();

const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
//   res.header(
//     'Access-Control-Allow-Headers',
//     'X-PINGOTHER, Content-Type, Authorization'
//   );
//   app.use(cors());
//   next();
// });

app.use(express.static(__dirname + '/src'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

app.use(
  session({
    secret: 'E-commerce MrGeek',
    resave: false,
    saveUninitialized: true,
    // cookie: { secure: true}
  })
);

// app.use(isLogin);

app.use(homeRoutes);
app.use('/auth', authRoutes);
app.use(productRoutes);
app.use('/admin', adminRoutes);
app.use(userRoutes);
app.use(categoryRoutes);
app.use(cartRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`);
});
