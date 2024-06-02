const db = require('../config/db');

const Group = {
  findByGroupId: (userGroupId, callback) => {
    const query = `
      SELECT ug.id, ug.name, u.name AS member
      FROM user_groups ug
      JOIN group_members gm ON ug.id = gm.group_id
      JOIN users u ON gm.user_id = u.id
      WHERE gm.group_id = ?
    `;
    db.query(query, [userGroupId], callback);
  },
  getSchedule: (groupId, callback) => {
    const query = `
      SELECT s.time_slot
      FROM schedules s
      JOIN group_members gm ON s.user_id = gm.user_id
      WHERE gm.group_id = ?
    `;
    db.query(query, [groupId], callback);
  }
};

module.exports = Group;
