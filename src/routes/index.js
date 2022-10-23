// const newsRouter = require('./news')
import newsRouter from './news.js'
import siteRouter from './site.js'

export default function route(app) {
    // app.get('/', (req, res) => {
    //     res.render('home')
    // })

    // app.get('/news', (req, res) => {
    //     res.render('news')
    // })
    app.use('/news', newsRouter)

    // app.get('/search', (req, res) => {
    //     // console.log(req.query);
    //     res.render('search')
    // })

    // app.post('/search', (req, res) => {
    //     // console.log(req.body);
    //     res.send('searching...')
    // })
    // app.use('/search', siteRouter)
    app.use('/', siteRouter)
}

