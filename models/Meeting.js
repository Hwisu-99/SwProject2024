const db = require('../config/db');

const Meeting = {
  create: (meeting, callback) => {
    const query = 'INSERT INTO meetings (user_id, link) VALUES (?, ?)';
    db.query(query, [meeting.userId, meeting.link], callback);
  }
};

module.exports = Meeting;
