import { useRef, useState } from "react";
import styled from "styled-components";
import Button from "./Button";
import propTypes from "prop-types";
import { RiDeleteBin3Fill } from "react-icons/ri";
import { BsCheck2All } from "react-icons/bs";

const Form = ({ setTodos, delAll, handlerComp }) => {
	const [textValue, setTextValue] = useState("");
	const [textValueData, setTextValueData] = useState("");

	const inputText = useRef();
	const inputTextData = useRef();

	const submitHundler = (e) => {
		e.preventDefault();
		const valueText = {
			id: Math.floor(Math.random() * 999999),
			title: textValue.trim(),
			date: textValueData,
			isComlete: false,
		};
		console.log(valueText);
		setTodos((prev) => [...prev, valueText]);
		setTextValue("");
		setTextValueData("");
	};
	const hundlerKeyUp = (e) => {
		if (e.key === "Enter") {
			inputTextData.current.focus();
		}
	};
	return (
		<StyledContainer>
			<form onSubmit={submitHundler}>
				<StyledInput
					required
					onKeyUp={hundlerKeyUp}
					onChange={(e) => setTextValue(e.target.value)}
					ref={inputText}
					type="text"
				/>
				<StyledInputData
					onChange={(e) => setTextValueData(e.target.value)}
					onKeyUp={hundlerKeyUp}
					ref={inputTextData}
					type="date"
				/>
				<Button
					width={"medium"}
					height={"medium"}
					type={"submit"}
					variant={"add"}>
					Add
				</Button>
			</form>
			<Button
				onClick={delAll}
				width={"smallXl"}
				height={"medium"}
				variant={"danger"}>
				{/* all delete */}
				<RiDeleteBin3Fill onClick={() => handlerComp(true)} />
			</Button>
			<Button width={"smallXl"} height={"medium"} variant={"edite"}>
				{/* Complete all */}
				<BsCheck2All />
			</Button>
		</StyledContainer>
	);
};
Form.propTypes = {
	setTodos: propTypes.func,
	delAll: propTypes.func,
	handlerComp: propTypes.func,
};
export default Form;
const StyledContainer = styled.div`
	margin-left: 100px;
	width: 800px;
	height: 70px;
	border-radius: 10px;
	padding: 10px;
	border: 6px dashed gray;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const StyledInput = styled.input`
	width: 210px;
	height: 30px;
	outline: none;
	border: ${({ errorVal }) => (errorVal ? "1px solid red" : "2px solid gray")};
	border-bottom: 2px solid gray;
`;
const StyledInputData = styled.input`
	width: 120px;
	height: 30px;
	outline: none;
	margin: 5px;
	padding: 5px;
	border: 2px solid gray;
`;
