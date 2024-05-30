import { dataService } from '../services/dataService.js';

class dataController {
    async search(req, res) {

        const data = await dataService.search(req.body.url, req.body.word)

        res.json({data})
    }

}

export default new dataController();