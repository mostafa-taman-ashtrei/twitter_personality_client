import React from 'react';
import { Stack } from '@chakra-ui/react';

import Navbar from './components/NavBar';

const App: React.FC = () => (
    <>
        <Navbar />
        <Stack as="main" align="center" m="10">
            <h1>Hello World!</h1>
        </Stack>
    </>
);

export default App;
