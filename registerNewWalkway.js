const mysql = require('mysql');

const con = mysql.createConnection({
  host: "walkway-database.cluster-c8snh8eettaw.ap-northeast-2.rds.amazonaws.com",
  user: "user_walkway",
  password: "dkagh1..",
  database: "walkwaydb"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO walkway (walkway_id, theme_night, theme_morning, theme_environment, theme_food, theme_animal, theme_date, walkway_name, walkway_review, walkway_range, walkway_image, walkway_point1, walkway_point2, duration, created_time, walkway_path, walkway_distance, account_id, walkway_use_count) VALUES (3, 1, 0, 0, 0, 0, 0, 'Best Walkway', 'I want to go there again', 5, 'bestwalkway.png', Point(37.576314, 127.034812), Point(37.576557, 127.034702), 65, 2020-09-28, '127.03333, 127.03334, 127.03335', 4.5, 2, 1)";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});
