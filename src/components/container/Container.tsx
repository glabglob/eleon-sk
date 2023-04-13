import { ReactNode } from "react";

import './container.scss';

interface AppContainerProps {
    children?: ReactNode
}

const AppContainer: React.FC<AppContainerProps> = (props: AppContainerProps) => {
    return (
        <div className="container">
            {props.children}
        </div>
    );
}

export default AppContainer;