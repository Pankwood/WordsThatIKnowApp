import config from '../../config';
import CustomNotification from '../CustomNotification';
import Content from '../../data/Content/content.json';

const URL_API_WORDS = `${config.URL_API}/words`;

function getAll() {
    //Workaround for no-React function
    //const locale = React.useContext(LocaleContext);
    const locale = localStorage.getItem("language");
    return (
        fetch(`${URL_API_WORDS}`)
            .then((params) => {
                if (params.ok) {
                    const response = params.json();
                    return response;
                }
                else {
                    CustomNotification(Content.language[locale].CustomMessage02, "error");
                }
            }).catch(() => {
                CustomNotification(Content.language[locale].CustomMessage02, "error");
            })
    )
}

async function create(params) {
    //Workaround for no-React function
    //const locale = React.useContext(LocaleContext);
    const locale = localStorage.getItem("language");
    (params && params.length)
        ?
        await fetch(`${URL_API_WORDS}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(params),
        }).then((response) => {
            if (response.ok) {
                CustomNotification(Content.language[locale].CustomMessage04, "success");
                return response.json();
            }
            else {
                CustomNotification(Content.language[locale].CustomMessage01, "error");
            }
        })
            .catch(() => {
                CustomNotification(Content.language[locale].CustomMessage01, "error");
            })
        :
        CustomNotification(Content.language[locale].CustomMessage03, "error");
}


export default {
    getAll,
    create,
};