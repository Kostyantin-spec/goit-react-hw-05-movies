import { CirclesWithBar } from 'react-loader-spinner';

import css from './loader.module.css';

export const Loader = () => {
    return (
        <div className={css.loader}>
            <div className={css.loader}>
                <CirclesWithBar
                    higth="100"
                    width="100"
                    color="#4fa94d"
                    wrapperStyle={{}}
                    visible={true}
                    outerCircleColor=""
                    innerCircleColor=""
                    barColor=""
                    ariaLabel="circles-with-bar-loading"
                />
            </div>
        </div>
    );
};