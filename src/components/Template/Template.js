import { TabBar } from '../TabBar';
import { AppBar } from '../AppBar';

export const Template = ({ children }) => {
    return (
        <>
        <AppBar />
        {children}
        <TabBar />
        </>
    )
}