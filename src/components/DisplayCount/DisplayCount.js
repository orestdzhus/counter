import './DisplayCount.css';

const DisplayCount = ({countValue, isResetting}) => {

    return (
        <>
            {isResetting ?
                <div className="display-count-container"></div>
            :
                <div className="display-count-container">
                    <h2 className="heading">Counter</h2>
                    <p className="current-value">{countValue}</p>
                </div>
            }
        </>
    );
};

export {DisplayCount};