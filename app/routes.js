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
router.post('/sprint-0-beta/page3b', function (req, res) {

    let remove = req.session.data['remove']

    console.log(req.session.data['remove'])

    //Option 1
    if (remove === 'Yes') {
        res.redirect('/sprint-0-beta/page2')
    }
    //Option 2
    else if (remove === 'No') {
        res.redirect('/sprint-0-beta/page3a')
    }

    //end
})