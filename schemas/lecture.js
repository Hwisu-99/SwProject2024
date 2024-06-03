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
 *           example:
 *               lecture_id: 1
 *     responses:
 *       201:
 *         description: Succeess
 *       500:
 *         description: Fail
 */