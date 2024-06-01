// 그룹 관련 기능을 처리하는 컨트롤러 파일 
const Group = require('../models/Group');

const getGroup = (req, res) => {
  const userId = req.user.id;
  Group.findByUserId(userId, (err, group) => {
    if (err) return res.status(500).send(err);
    res.json(group);
  });
};

const getSchedule = (req, res) => {
  const groupId = req.user.groupId;
  Group.getSchedule(groupId, (err, schedule) => {
    if (err) return res.status(500).send(err);
    res.json({ schedule });
  });
};

module.exports = { getGroup, getSchedule };
