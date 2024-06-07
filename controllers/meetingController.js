const { Meeting, Group, Student } = require('../models');

// 학생이 온라인 미팅생성 버튼을 눌러 그룹 미팅 생성 
const createGroupMeeting = async (req, res) => {
  // todo
  const studentId = req.params.student_id;
  // const studentId = req.query.student_id;
  console.log(studentId);

  try {
    const student_result = await Student.findByPk(studentId, {
      include: [{
        model: Group,
        through: { attributes: [] }
      }]
    });

    // 지금은 student가 속해있는 첫번째 그룹으로  .....  하지만 student가 속한 그룹이 하나 이상이라면??
    // student가 하나의 그룹에만 속해 있다면 문제가 안됨 (학생이 하나의 그룹에만 속해있을 때 정상 작동)

    console.log(student_result.Groups[0]);
    console.log(student_result.Groups[0].id); 

    if (!student_result.Groups) {
      return res.status(404).json({ message: 'Group not found' });
    }

    // MeetingLink 생성
    const meetingLink = `https://group_${student_result.Groups[0].id}_meeting.com/${Math.random().toString(36).substr(2, 9)}`;
    const meeting = await Meeting.create({ link: meetingLink, GroupId: student_result.Groups[0].id }); // 사용자가 속해 있는 그룹에 미팅링크 생성 
    // Meeting 테이블에 create (행 추가)

    res.status(201).json({ 
      message: '학생 ' + student_result.name + '가 속해있는 그룹 ' + student_result.Groups[0].name + '에 meetingLink 추가 성공', 
      student_who_made_meeting : student_result.name,
      meeting_link: meetingLink 
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};


// 학생 아이디(박민수)를 주면 그 그룹(박민수가 속해있는 그룹 ex.1조)이 가지고 있는 미팅링크를 반환
const getGroupMeeting = async (req, res) => {
  // todo
  // const studentId = req.query.student_id;
  const studentId = req.params.student_id;

  try {
    const student_result = await Student.findByPk(studentId, {
      include: [{
        model: Group,
        through: { attributes: [] }
      }]
    });

    console.log(student_result);
    console.log(student_result.Groups[0]);

    const meeting_result = await Meeting.findAll({ where: { GroupId: student_result.Groups[0].id } });
    console.log(meeting_result);

    res.status(201).json({ 
      message: '학생 ' + student_result.name + '가 속해있는 그룹 ' + student_result.Groups[0].name + '의 미팅링크 반환 성공',
      student_name: student_result.name,
      student_in_group: student_result.Groups[0].name,
      meeting_link: meeting_result 
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};


module.exports = { createGroupMeeting, getGroupMeeting };