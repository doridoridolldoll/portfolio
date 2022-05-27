const express = require('express')
const path = require('path')

const app = express()
const _path = path.join(__dirname, './dist')
app.set('port', process.env.PORT ??= 12010)
const PORT = app.get('port')                // 항상 set 뒤에 get

app.use(express.static(_path))
app.listen(PORT, () => {
  console.log(`nodemon Server Running at http://127.0.0.1:${PORT}/`);
  console.log(`http://127.0.0.1:${PORT}/join`);
  console.log(`http://127.0.0.1:${PORT}/login`);
})