//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here

router.post('/current/droids', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var droids = req.session.data['droids']

  // Check whether the variable matches a condition
  if (droids == "yes"){
    // Send user to next page
    res.redirect('/current/check-answers')
  } else {
    // Send user to ineligible page
    res.redirect('/current/who-with')
  }

})


router.post('/current/jedi', function (req, res) {

    res.redirect('/current/jedi-trick')
})
