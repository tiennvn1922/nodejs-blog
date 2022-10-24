import Course from '../models/Courses.js';

class SiteController {
    // [GET] /
    index(req, res) {
        Course.find({}, function (err, courses) {
            if (!err) {
                res.json(courses);
            } else {
                res.status(400).json({ error: 'error!' });
            }
        });

        // res.render("home");
    }

    // [GET] /search
    search(req, res) {
        res.render('search');
    }
}

export default new SiteController();
