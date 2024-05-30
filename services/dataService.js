import { YoutubeTranscript } from 'youtube-transcript';

export class dataService {

    static async search(url, word) {

        try {
            const response = await YoutubeTranscript.fetchTranscript(url);

            const arr = [];

            response.find((item) => {
                if (item.text.includes(word)) {
                    arr.push(item)
                }
            })

            const data = [];

            arr.forEach((item) => {
                let seconds = String(item.offset).split('.')[0]

                seconds = Number(seconds) - 3;

                const hours = Math.floor(Number(seconds) / 3600)
                const secondsLeft = Number(seconds % 3600);
                const minutes = Math.floor(secondsLeft / 60)

                const time = 'hour: ' + String(hours) + ' minute: ' + String(minutes);

                console.log(time, ' asdsad')

                data.push({
                    text: item.text,
                    time: time,
                    url: url + '&t=' + seconds + 's'
                })
            })

            return data;
        } catch (error) {
            console.log('parou no service')
        }

    }
}