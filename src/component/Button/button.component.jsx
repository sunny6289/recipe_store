import './button.styles.scss';

const BUTTON_TYPE = {
    addRecipe: 'addRecipe',
    greenBtn: 'greenBtn',
    redBtn: 'redBtn',
    yellowBtn: 'yellowBtn'
}

const Button = ({onClickHandler, type,content}) => {

    return (
        <div className="button-container" >
            <button onClick={onClickHandler} type={type} className={BUTTON_TYPE[type]} >{content}</button>
        </div>
    );
}

export default Button;
