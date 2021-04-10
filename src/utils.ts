import axios from 'axios';
import { Commit } from './types';

export async function getCommits(): Promise<Array<Commit> | string> {
    try {
        const { data } = await axios.get('https://api.github.com/repos/felibuscaglia/take-home-test-fulltimeforce/commits', {
            headers: {
                authorization: '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'
            }
        });

        const arrayOfCommits: Commit[] = [];

        data.forEach((pullRequest: any) => {

            const { date } = pullRequest.commit.author;
            const { message } = pullRequest.commit;
            const { html_url } = pullRequest;
            const { login, avatar_url } = pullRequest.author;

            let simplifiedCommit: Commit = {
                date,
                message,
                url: html_url,
                authorUsername: login,
                authorProfilePic: avatar_url,
                authorGithubLink: pullRequest.author.html_url
            };

            arrayOfCommits.push(simplifiedCommit);
        });

        return arrayOfCommits;
    } catch (err) {
        return 'Error';
    }
}