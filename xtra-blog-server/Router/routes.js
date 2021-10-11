const authRoute = require("./authRoute");
const authorRoute = require("./authorRoute");
const uploadRoute = require("./uploadRoute");
const postRoute = require("./postRoute");
const searchRoute = require("./searchRoute");

const router = [
  {
    path: "/auth",
    handler: authRoute,
  },
  {
    path: "/author",
    handler: authorRoute,
  },
  {
    path: "/upload",
    handler: uploadRoute,
  },
  {
    path: "/post",
    handler: postRoute,
  },
  {
    path: "/search",
    handle: searchRoute,
  },
  {
    path: "/",
    handler: (req, res) => {
      res.send("data success");
    },
  },
];

module.exports = (app) => {
  router.forEach((r) => {
      if(r.path === '/'){
        app.get('/', (req, res)=>{
            console.log('responces get');
        })
      }else{
         app.use(r.path, r.handler)
      }
  });
};
