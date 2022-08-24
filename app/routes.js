const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

module.exports = router


// Re-direct from multiple  radios 
router.post('/sprint-0-beta/page1', function (req, res) {

    let levytype = req.session.data['levytype']

    console.log(req.session.data['levytype'])

    //Option 1
    if (levytype === 'Under £3 million') {
        res.redirect('/sprint-0-beta/page1b')
    }
    //Option 2
    else if (levytype === 'Over £3 million') {
        res.redirect('/sprint-0-beta/page2')
    }

    //end
})






// Re-direct from multiple  radios 
router.post('/sprint-0-beta/page3blevy', function (req, res) {

    let remove = req.session.data['remove']

    console.log(req.session.data['remove'])

    //Option 1
    if (remove === 'Yes') {
        res.redirect('/sprint-0-beta/page2')
    }
    //Option 2
    else if (remove === 'No') {
        res.redirect('/sprint-0-beta/page3levy')
    }

    //end
})



// Re-direct from multiple  radios 
router.post('/sprint-0-beta/page3bnonlevy', function (req, res) {

    let remove = req.session.data['remove']

    console.log(req.session.data['remove'])

    //Option 1
    if (remove === 'Yes') {
        res.redirect('/sprint-0-beta/page2')
    }
    //Option 2
    else if (remove === 'No') {
        res.redirect('/sprint-0-beta/page3nonlevy')
    }

    //end
})




// Re-direct from multiple  radios 
router.post('/sprint-0-beta/page3a', function (req, res) {

    let levytype = req.session.data['levytype']

    console.log(req.session.data['levytype'])

    //Option 1
    if (levytype === 'Under £3 million') {
        res.redirect('/sprint-0-beta/page3nonlevy')
    }
    //Option 2
    else if (levytype === 'Over £3 million') {
        res.redirect('/sprint-0-beta/page3levy')
    }

    //end
})





// Re-direct from multiple  radios 
router.post('/sprint-0-beta/page3levy', function (req, res) {

    let another = req.session.data['another']

    console.log(req.session.data['another'])

    //Option 1
    if (another === 'Yes') {
        res.redirect('/sprint-0-beta/page2')
    }
    //Option 2
    else if (another === 'No') {
        res.redirect('/sprint-0-beta/page4')
    }

    //end
})



// Re-direct from multiple  radios 
router.post('/sprint-0-beta/page3nonlevy', function (req, res) {

    let anothers = req.session.data['anothers']

    console.log(req.session.data['anothers'])

    //Option 1
    if (anothers === 'Yes') {
        res.redirect('/sprint-0-beta/page2')
    }
    //Option 2
    else if (anothers === 'No') {
        res.redirect('/sprint-0-beta/page4')
    }
      //Option 3
      else {
        res.redirect('/sprint-0-beta/page4')
    }

    //end
})





//---------------------------------------------- V 1.1 ----------------------------------------//





// Re-direct from multiple  radios 
router.post('/sprint-1-beta/page1', function (req, res) {

    let levytype = req.session.data['levytype']

    console.log(req.session.data['levytype'])

    //Option 1
    if (levytype === 'Under £3 million') {
        res.redirect('/sprint-1-beta/page1b')
    }
    //Option 2
    else if (levytype === 'Over £3 million') {
        res.redirect('/sprint-1-beta/page2')
    }

    //end
})






// Re-direct from multiple  radios 
router.post('/sprint-1-beta/page3blevy', function (req, res) {

    let remove = req.session.data['remove']

    console.log(req.session.data['remove'])

    //Option 1
    if (remove === 'Yes') {
        res.redirect('/sprint-1-beta/page2')
    }
    //Option 2
    else if (remove === 'No') {
        res.redirect('/sprint-1-beta/page3levy')
    }

    //end
})



// Re-direct from multiple  radios 
router.post('/sprint-1-beta/page3bnonlevy', function (req, res) {

    let remove = req.session.data['remove']

    console.log(req.session.data['remove'])

    //Option 1
    if (remove === 'Yes') {
        res.redirect('/sprint-1-beta/page2')
    }
    //Option 2
    else if (remove === 'No') {
        res.redirect('/sprint-1-beta/page3nonlevy')
    }

    //end
})




// Re-direct from multiple  radios 
router.post('/sprint-1-beta/page3a', function (req, res) {

    let levytype = req.session.data['levytype']

    console.log(req.session.data['levytype'])

    //Option 1
    if (levytype === 'Under £3 million') {
        res.redirect('/sprint-1-beta/page3nonlevy')
    }
    //Option 2
    else if (levytype === 'Over £3 million') {
        res.redirect('/sprint-1-beta/page3levy')
    }

    //end
})





// Re-direct from multiple  radios 
router.post('/sprint-1-beta/page3levy', function (req, res) {

    let another = req.session.data['another']

    console.log(req.session.data['another'])

    //Option 1
    if (another === 'Yes') {
        res.redirect('/sprint-1-beta/page2')
    }
    //Option 2
    else if (another === 'No') {
        res.redirect('/sprint-1-beta/page4')
    }

    //end
})



// Re-direct from multiple  radios 
router.post('/sprint-1-beta/page3nonlevy', function (req, res) {

    let anothers = req.session.data['anothers']

    console.log(req.session.data['anothers'])

    //Option 1
    if (anothers === 'Yes') {
        res.redirect('/sprint-1-beta/page2')
    }
    //Option 2
    else if (anothers === 'No') {
        res.redirect('/sprint-1-beta/page4')
    }
      //Option 3
      else {
        res.redirect('/sprint-1-beta/page4')
    }

    //end
})

