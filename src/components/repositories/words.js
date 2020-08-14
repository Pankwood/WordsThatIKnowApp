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

async function create(params) {
    const response = await fetch(`${URL_API_WORDS}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify([params]),
    });
    if (response.ok) {
        const resposta = await response.json();
        return resposta;
    }
    throw new Error('Error to save words');
}

export default {
    getAll,
    create,
};