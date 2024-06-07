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
 *             id:
 *               type: STRING
 *               maxLength: 40
 *             password:
 *               type: STRING
 *               maxLength: 40
 *           example:
 *             id: some_eclassID1
 *             password : some_password!
 *     responses:
 *       201:
 *         description: Succeess to login
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   description: JWT token
 *       401:
 *         description: Fail to finding ID
 *       402:
 *         description: Wrong Password
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