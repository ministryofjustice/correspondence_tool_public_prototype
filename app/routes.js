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


// Branching-question
router.get('/web-form/iteration-3/no-page-exists', function (req, res) {
  var category = req.query.category;

  if (category == "question"){
    res.redirect("1-question");

  } else if (category == "comment"){
    res.redirect('1-comment');

  } else if (category == "complaint"){
    res.redirect('1-complaint');
  }
});

// Branching-complaint
router.get('/web-form/iteration-3/no-page-exists', function (req, res) {
  var complaint = req.query.complaint;

  if (complaint == "complaint-moj"){
    res.redirect("2-complaint-moj");

  } else if (category == "complaint-neighbour"){
    res.redirect('2-complaint-neighbour');

  } else if (category == "complaint-other"){
    res.redirect('2-complaint-other');
  }
});






// add your routes here

module.exports = router;
