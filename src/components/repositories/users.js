import config from '../../config';
import CustomNotification from '../CustomNotification';
import Content from '../../data/Content/content.json';

const URL_API_USERS = `${config.URL_API}/users`;

async function register(params) {
    //Workaround for no-React function
    //const locale = React.useContext(LocaleContext);
    const locale = localStorage.getItem("language");
    (params)
        ?
        await fetch(`${URL_API_USERS}`, {
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
    register,
};