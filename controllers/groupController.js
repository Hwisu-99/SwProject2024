// 그룹 관련 기능을 처리하는 컨트롤러 파일 
const { Group, Student, Lecture } = require('../models');

// const getGroup = (req, res) => {
//   const userId = req.user.id;
//   Group.findByUserId(userId, (err, group) => {
//     if (err) return res.status(500).send(err);
//     res.json(group);
//   });
// };

// const getSchedule = (req, res) => {
//   const groupId = req.user.groupId;
//   Group.getSchedule(groupId, (err, schedule) => {
//     if (err) return res.status(500).send(err);
//     res.json({ schedule });
//   });
// };

// module.exports = { getGroup, getSchedule };

const postGroup = (req, res) => {
  Group.create({
    lecture_id: req.params.lecture_id,
    user_id: req.body.user_id,
    name: req.body.name,
  })
    .then(result => {
      res.status(201).send({
        message: "Success to create group with lecture_id=" + req.params.lecture_id
      });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error to create group with lecture_id=" + req.params.lecture_id
      });
      console.log(err);
    });
};

const getGroup = (req, res) => {
  Group.findAll({
    where: {
      id: req.params.group_id,
    }
  })
    .then(result => {
      res.status(201).send(result)
    })
    .catch(err => {
      res.status(500).send();
    });
};

const getGroupEmptyTime = (req, res) => {
  Lecture.findAll({
    where: {
      id: req.user_id,
    },
    order: [['startTime', 'ASC']],
  })
    .then(result => {
      // todo : implement algorithm
      // 일단 자료형 어떻게 들어오는 지 보고 구현 가능
      // 계획
      // 오름차순 정렬이니까, startTime 비교해가면서 공강찾으면서
      // 반복문으로 list에 추가

      // res.status(201).send(result)
    })
    .catch(err => {
      res.status(500).send();
    });
};


module.exports = { postGroup, getGroup, getGroupEmptyTime };

