const {Router} = require("express")

const authController = require("../controllers/auth.controller")



const authMiddleware = require("../middlewares/auth.middleware")




const authRouter = Router()


/**
 * @route POST /api/auth/register
 * @desc Register a new user
 * @access Public
 */
authRouter.post("/register", authController.registerUserController  )


/** * @route POST /api/auth/login
 * @desc Login a user
 * @access Public
 */
authRouter.post("/login", authController.loginUserController  )

/** 
 * @route get /api/auth/logout
 * @desc Logout a user
 * @access Public
 */
authRouter.get("/logout", authController.logoutUserController  )



/**
 * @route get /api/auth/get-me
 * @desc get the logged in user details, expect token in the cookie
 * @access private
 */
authRouter.get("/get-me",authMiddleware.authUser, authController.getMeController  )

module.exports = authRouter