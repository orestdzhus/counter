import './ManageCount.css';

const ManageCount = ({setCountValue, countValue, setIsResetting,isResetting}) => {

    const increase = () => {
        setCountValue(prev => prev + 1);
    };

    const decrease = () => {
        if (countValue === 0) {
            return;
        }

        setCountValue(prev => prev - 1);
    };

    const reset = () => {
        setIsResetting(true);

        setTimeout(() => {
            setCountValue(0);
            setIsResetting(false);
        }, 350);
    };

    return (
        <div className="manage-count-container">
            <button disabled={isResetting} className="button increase" onClick={() => increase()}>Increase</button>
            <button disabled={isResetting} className="button decrease" onClick={() => decrease()}>Decrease</button>
            <button disabled={isResetting} className="button reset" onClick={() => reset()}>Reset</button>
        </div>
    );
};

export {ManageCount};