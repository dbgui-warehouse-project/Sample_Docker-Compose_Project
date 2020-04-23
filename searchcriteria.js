//get all family safe items
router.get('/getit/inventory',function(req,res){
        con.query('SELECT * FROM inventory WHERE familySafe = TRUE',function(err,result,fields){
          if(err) throw err;
          res.end(JSON.stringify(result));
   });
});


//get all items that are packagable
router.get('/getit/inventory',function(req,res){
       con.query('SELECT * FROM inventory WHERE availableToPackage = TRUE',function(err,result,fields){
         if(err) throw err;
         res.end(JSON.stringify(result));
    });
});


//get all items ordered by price
router.get('getit/inventory',function(req,res){
         con.query('SELECT * FROM inventory ORDER BY price',function(err,result,fields){
        if(err) throw err;
        res.end(JSON.stringify(result));
     });
});


//get all items below certain price
router.get('getit/inventory',function(req,res){
        var price = req.param('price');
        con.query('SELECT * FROM inventory WHERE price < ?',function(err,result,fields){
           if(err) throw err;
           res.end(JSON.stringify(result));
   });
}); 


//get all items in a certain category
router.get('/getit/inventory',function(req,res){
      var category = req.param('itemType');
      con.query('SELECT * FROM inventory WHERE itemType = ?',function(err,result,fields){
         if(err) throw err;
         res.end(JSON.stringify(result));
      });
});


//get all items that need to be stocked
router.get('/getit/inventory',function(req,res){
   con.query('SELECT * FROM inventory WHERE quantity < 10',function(err,result,fields){
          if(err) throw err;
          res.end(JSON.stringify(result));
    });
});

//select available items in price range
router.get('/getit/inventory',function(req,res){
	var price = req.param('price')
	con.query('SELECT * FROM inventory WHERE quantity > 0 AND price < ?',function(err,result,fields){
		if(err) throw err;
		res.end(JSON.stringify(result));
	}
}
