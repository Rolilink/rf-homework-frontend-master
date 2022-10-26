import cls from "classnames";

const BROWSERS = [
	'chrome',
	'firefox',
	'safari',
	'edge'
];

const BrowserSelect = ({ onChange, value, name, label, className }) => (
	<div>
		<span className="mr-2">{label}</span>
		<select className={cls("border-slate-200 border-2 rounded px-2 py-1", className)} name={name} value={value} onChange={onChange}>
			{ BROWSERS.map((browser) => <option key={browser} value={browser} >{browser}</option>)}
		</select>
	</div>
);

export default BrowserSelect;