import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface ITag extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	size?: 'sm' | 'md',
	children: ReactNode,
	color?: 'ghost' | 'red' | 'gray' | 'green' | 'primary'
	href?: string
}