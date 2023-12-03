import {ISidebar} from "./Sidebar.props";
import cn from 'classnames';
import styles from './Sidebar.module.css';

export const Sidebar = ({...props}: ISidebar) => {
    return (
        <div {...props}>
            Sidebar
        </div>
    );
};