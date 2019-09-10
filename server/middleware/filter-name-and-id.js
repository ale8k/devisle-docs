const Tutorial = require("../models/tutorialSchema");

/**
 * Gets all tutorialNames and Ids, then sets
 * the response.payLoad to this.
 */
function filterNamesAndIds(req, res, next) {
    Tutorial.find({}, {tutorialName: 1}, (err, resp) => {
        res.payLoad = resp;
        next();
    });
}

module.exports = filterNamesAndIds;