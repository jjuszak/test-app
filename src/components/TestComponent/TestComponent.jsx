import './TestComponent.css';
import '../../index.css';

const TestComponent = (props) => {
    return (
        <div className="pretty-lame-component">
            <div className={'row'}>
                <div className={'col outer-box'}>{props.dataOne}</div>
                <div className={'col inner-box'}>{props.someOtherProp}</div>
                <div className={'col outer-box'}>{props.theBestProp}</div>
            </div>
        </div>
    );
}

export default TestComponent;
