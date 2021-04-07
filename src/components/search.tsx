import React from 'react';
import {
    Input, InputLeftElement, InputGroup,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

interface props {
    username: string,
    setUsername: React.Dispatch<React.SetStateAction<string>>
    // eslint-disable-next-line no-unused-vars
    handleSubmit: (e: React.FormEvent) => Promise<void>
}

const Search: React.FC<props> = ({ username, setUsername, handleSubmit }: props) => (
    <form onSubmit={handleSubmit}>
        <InputGroup w="sm">
            <InputLeftElement
                pointerEvents="none"
            >
                <SearchIcon color="green.500" />
            </InputLeftElement>

            <Input
                w="md"
                boxShadow="lg"
                variant="filled"
                placeholder="twitter handle i.e @john doe"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
        </InputGroup>
    </form>
);

export default Search;
