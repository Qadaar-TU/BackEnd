* alle filme aus dem jahr 2000  = db.movies.find({year: "2000"})
* alle filme aus den jahren 1994 oder 2001 = db.movies.find({$or: [{year: "2001"}, {year: "1994"}]})
* alle filme aus den jahren 1994 oder 2001 sortiert nach titel absteigend = db.movies.find({$or: [{year: "2001"}, {year: "1994"}]}).sort({title: -1})
* alle filme aus den jahren 1994 oder 2001 sortiert nach bewertung aufsteigen = db.movies.find({$or: [{year: "2001"}, {year: "1994"}]}).sort({rate: 1})
* wieviele filme haben eine bewertung von genau 9.0  =  db.movies.find({rate: "9.0"})
* alle filme-titel + bewertung vom George Lucas = db.movies.find({director: "George Lucas"}, {title: 1, rate: 1})
* alle filme-titel + bewertung + genre vom Martin Scorsese, aufsteigend nach bewertung sortiert = db.movies.find({director: "Martin Scorsese"}, {title: 1, rate: 1, genre: 1}).sort({rate: 1}) 
* wieviele filme gabs in den 90ern?  === db.movies.find({year: {$gte: "1990", $lt: "2000"}}).count()
* alle comedy movies = db.movies.find({genre: "Comedy"}).count()
* alle filme mit bewertung größer als 8.5 (achtung bewertung ist ein string...)  ==== db.movies.find({rate: {$gt: "8.5"}})




