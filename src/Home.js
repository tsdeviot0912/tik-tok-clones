import { FormattedMessage } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import { ChangeLanguageApp } from './store/actions/appActions';

function Home() {
    const language = useSelector((state) => state.app.language);

    const disPatch = useDispatch();

    const Changelanguage = (language) => {
        disPatch(ChangeLanguageApp(language));
    };

    console.log('check language :', language);

    return (
        <div>
            <h2>
                <FormattedMessage id="home-header.speciality" />
            </h2>
            <div>
                <button onClick={() => Changelanguage('vi')}>VI</button>
                <button onClick={() => Changelanguage('en')}>EN</button>
            </div>
        </div>
    );
}

export default Home;
