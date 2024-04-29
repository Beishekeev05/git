import propTypes from "prop-types";
import styled from "styled-components";
import Button from "./Button";
import { BsCheck2 } from "react-icons/bs";
const Note = ({ title, date, delet, id, complet, comp, edit }) => {
	return (
		<StyledContainer>
			<StyledSpanDiv comp={comp}>
				<StyledSpan comp={comp}>{title}</StyledSpan>{" "}
				<StyledSpan comp={comp}>{date}</StyledSpan>
				<div
					style={{
						position: "absolute",
						right: "0",
						display: "flex",
						gap: "10px",
					}}>
					<BsCheck2
						onClick={complet}
						style={{ position: "absolute", top: "5px", right: "200px" }}
					/>
					<Button
						onClick={() => delet(id)}
						width={"smallXl"}
						height={"smallXl"}
						variant={"danger"}>
						Delete
					</Button>
					<Button
						onClick={() => edit}
						width={"small"}
						height={"smallXl"}
						variant={"edite"}>
						Edit
					</Button>
				</div>
			</StyledSpanDiv>
		</StyledContainer>
	);
};
Note.propTypes = {
	title: propTypes.string,
	date: propTypes.any,
	delet: propTypes.func,
	id: propTypes.number,
	complet: propTypes.func,
	comp: propTypes.bool,
	edit: propTypes.func,
};
export default Note;

const StyledContainer = styled.div`
	width: 90%;
	height: 40px;
	margin: 10px auto;
	border: 2px solid gray;
	padding-top: 3px;
	background-color: burlywood;
`;
const StyledSpanDiv = styled.div`
	width: 99%;
	height: 30px;
	margin: 0 auto;
	border: 1px solid black;
	background-color: ${({ comp }) => (comp ? "gray" : "white")};
	padding: 1px;
	display: flex;
	position: relative;
`;

const StyledSpan = styled.span`
	margin-top: 3px;
	padding-left: 5px;
	display: block;
	text-decoration: ${({ comp }) => (comp ? "line-through" : "none")};
	color: ${({ comp }) => (comp ? "white" : "gray")};
`;
