const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const username = req.body.username
    const password = req.body.password

    //check if user with the username already exist
    let value = await User.findOne({
        username, password
    })
    if (!value) {
        await User.create({
            username: username,
            password: password
        })
        res.status(200).json({
            msg: "User Created Successfully"
        })

    } else {
        res.status(403).json({
            msg: "username already exists"
        })
    }
});

router.get('/courses', (req, res) => {
    // Implement listing all courses logic
    Course.find({})
    .then(function(response){
        res.json({
            courses:response
        })
    })
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const id = req.params.courseId;
    const username = req.headers.username;
    await User.updateOne({
        username:username
    },{
        "$push":{
            purchasedCourses: id
        }
    })
    res.json({
        msg:"Purchase Complete"
    })

});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const username = req.headers.username;

    const user = await User.findOne({username:username});

    console.log(user.purchasedCourses);
    const course = await Course.find({
        _id:{
            "$in":user.purchasedCourses
        }
    })
    res.json({
        courses: course
    })

});

module.exports = router