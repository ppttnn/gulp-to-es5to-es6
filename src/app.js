import express from 'express';

const app = express();
app.use((req, res, next) =>{
  return res.end('Hello word123!!!');
});
app.listen(5000, function() {
  console.log('app is listening at 5000!');
});
