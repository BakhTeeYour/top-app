import {IFooter} from "./Footer.props";
import cn from 'classnames';
import styles from './Footer.module.css';

export const Footer = ({...props}: IFooter) => {
    return (
        <div {...props}>
            Footer
        </div>
    );
};