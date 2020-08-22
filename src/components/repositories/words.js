import config from '../../config';
import CustomNotification from '../CustomNotification';

const URL_API_WORDS = `${config.URL_API}/words`;

function getAll() {
    return fetch(`${URL_API_WORDS}`)
        .then(async (params) => {

            if (params.ok) {
                const response = await params.json();
                return response;
            }
            CustomNotification("Error to GET known words from server", "error");

        })
        .catch(error => {
            CustomNotification("Error to GET known words from server", "error");
        });
}

async function create(params) {
    const response = await fetch(`${URL_API_WORDS}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(params),
    });
    if (response.ok) {
        const resposta = await response.json();
        CustomNotification("Words included in your dictionary", "success");
        return resposta;
    }
    CustomNotification("Error to POST known words to server. ", "error");
}

export default {
    getAll,
    create,
};