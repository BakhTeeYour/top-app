import {IHeader} from "./Header.props";
import cn from 'classnames';
import styles from './Header.module.css';

export const Header = ({...props}: IHeader) => {
    return (
        <div {...props}>
            Header
        </div>
    );
};