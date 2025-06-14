const connection = require('../config/db');

class IndexController {
  showHome = (req, res) => {
    let sql = 'select * from designer';
    connection.query(sql, (err, result) => {
      if (err) {
        throw err;
      } else {
        console.log('*******', result);
        res.render('index', { result });
      }
    });
  };
}
module.exports = new IndexController();
