import { useState } from "react";
import Form from "./Form";
import styled from "styled-components";
import Note from "./Note";

const Main = () => {
	const [todos, setTodos] = useState([]);

	//  complete Fn

	const deleteHandler = (id) => {
		const deletes = todos.filter((item) => item.id !== id);
		setTodos(deletes);
	};
	const deleteAllHandler = () => {
		setTodos([]);
	};

	return (
		<>
			<StyledContainer>
				<StyledHeader>
					<Form delAll={deleteAllHandler} setTodos={setTodos} />
				</StyledHeader>
				{/* End header */}
				<StyledMain>
					{todos.length > 0 ? (
						todos.map((item) => (
							<Note delet={deleteHandler} key={item.id} {...item} />
						))
					) : (
						<Div>Пока задачов нет</Div>
					)}
				</StyledMain>
			</StyledContainer>
		</>
	);
};

export default Main;
const StyledContainer = styled.div`
	width: 100%;
	height: 100vh;
	border: 1px solid black;
`;
const StyledHeader = styled.header`
	width: 80%;
	min-height: 100px;
	border: 1px solid black;
	margin: 0 auto;
	display: flex;
	align-items: center;
`;
const StyledMain = styled.main`
	width: 80%;
	min-height: 400px;
	border: 1px solid black;
	margin: 0 auto;
`;
const Div = styled.div`
	width: 90%;
	min-height: 50px;
	border: 1px solid black;
	text-align: center;
	padding-top: 16px;
	font-style: italic;
	margin: 10px auto;
`;
