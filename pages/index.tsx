import {Button, Htag, Ptag, Rating, Tag} from '../components';
import {useState} from "react";

export default function Home(): JSX.Element {
	const [rating, setRating] = useState<number>(4);
	return (
		<>
			<Htag tag='h1'>Hello world</Htag>
			<Ptag size='sm'>some text in ptag</Ptag>
			<Ptag>some text in ptag</Ptag>
			<Ptag size='xl'>some text in ptag</Ptag>
			<Button appearance='primary' arrow='rigth'>Button</Button>
			<Button appearance='ghost' arrow='rigth'>Button</Button>

			<Tag size='sm' color='ghost'>Small</Tag>
			<Tag size='sm' color='primary'>medium</Tag>
			<Tag size='sm' color='red'>medium</Tag>
			<Tag size='sm' color='green'>medium</Tag>
			<Tag size='sm' color='gray'>medium</Tag>
			<Rating rating={rating} isEditable setRating={setRating}/>
		</>
	);
}
