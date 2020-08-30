var express = require('express');
var router = express.Router();
var moment = require('moment');

/* GET home page. */
module.exports = (db) => {

  router.get('/', function (req, res, next) {
    let sql = `SELECT * FROM bread`
    db.query(sql, (err, data) => {
      if (err) res.status(500).json(err)
      for (let i = 0; i < data.rows.length; i++) {
        data.rows[i].date = moment(data.rows[i].date).format('YYYY-MM-DD')
      }
      res.json(data.rows)
    })
  });

  router.post('/', function (req, res) {
    let sql = 'INSERT INTO bread(string,integer,float,boolean,date) VALUES($1,$2,$3,$4,$5)'
    let values = [req.body.string, parseInt(req.body.integer), parseFloat(req.body.float), JSON.parse(req.body.boolean), req.body.date]
    db.query(sql, values, (err) => {
      if (err) return res.status(500).json({
        error: true,
        message: err
      })
      res.json({
        error: false,
        message: 'ADD COMPLETE'
      });
    })
  })

  router.put('/:id', function (req, res) {
    let sql = 'UPDATE bread SET string=$1, integer=$2, float=$3, boolean=$4, date=$5 WHERE id=$6'
    let values = [req.body.string, parseInt(req.body.integer), parseFloat(req.body.float), JSON.parse(req.body.boolean), req.body.date, parseInt(req.params.id)]
    db.query(sql, values, (err, data) => {
      if (err) return res.status(500).json({
        error: true,
        message: err
      })
      res.status(201).json({
        error: false,
        message: 'UPDATE COMPLETE'
      });
    })
  })

  router.delete('/:id', function (req, res, next) {

    let sql = 'DELETE FROM bread WHERE id=$1'
    let values = [parseInt(req.params.id)]
    db.query(sql, values, (err, data) => {
      if (err) return res.status(500).json({
        error: true,
        message: err
      })
      res.status(201).json({
        error: false,
        message: 'DELETE COMPLETE'
      });
    })
  })

  return router;
}
