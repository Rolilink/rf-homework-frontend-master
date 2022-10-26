import cls from "classnames";

const Field = (props) => (
	<div>
			<label className="mr-2" htmlFor={props.name}>{ props.label }</label>
			<input {...{...props, className: cls("border-slate-200 border-2 rounded px-2 py-1", props.className)}} />
	</div>
);

export default Field;