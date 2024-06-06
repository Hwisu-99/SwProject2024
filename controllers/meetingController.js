const { Meeting, Group, Student } = require('../models');

const createGroupMeeting = async (req, res) => {
  // todo
  const studentId = req.params.lecture_id;
  // const studentId = req.query.student_id;
  console.log(studentId);

  try {
    const result = await Student.findByPk(studentId, {
      include: [{
        model: Group,
        through: { attributes: [] }
      }]
    });

    // 지금은 student가 속해있는 첫번째 그룹으로  .....  하지만 student가 속한 그룹이 하나 이상이라면??
    console.log(result.Groups[0]);
    console.log(result.Groups[0].id);

    if (!result.Groups) {
      return res.status(404).json({ message: 'Group not found' });
    }

    // MeetingLink 생성
    const meetingLink = `https://group_${result.Groups[0].id}_meeting.com/${Math.random().toString(36).substr(2, 9)}`;
    const meeting = await Meeting.create({ link: meetingLink, GroupId: result.Groups[0].id }); // 사용자가 속해 있는 그룹에 미팅링크 생성 
    // Meeting 테이블에 create (행 추가)

    res.status(201).json({ message: '그룹' + result.Groups[0].id + '에 meetingLink 추가 성공', link: meetingLink });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};


// 사용자 아이디를 주면 그 그룹이 가지고 있는 미팅링크를 반환
const getGroupMeeting = async (req, res) => {
  // todo
  // const studentId = req.query.student_id;
  const studentId = req.params.lecture_id;

  // 먼저 학생이 속한 그룹 찾아 
  try {
    const result = await Student.findByPk(studentId, {
      include: [{
        model: Group,
        through: { attributes: [] }
      }]
    });

    console.log(result.Groups[0]);

    const meeting_result = await Meeting.findAll({ where: { GroupId: result.Groups[0].id } });
    console.log(meeting_result);

    res.status(201).json({ message: '사용자가 속해있는 그룹의 미팅링크 반환 성공', meeting_link: meeting_result });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};


module.exports = { createGroupMeeting, getGroupMeeting };