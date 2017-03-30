import express from 'express';

import url from 'url';

const app = express();
const PORT = 5000;

app.use(express.static('./static'));
app.set('view engine', 'ejs');
app.set('views', './dist/temp');

app.use((req, res, next) =>{
  const reqUrlObj = url.parse(req.url, true);
  const reqPathName = reqUrlObj.pathname;
  const reqQueryObj = reqUrlObj.query;
  console.log(reqUrlObj, '------');
  if (reqPathName == '/' || reqPathName == '/index') {
    return res.render('index.ejs');
  } else if(reqPathName=='/login') {
    return res.render('login.ejs');
  } else {
    return res.render('notfond.ejs');
  }
});

app.listen(PORT, function() {
  console.log(`app is listening at ${PORT}!`);
});
