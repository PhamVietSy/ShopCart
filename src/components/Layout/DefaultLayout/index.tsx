import { ReactNode } from 'react';
import Header from './Header';

import { ContainerDefault, ContentDefault, WrapperDefault } from '../../StyledComponents/Layout';

function DefaultLayout({ children }: { children: ReactNode }) {
    return (
        <WrapperDefault>
            <Header />
            <ContainerDefault>
                <ContentDefault>{children}</ContentDefault>
            </ContainerDefault>
        </WrapperDefault>
    );
}

export default DefaultLayout;
