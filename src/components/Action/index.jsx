import cls from "classnames";

const Action = (props) => (
	<span {...{...props, className: cls("cursor-pointer hover:underline", props.className)}}>{ props.children }</span>
);

export default Action;