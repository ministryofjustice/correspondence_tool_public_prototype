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
// Branching-question iteration

//Clear the session
router.get('web-form/confirmation', function(req, res){
    req.session = null;
    res.render('confirmation');
});

router.post('/web-form/intention', function(req, res) {
  var questiontype = req.body.questiontype;

  req.session.questiontype = questiontype;

  if(questiontype)

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

router.post('/web-form/question', function(req, res) {
  var message = req.body.message;

  if(message === ''){
    message = '<p>Dear Ministry of Justice,</p>' +
    '<p>I would like to make a complaint about the condition of Lambeth County Court.</p>' +
    '<p>Last week I had to attend a hearing at the court, and firstly I found it very hard to find. There was no clear signage from the main roads, and I ended up having to ask several people passing for directions. I ended up arriving slightly late, but was left to wait an extra half an hour anyway. Also the staff at the x ray machine weren\'t very helpful when I asked where I should go.</p>' +
    '<p>Any way the waiting room I had to sit in was in a terrible state. I don\'t think a cleaner had been around the night before, as it was only 10:45am when I arrived and there was empty Redbull cans and crisp wrappers on the seat next to me. It was also full of people and was incredibly hot. I tried to open the windows and they can\'t be opened!!</p>' +
    '<p>This court is very old and dusty and looks like it should be renovated. I really think you should invest some money in this, as people who come to court are already stressed and they don\'t need to be left to feel like no body cares. I also think you should have free wifi available so people can access any documents they need to prepare themselves.</p>' +
    '<p>Please make this court a better place to have to wait, and speak to your staff about being more helpful and friendly, as I don\'t need to deal with rude people when going to court.</p>' +
    '<p>Kindest regards,</p>' +
    '<p>Christina Christensen</p>';
  }

  req.session.message = message;

  res.redirect('2-personal-details');
});

router.post('/web-form/summary', function(req, res) {
  var title = req.body.title,
  firstName = req.body.first_name,
  lastName = req.body.last_name,
  email = req.body.email,
  address = req.body.address;

  //Set some defaults
  if(firstName ===""){
    firstName = 'John';
  }

  if(lastName ===""){
    lastName = 'Smith';
  }

  if(email ===""){
    email = 'John.Smith@example.com'
  }

  req.session.title= title;
  req.session.firstName = firstName;
  req.session.lastName = lastName;
  req.session.fullName = firstName + ' ' + lastName;
  req.session.email = email;
  req.session.address = address;

  res.render('web-form/3-summary', {
    'email' : req.session.email,
    'fullname' : req.session.fullName,
    'question' : req.session.message,
    'address'  : req.session.address
  });

});


module.exports = router;
