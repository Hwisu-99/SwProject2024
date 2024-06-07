/**
 * @swagger
 * tags:
 *   name: Meeting 
 *   description: Meeting API
 */


/**
 * @swagger
 * /meetings/open/{lecture_id}/{student_id}:
 *   post:
 *     tags:
 *       - Meeting
 *     name: 사용자가 속한 그룹의 온라인 미팅을 생성 
 *     description: 사용자가 속한 그룹의 온라인 미팅을 생성 
 *     parameters:
 *       - name: lecture_id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *           example: 1
 *       - name: student_id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *           example: 1
 *       - name: Authorization
 *         in: header
 *         required: true
 *         description: JWT Access token.
 *         schema:
 *           type: string
 *           example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoia2ltIiwiZWNsYXNzSUQiOiJzb21lX2VjbGFzc0lEMSIsImlhdCI6MTcxNzY2NTcwOSwiZXhwIjoxNzE3NjY5MzA5fQ.smC250xL5mMiU8E9s3GHW5hesAfc3-iCqZ8k9N2haHs"
 *     responses:
 *       201:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 name:
 *                   type: string
 *                 description:
 *                   type: string
 *       500:
*         description: Fail
 */



/**
 * @swagger
 * /meetings/{lecture_id}/{student_id}:
 *   get:
 *     tags:
 *       - Meeting
 *     name: 사용자가 속한 그룹에 온라인 미팅이 있다면 미팅 링크를 반환 
 *     description: 사용자가 속한 그룹에 온라인 미팅이 있다면 미팅 링크를 반환 
 *     parameters:
 *       - name: lecture_id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *           example: 1
 *       - name: student_id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *           example: 1
 *       - name: Authorization
 *         in: header
 *         required: true
 *         description: JWT Access token.
 *         schema:
 *           type: string
 *           example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoia2ltIiwiZWNsYXNzSUQiOiJzb21lX2VjbGFzc0lEMSIsImlhdCI6MTcxNzY2NTcwOSwiZXhwIjoxNzE3NjY5MzA5fQ.smC250xL5mMiU8E9s3GHW5hesAfc3-iCqZ8k9N2haHs"
 *     responses:
 *       201:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 name:
 *                   type: string
 *                 description:
 *                   type: string
 *       500:
*         description: Fail
 */