function getSettings(req, res) {

  // Doing some calcs, if error occurred, make sure to return the '500' error status
  var error = false;
  var err = 'error occurred';

  if (error) {
    res.status('500').send(err);
  } else {

    res.send(JSON.stringify({ msg: 'Good Morning!' }));
  }
}


module.exports = {
  getSettings: getSettings,
};
