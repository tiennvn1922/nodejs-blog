import Course from '../models/Courses.js';

class SiteController {
    // [GET] /
    index(req, res, next) {
        // Course.find({}, function (err, courses) {
        //     if (!err) {
        //         res.json(courses);
        //     } else {
        //         res.status(400).json({ error: 'error!' });
        //     }
        // });

        Course.find({})
            .then((courses) => {
                courses = courses.map((course) => course.toObject());
                res.render('home', { courses });
            })
            .catch(next);

        // res.render("home");
    }

    // [GET] /search
    search(req, res) {
        res.render('search');
    }
}

export default new SiteController();
