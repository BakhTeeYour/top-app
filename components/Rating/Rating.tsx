import {useEffect, useState, KeyboardEvent} from 'react';
import styles from './Rating.module.css';
import {IRating} from './Rating.props';
import cn from 'classnames';
import StarIcon from './star.svg';

export const Rating = ({isEditable = false, rating, setRating = () => {}, ...props}: IRating) => {
    const [ratingArr, setRatingArr] = useState<JSX.Element[]>(new Array(5).fill(<></>));

    useEffect(() => {
        constructRating(rating);
    }, [rating]);


    const constructRating = (currRating: number) => {
        const updArr = ratingArr.map((_: JSX.Element, i: number) => {
            return (
                <span
                    className={
                        cn(styles.star, {
                            [styles.filled]: i < currRating,
                            [styles.editable]: isEditable})}
                    onMouseEnter={() => changeDisplay(i + 1)}
                    onMouseLeave={() => changeDisplay(rating)}
                    onClick={() => onClick(i + 1)}>
                    <StarIcon
                        tabIndex={isEditable ? 0 : -1}
                        onKeyDown={(e: KeyboardEvent<SVGAElement>) => isEditable && handleSpace(i + 1, e)}/>
                </span>
            );
        });
        setRatingArr(updArr);
    };

    const changeDisplay = (i: number) => {
        if (!isEditable) {
            return;
        }
        constructRating(i);
    };

    const onClick = (i: number) => {
        if (!isEditable || !setRating) {
            return;
        }
        setRating(i);
    };

    const handleSpace = (i: number, evt: KeyboardEvent<SVGAElement>) => {
        if (evt.code !== 'Space' || !setRating) {
            return;
        }
        setRating(i);
    };

    return (
        <div {...props}>
            {ratingArr.map((r, i) => (<span key={i}>{r}</span>))}
        </div>
    );
};