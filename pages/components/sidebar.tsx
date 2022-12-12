import {
    Box,
    List,
    ListItem,
    ListIcon,
    Divider,
    Center,
    LinkBox,
    LinkOverlay
} from '@chakra-ui/layout'
import {
    MdHome,
    MdSearch,
    MdLibraryMusic,
    MdPlaylistAdd,
    MdFavorite
} from 'react-icons/md'
import Image from 'next/image';
import Link from 'next/link';

const navMenu = [
    {
        name: 'Home',
        icon: MdHome,
        route: '/',
    },
    {
        name: 'Search',
        icon: MdSearch,
        route: '/search',
    },
    {
        name: 'Your Libraary',
        icon: MdLibraryMusic,
        route: '/Library',
    },
]

const musicMenu = [
    {
        name: 'Create Playlist',
        icon: MdPlaylistAdd,
        route: '/',
    },
    {
        name: 'Favorites',
        icon: MdFavorite,
        route: '/favorites',
    },
]

const playlists = new Array(30).fill(1).map((_, i) => `Playlist ${i + 1}`)

const Sidebar = () => {
    return (
        <Box width="100%"
            height="calc(100vh - 100px)"
            bg="black"
            paddingX="5px"
            color="gray"
        >
            <Box paddingY="20px" height="100%">
                <Box width="120px" marginBottom="20px" paddingX="20px">
                    <Image alt='' src="/logo.svg" height={60} width={120} />
                </Box>
                <Box marginBottom='20px'>
                    <List spacing={2}>
                        {navMenu.map((menu: any) => (
                            <ListItem paddingX='20px' fontSize='16px' key={menu.name}>
                                <LinkBox>
                                    <Link href={menu.route}>
                                        <LinkOverlay>
                                            <ListIcon as={menu.icon}
                                                color="white"
                                                marginRight='20px' />
                                            {menu.name}
                                        </LinkOverlay>
                                    </Link>
                                </LinkBox>
                            </ListItem>
                        ))}
                    </List>
                </Box>
                <Box marginTop="20px">
                    <List spacing={2}>
                        {musicMenu.map((menu: any) => (
                            <ListItem paddingX='20px' fontSize='16px' key={menu.name}>
                                <LinkBox>
                                    <Link href={menu.route}>
                                        <LinkOverlay>
                                            <ListIcon as={menu.icon}
                                                color="white"
                                                marginRight='20px' />
                                            {menu.name}
                                        </LinkOverlay>
                                    </Link>
                                </LinkBox>
                            </ListItem>
                        ))}
                    </List>
                </Box>
                <Divider color="gray.800" />
                <Box height="66%" overflow="auto" paddingY="20px">
                    <List spacing={2}>
                        {playlists.map((playlist) => (
                            <ListItem paddingX="20px" key={playlist}>
                                <LinkBox>
                                    <Link href="/" passHref>
                                        <LinkOverlay>
                                            {playlist}
                                        </LinkOverlay>
                                    </Link>
                                </LinkBox>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Box>
        </Box>
    );
};

export default Sidebar;