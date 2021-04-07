import React, { useState } from 'react';
import { Stack, Spinner } from '@chakra-ui/react';
import axios from 'axios';

import Navbar from './components/NavBar';
import Search from './components/search';
import Analysis from './components/Analysis';
import { AnalysisData } from './types';

const App: React.FC = () => {
    const [username, setUsername] = useState<string>('');
    const [loading, setloading] = useState<boolean>(false);
    const [showAnalysis, setShowAnalysis] = useState<boolean>(false);
    const [data, setData] = useState<AnalysisData[]>([]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setloading(true);
        try {
            const res = await axios.post('http://localhost:8080/tweets/', { username });
            console.log(res.data.data);
            setloading(false);
            setShowAnalysis(true);
            setData(res.data.data);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <>
            <Navbar />
            <Stack as="main" align="center" m="5">
                <Search
                    username={username}
                    setUsername={setUsername}
                    handleSubmit={handleSubmit}
                />
                {
                    // eslint-disable-next-line no-nested-ternary
                    !loading
                        ? showAnalysis
                            ? <Analysis data={data} />
                            : null
                        : <Spinner />
                }
            </Stack>
        </>
    );
};

export default App;
