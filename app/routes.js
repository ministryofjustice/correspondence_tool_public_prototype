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

router.get('/web-form/intention', function (req, res) {
  var questiontype = req.query.questiontype;

  if (questiontype == "court"){
    res.redirect("1-court");

  } else if (questiontype == "prison"){
    res.redirect('1-prison');

  } else if (questiontype == "legalaid"){
    res.redirect('1-legalaid');

  } else if (questiontype == "other"){
    res.redirect('1-other');
  } else {
    res.redirect("1-court");
  }
});

module.exports = router;
