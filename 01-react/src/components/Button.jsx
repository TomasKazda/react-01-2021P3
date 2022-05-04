
let Button = ({color, text, ...rest}) => (
    <button style={{backgroundColor: color}}>
        {text}
    </button>
);

export default Button;