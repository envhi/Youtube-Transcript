import * as yup from 'yup';
import { YoutubeTranscript } from 'youtube-transcript';

export const validateData = async (req, res, next) => {
    try {
        let dataSchema = yup.object().shape({
            url: yup.string().url().required(),
            word: yup.string().required()
        })

        const dataBody = {
            url: req.body.url,
            word: req.body.word
        }

        await dataSchema.validate(dataBody)

        await YoutubeTranscript.fetchTranscript(req.body.url);

        next()

    } catch (error) {
        return res.json({error: error.message})
    }
}


// console.log(dataSchema.validate(xereka))