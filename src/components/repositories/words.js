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

async function create(objetoDoVideo) {
    const respostaDoServidor = await fetch(`${URL_API_WORDS}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify([objetoDoVideo]),
    });
    if (respostaDoServidor.ok) {
        const resposta = await respostaDoServidor.json();
        return resposta;
    }
    throw new Error('Não foi possível cadastrar os dados :(');
}

export default {
    getAll,
    create,
};