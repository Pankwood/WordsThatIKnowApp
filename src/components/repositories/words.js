import config from '../../config';
import CustomNotification from '../CustomNotification';
import { errorCheckWordsGet, errorCheckWordsPost, errorEmptyValues, successCheckWordsPost } from '../CustomNotification/CustomMessage';

const URL_API_WORDS = `${config.URL_API}/words`;

function getAll() {
    return fetch(`${URL_API_WORDS}`)
        .then((params) => {
            if (params.ok) {
                const response = params.json();
                return response;
            }
            else {
                CustomNotification(errorCheckWordsGet, "error");
            }
        }).catch(() => {
            CustomNotification(errorCheckWordsPost, "error");
        });
}

async function create(params) {
    (params && params.length) ?
        await fetch(`${URL_API_WORDS}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(params),
        }).then((response) => {
            if (response.ok) {
                CustomNotification(successCheckWordsPost, "success");
                const resposta = response.json();
                return resposta;
            }
            else {
                CustomNotification(errorCheckWordsPost, "error");
            }
        })
            .catch(() => {
                CustomNotification(errorCheckWordsPost, "error");
            })
        :
        CustomNotification(errorEmptyValues, "error");
}


export default {
    getAll,
    create,
};