// 그룹 관련 기능을 처리하는 컨트롤러 파일 
const { Group, Student, Lecture } = require('../models');

const postGroup = (req, res) => {
  Group.findOne({
    where: {
    }
  })
    .then(result => {
      if (result != null) {
        return res.status(501).send({
          message: "Already have the group"
        });
      } else {
        Group.create({

        })
          .then(result => {
            res.status(201).send({
              message: "Success to create Group"
            });
          })
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error to create Group"
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

