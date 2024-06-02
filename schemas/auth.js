/**
 * @swagger
 * tags:
 *   name: Auth 
 *   description: User API
 */

/**
 * @swagger
 * /auth/join:
 *   post:
 *     tags:
 *       - Auth
 *     name: Register User Info
 *     description: Register User Info
 *     parameters:
 *       - name: body
 *         in: body
 *         schema:
 *           type: object
 *           properties:
 *             eclassID:
 *               type: string
 *               maxLength: 30
 *             name:
 *               type: string
 *               maxLength: 15
 *             eclassPW:
 *               type: string
 *           example:
 *             eclassID: eclassID 
 *             name: Tom
 *             password : password!
 *     responses:
 *       201:
 *         description: Succeess to register
 *       500:
 *         description: Fail
 *  
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
 *               type: eclassID
 *               maxLength: 30
 *             eclassPW:
 *               type: eclassPW
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
 * /auth/{user_id}:
 *   put:
 *     tags:
 *       - Auth
 *     name: Update User Info
 *     description: Update User Info 
 *     parameters:
 *       - name: user_id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *           example:
 *               user_id: 1
 *       - name: Authorization
 *         in: header
 *         description: JWT Access token. (bearer type)
 *         schema:
 *           type: bearer
 *           properties:
 *             AccessToken:
 *               type: string
 *           example:
 *             Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RlbWFpbEBnbWFpbC5jb20iLCJuaWNrIjoidGVzdG5pY2siLCJpYXQiOjE2NDEyMjA0MzcsImV4cCI6MTY0NjQwNDQzNywiaXNzIjoiQ09NUF9TRVJWRVIifQ.c4-ldhGRv9cv4JqW6bJItnKxXdUYG7CjF3nAt8JpgUY
 *       - name: body
 *         in: body
 *         schema:
 *           type: object
 *           properties:
 *             email:
 *               type: string
 *               maxLength: 30
 *             nick:
 *               type: string
 *               maxLength: 15
 *             password:
 *               type: string
 *             provider:
 *               type: string
 *             snsId:
 *               type: string
 *           example:
 *             email: testemail@gmail.com
 *             nick: testnick
 *             password : change_password!
 *     responses:
 *       201:
 *         description: Succeess to update
 *       500:
 *         description: Fail
 *  
 *   delete:
 *     tags:
 *       - Auth
 *     name: Delete User Info
 *     description: Delete User Info
 *     parameters:
 *       - name: user_id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *           example:
 *               user_id: 1
 *       - name: Authorization
 *         in: header
 *         description: JWT Access token. (bearer type)
 *         schema:
 *           type: bearer
 *           properties:
 *             AccessToken:
 *               type: string
 *           example:
 *             Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RlbWFpbEBnbWFpbC5jb20iLCJuaWNrIjoidGVzdG5pY2siLCJpYXQiOjE2NDEyMjA0MzcsImV4cCI6MTY0NjQwNDQzNywiaXNzIjoiQ09NUF9TRVJWRVIifQ.c4-ldhGRv9cv4JqW6bJItnKxXdUYG7CjF3nAt8JpgUY
 *       - name: body
 *         in: body
 *         schema:
 *           type: object
 *           properties:
 *             email:
 *               type: string
 *               maxLength: 30
 *             nick:
 *               type: string
 *               maxLength: 15
 *             password:
 *               type: string
 *             provider:
 *               type: string
 *             snsId:
 *               type: string
 *           example:
 *             email: testemail@gmail.com
 *             nick: testnick
 *             password : change_password!
 *     responses:
 *       201:
 *         description: Succeess to update
 *       500:
 *         description: Fail
 */

/**
 * @swagger
 * /refresh:
 *   get:
 *     tags:
 *       - Auth
 *     name: Refresh token
 *     description: Refresh token since access token is expired
 *     parameters:
 *       - name: Authorization
 *         in: header
 *         description: JWT Access token. (bearer type)
 *         schema:
 *           type: bearer
 *           properties:
 *             AccessToken:
 *               type: string
 *           example:
 *             Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RlbWFpbEBnbWFpbC5jb20iLCJuaWNrIjoidGVzdG5pY2siLCJpYXQiOjE2NDEyMjA0MzcsImV4cCI6MTY0NjQwNDQzNywiaXNzIjoiQ09NUF9TRVJWRVIifQ.c4-ldhGRv9cv4JqW6bJItnKxXdUYG7CjF3nAt8JpgUY
 *       - name: refresh
 *         in: header
 *         description: JWT Refresh token. (string)
 *         schema:
 *           type: string
 *           properties:
 *             RefreshToken:
 *               type: string
 *           example:
 *             refreshtokenexampletodochange
 */

/**
 * @swagger
 * /auth/email:
 *   post:
 *     tags:
 *       - Auth
 *     name: Sending email
 *     description: Sending email for verityfication
 *     parameters:
 *       - name: body
 *         in: body
 *         schema:
 *           type: object
 *           properties:
 *             email:
 *               type: string
 *               maxLength: 30
 *           example:
 *             email: youremailaddress@gmail.com
 *     responses:
 *       201:
 *         description: Succeess to update
 */





/**
 * @swagger
 * /auth/earning/{user_id}:
 *   post:
 *     tags:
 *       - Auth
 *     name: Create User earning
 *     description: Create User earning 
 *     parameters:
 *       - name: user_id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *           example:
 *               user_id: 1
 *       - name: body
 *         in: body
 *         schema:
 *           type: object
 *           properties:
 *             total_evaluation_price:
 *               type: integer
 *             total_invest_price:
 *               type: integer
 *             date:
 *               type: string
 *           example:
 *             total_evaluation_price: 1000
 *             total_invest_price: 10000
 *             date : "20220106"
 *     responses:
 *       201:
 *         description: Succeess to Create
 *       500:
 *         description: Fail
 *   get:
 *     tags:
 *       - Auth
 *     name: Create User earning
 *     description: Create User earning 
 *     parameters:
 *       - name: user_id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *           example:
 *               user_id: 1
 *       - name: date
 *         in: query
 *         description: "serarching date"
 *         schema:
 *           type: string
 *           example:
 *               date: "20220106"
 *     responses:
 *       201:
 *         description: Succeess to Create
 *       500:
 *         description: Fail
 */

/**
 * @swagger
 * /auth/earning/{user_id}/{earning_id}:
 *   put:
 *     tags:
 *       - Auth
 *     name: Create User earning
 *     description: Create User earning 
 *     parameters:
 *       - name: user_id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *           example:
 *               user_id: 1
 *       - name: earning_id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *           example:
 *               earning_id: 1
 *       - name: body
 *         in: body
 *         schema:
 *           type: object
 *           properties:
 *             total_evaluation_price:
 *               type: integer
 *             total_invest_price:
 *               type: integer
 *             date:
 *               type: string
 *           example:
 *             total_evaluation_price: 1000
 *             total_invest_price: 10000
 *             date : "20220106"
 *     responses:
 *       201:
 *         description: Succeess
 *       500:
 *         description: Fail
 *   delete:
 *     tags:
 *       - Auth
 *     name: Create User earning
 *     description: Create User earning 
 *     parameters:
 *       - name: user_id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *           example:
 *               user_id: 1
 *       - name: earning_id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *           example:
 *               earning_id: 1
 *     responses:
 *       201:
 *         description: Succeess to Create
 *       500:
 *         description: Fail
 */