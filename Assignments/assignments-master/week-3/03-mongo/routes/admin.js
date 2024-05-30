const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();


// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username
    const password = req.body.password

    //check if user with the username already exist
    let value = await Admin.findOne({
        username, password
    })
    if (!value) {
        await Admin.create({
            username: username,
            password: password
        })
        res.status(200).json({
            msg: "Admin User Created Successfully"
        })

    } else {
        res.status(403).json({
            msg: "username already exists"
        })
    }

    // Admin.create({
    //     username,password //same as admin.create above
    // })
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const desc = req.body.description;
    const price = req.body.price;
    console.log(typeof (price))
    const imageLink = req.body.imageLink;
    const username = req.headers.username;
    const password = req.headers.password;



    const newCourse = await Course.create({
        title: title,
        description: desc,
        price: price,
        imageLink: imageLink

    })
    console.log(newCourse)
    res.status(200).json({
        msg: "Course added successfully",
        courseId: newCourse._id
    })




});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
    Course.find({})
    .then(function(response){
        res.json({
            courses:response
        })
    })
});

module.exports = router;