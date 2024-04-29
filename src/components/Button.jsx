import styled from "styled-components";
import propTypes from "prop-types";
const Button = ({ variant, children, type, width, height, onClick }) => {
	return (
		<Buttons
			onClick={onClick}
			type={type}
			width={width}
			height={height}
			variant={variant}>
			{children}
		</Buttons>
	);
};
Button.propTypes = {
	variant: propTypes.string,
	children: propTypes.string,
	type: propTypes.string,
	height: propTypes.string,
	width: propTypes.string,
	onClick: propTypes.any,
};
export default Button;
const Buttonsa = {
	danger: "red",
	add: "green",
	edite: "blue",
};
const Colors = {
	danger: "white",
	add: "white",
	edite: "white",
};
const Width = {
	small: "80px",
	smallXl: "100px",
	medium: "120px",
	mediumXl: "130px",
	medium2XL: "140px",
	big: "150px",
	bigXL: "160px",
};
const Height = {
	small: "20px",
	smallXl: "25px",
	medium: "30px",
	mediumXl: "35px",
	medium2XL: "40px",
	big: "50px",
	bigXL: "60px",
};
const Buttons = styled.button`
	width: ${({ width }) => Width[width]};
	height: ${({ height }) => Height[height]};
	border: none;
	background-color: ${({ variant }) => Buttonsa[variant]};
	color: ${({ variant }) => Colors[variant]};
`;
