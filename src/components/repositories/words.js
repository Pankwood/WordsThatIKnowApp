import config from '../../config';

const URL_API_WORDS = `${config.URL_API}/words`;

function getAll() {
    return fetch(`${URL_API_WORDS}`)
        .then(async (params) => {

            if (params.ok) {
                const response = await params.json();
                return response;
            }

        })
        .catch(error => {
            throw (error);
        });
}

export default {
    getAll,
};