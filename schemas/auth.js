/**
 * @swagger
 * tags:
 *   name: Auth 
 *   description: User API
 */

/**
 * @swagger
 * /auth/login:
 *   post:
 *     tags:
 *       - Auth
 *     name: Login
 *     description: Login
 *     parameters:
 *       - name: body
 *         in: body
 *         schema:
 *           type: object
 *           properties:
 *             eclassID:
 *               type: STRING
 *               maxLength: 30
 *             eclassPW:
 *               type: STRING
 *               maxLength: 100
 *           example:
 *             eclassID: eclassID
 *             password : password!
 *     responses:
 *       201:
 *         description: Succeess to login
 *       500:
 *         description: Fail
 */

/**
 * @swagger
 * /auth/logout:
 *   get:
 *     tags:
 *       - Auth
 *     name: Logout
 *     description: Logout

 *     responses:
 *       201:
 *         description: Succeess to logout
 *       500:
 *         description: Fail
 */

/**
 * @swagger
 * /auth/{user_id}/{lecture_id}:
 *   get:
 *     tags:
 *       - Auth
 *     name: PostLecIntoUser
 *     description: post a lectre info ito a user
 *     parameters:
 *       - name: user_id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *           example:
 *               user_id: 1
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