// 그룹 관련 기능을 처리하는 컨트롤러 파일 
const Group = require('../models/Group');

// 동작과 관련된 함수를 process로 묶음

const group_process = {
  // 그룹 정보 조회
  getGroup : (req, res) => {
    const userId = req.user.id;
    Group.findByUserId(userId, (err, group) => {
      if (err) return res.status(500).send(err);
      res.json(group);
    });
  },

  // 그룹 시간표 조회
  getSchedule : (req, res) => {
    const groupId = req.user.groupId;
    Group.getSchedule(groupId, (err, schedule) => {
      if (err) return res.status(500).send(err);
      res.json({ schedule });
    });
  }
};



module.exports = group_process;
