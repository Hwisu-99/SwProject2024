/**
 * @swagger
 * tags:
 *   name: Student 
 *   description: Student API
 */

/**
 * @swagger
 * /student/{student_id}:
 *   get:
 *     tags:
 *       - Student
 *     name: get a student info
 *     description: get a student info
 *     parameters:
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
 *         description: Succeess to login
 *       500:
 *         description: Fail
 */

/**
 * @swagger
 * /student/{student_id}:
 *   delete:
 *     tags:
 *       - Student
 *     name: delete a student
 *     description: delete a student
 *     parameters:
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
 *         description: Succeess to delete
 *       404:
 *         description: student not found
 *       500:
 *         description: Fail
 */
