var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {

  res.render('index');

});


// Example routes - feel free to delete these

// Passing data into a page

router.get('/examples/template-data', function (req, res) {

  res.render('examples/template-data', { 'name' : 'Foo' });

});

// Branching

router.get('/examples/over-18', function (req, res) {

  // get the answer from the query string (eg. ?over18=false)
  var over18 = req.query.over18;

  if (over18 == "false"){

    // redirect to the relevant page
    res.redirect("/examples/under-18");

  } else {

    // if over18 is any other value (or is missing) render the page requested
    res.render('examples/over-18');

  }

});

// add your routes here
// Branching-question iteration 3
router.get('/web-form/intention', function (req, res) {
  var category = req.query.category;

  if (category == "question"){
    res.redirect("1-question");

  } else if (category == "comment"){
    res.redirect('1-comment');

  } else if (category == "complaint"){
    res.redirect('1-complaint');
  } else {
    res.redirect("1-question");
  }
});

// Branching-complaint iteration 3
router.get('/web-form/complaint', function (req, res) {
  var complaint = req.query.complaint;

  if (complaint == "complaint-moj"){
    res.redirect("2-complaint-moj");

  } else if (complaint == "complaint-neighbour"){
    res.redirect('2-complaint-neighbour');

  } else if (complaint == "complaint-other"){
    res.redirect('2-complaint-other');
  } else {
    res.redirect("2-complaint-moj");
  }
});


module.exports = router;
