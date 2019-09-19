import axios from 'axios';

export default class PostService {
    constructor() {
        this.url = 'http://localhost:4000/api';
    }

    getPosts() {
        const thisWeek = new Date().getWeek();

        return axios.get(
            this.url.concat('/posts')
        ).then((response) => {
            return response.data.map(getMappedPosts);
        }).catch((error) => {
            throw new Error(error.message);
        });

        //////////

        function getMappedPosts(post) {
            const weekNumber = new Date(parseInt(post.time * 1000)).getWeek();
            const date = thisWeek === weekNumber ? 'This week' : `${thisWeek - weekNumber} weeks ago`

            return {
                ...post,
                date: date
            }
        }
    }
}
