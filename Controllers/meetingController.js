const Meeting = require('../models/Meeting');

const createMeeting = (req, res) => {
  const userId = req.user.id;
  const meetingLink = `https://meeting.com/${Math.random().toString(36).substr(2, 9)}`;

  Meeting.create({ userId, link: meetingLink }, (err, meeting) => {
    if (err) return res.status(500).send(err);
    res.json({ link: meetingLink });
  });
};

module.exports = { createMeeting };
