const { Meeting, Group, Student, Lecture } = require('../models');
const { Op } = require('sequelize');

// 학생이 온라인 미팅생성 버튼을 눌러 그룹 미팅 생성 
const createGroupMeeting = async (req, res) => {
  try {
    const groups = await Student.findOne({
      where: { id: req.params.student_id },
      include: {
        model: Group,
        attributes: ['id'],
      },
    });

    const groupsIds = groups.Groups.map((group) => group.id);
    const group = await Group.findOne({
      where: {
        id: {
          [Op.in]: groupsIds,
        },
        lecture_id: req.params.lecture_id,
      },
    });

    // MeetingLink 생성
    const meetingLink = `https://group_${group.id}_meeting.com/${Math.random().toString(36).substr(2, 9)}`;
    const meeting = await Meeting.create({ link: meetingLink, group_id: group.id }); // 사용자가 속해 있는 그룹에 미팅링크 생성 
    // Meeting 테이블에 create (행 추가)

    res.status(201).json({
      meeting_link: meetingLink
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};


// 학생 아이디(박민수)를 주면 그 그룹(박민수가 속해있는 그룹 ex.1조)이 가지고 있는 미팅링크를 반환
const getGroupMeeting = async (req, res) => {
  try {
    const groups = await Student.findOne({
      where: { id: req.params.student_id },
      include: {
        model: Group,
        attributes: ['id'],
      },
    });

    const groupsIds = groups.Groups.map((group) => group.id);


    const group = await Group.findOne({
      where: {
        id: {
          [Op.in]: groupsIds,
        },
        lecture_id: req.params.lecture_id,
      },
    });

    const meeting_result = await Meeting.findAll({
      where: { Group_id: group.id }
    });
    console.log(meeting_result);

    res.status(201).json({
      meeting_link: meeting_result
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};


module.exports = { createGroupMeeting, getGroupMeeting };