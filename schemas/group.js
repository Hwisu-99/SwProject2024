/**
 * @swagger
 * tags:
 *   name: Group 
 *   description: Group API
 */

/**
 * @swagger
 * /group/{lecture_id}:
 *   post:
 *     tags:
 *       - Group
 *     name: Create Group
 *     description: Create Group
 *     parameters:
 *       - name: user_id
 *         in: body
 *         schema:
 *           type: array
 *           properties:
 *             user_id:
 *               type: integer
 *           example:
 *             user_id: 1
 *       - name: lecture_id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *           example:
 *               lecture_id: 1
 *     responses:
 *       201:
 *         description: Succeess
 *       500:
 *         description: Fail
 */

/**
 * @swagger
 * /group/{group_id}:
 *   get:
 *     tags:
 *       - Group
 *     name: GetGroup
 *     description: Bring the group info
 *     parameters:
 *       - name: group_id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *           example:
 *               group_id: 1
 *     responses:
 *       201:
 *         description: Succeess
 *       500:
 *         description: Fail
 */

/**
 * @swagger
 * /group/{group_id}/empty_time:
 *   get:
 *     tags:
 *       - Group
 *     name: GetEmptyTime
 *     description: get list of common emtpy time of the group
 *     parameters:
 *       - name: group_id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *           example:
 *               group_id: 1
 *     responses:
 *       201:
 *         description: Succeess
 *       500:
 *         description: Fail
 */