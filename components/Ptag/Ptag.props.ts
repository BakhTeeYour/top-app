import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface IPtag extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
	size?: 'sm' | 'md' | 'xl',
	children: ReactNode,
}