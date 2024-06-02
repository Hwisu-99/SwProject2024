// 그룹 관련 기능을 처리하는 컨트롤러 파일 
const Group = require('../models/Group');

// 동작과 관련된 함수를 process로 묶음

const group_process = {
  // 그룹 정보 조회 (사용자가 속한 그룹의 아이디<user_group_id> 를 사용해서 사용자가 속한 그룹의 멤버들 출력)
  getGroup : (req, res) => {
    const user = req.user;
    const userGroupId = req.user.user_group_id;
    console.log(user);
    console.log(userGroupId);
    Group.findByGroupId(userGroupId, (err, group) => {
      if (err) return res.status(500).send(err);
      res.json(group);
    });
  },

  // 그룹 시간표 조회
  getSchedule : (req, res) => {
    const user = req.user;
    const groupId = req.user.user_group_id; // ? req.user.userGroupId
    console.log(user);
    console.log(groupId);

    Group.getSchedule(groupId, (err, schedule) => {
      if (err) return res.status(500).send(err);
      res.json({schedule});
    });
  }
};


module.exports = group_process;
