/**
 * @swagger
 * tags:
 *   name: Lecture 
 *   description: Lecture API
 */

/**
 * @swagger
 * /lecture:
 *   post:
 *     tags:
 *       - Lecture
 *     name: Create Lecture
 *     description: Create Lecture
 *     parameters:
 *       - name: body
 *         in: body
 *         schema:
 *           type: object
 *           properties:
 *             name:
 *               type: string
 *             classRoom:
 *               type: string 
 *             credit:
 *               type: integer
 *             lectureNumber:
 *               type: integer
 *             professor_id:
 *               type: integer
 *             major_id:
 *               type: integer
 *     responses:
 *       201:
 *         description: Succeess
 *       500:
 *         description: Fail
 */

/**
 * @swagger
 * /lecture/{lecture_id}:
 *   get:
 *     tags:
 *       - Lecture
 *     name: Bring Lecture Info
 *     description: Bring Lecture Info
 *     parameters:
 *       - name: lecture_id
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
 *       200:
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
 *               example:
 *                 id: 1
 *                 name: "Introduction to Programming"
 *                 description: "This is a lecture about the basics of programming."
 *       500:
 *         description: Fail
 */

/**
 * @swagger
 * /lecture/time/{lecture_id}:
 *   get:
 *     tags:
 *       - Lecture
 *     name: Bring Lecture Time Info
 *     description: Bring Lecture Time Info
 *     parameters:
 *       - name: lecture_id
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
 *       200:
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
 *               example:
 *                 id: 1
 *                 name: "Introduction to Programming"
 *                 description: "This is a lecture about the basics of programming."
 *       500:
 *         description: Fail
 */


/**
 * @swagger
 * /lecture/{lecture_id}/{student_id}:
 *   post:
 *     tags:
 *       - Lecture
 *     name: Add student_lecture
 *     description: Add student_lecture.
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
 *       200:
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