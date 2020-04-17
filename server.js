// /api/getit/producttypes
router.get(‘/getit/inventory/{itemid}’,function(req,res){
    var itemName = req.param('itemName');
	var itemDescription = req.param('itemDescription');
	var numInStock = req.param('numinStock');
	var price = req.param('price');
	var typeID = req.param('typeID');
	var familySafe = req.param('familySafe');
	var availableToPackage = req.param('availableToPackage');

            con.query(“SELECT * FROM inventory WHERE numinstock > 0","function(err,result,fields)){
          If (err) throw err;
          res.end(JSON.stringify(result));
      });
});


// /api/getit/producttypes
// filter by types
router.get(‘/getit/inventory’,function(req,res){
    var itemName = req.param('itemName');
	var itemDescription = req.param('itemDescription');
	var numInStock = req.param('numinStock');
	var price = req.param('price');
	var typeID = req.param('typeID');
	var familySafe = req.param('familySafe');
	var availableToPackage = req.param('availableToPackage');






         con.query(“SELECT * FROM inventory ORDER BY price”,function(err,result,fields){
        If(err) throw err;
        res.end(JSON.stringify(result));
     });
});    



