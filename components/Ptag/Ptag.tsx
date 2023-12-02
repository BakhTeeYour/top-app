import styles from './Ptag.module.css';
import { IPtag } from './Ptag.props';
import cn from 'classnames';

export const Ptag = ({ size = 'md', children, className, ...props }: IPtag) => {
	return (
		<p className={cn(styles.ptag, className, {
			[styles.sm]: size === 'sm',
			[styles.md]: size === 'md',
			[styles.xl]: size === 'xl',
		})}
		{...props}
		>
			{children}
		</p>
	)
}