import './AppContainer.css';
import {DisplayCount} from "../DisplayCount/DisplayCount";
import {ManageCount} from "../ManageCount/ManageCount";
import {useState} from "react";

const AppContainer = () => {

    const [countValue, setCountValue] = useState(0);
    const [isResetting, setIsResetting] = useState(false);

    return (
        <div className="app-container">
            <DisplayCount countValue={countValue} isResetting={isResetting}/>
            <ManageCount setCountValue={setCountValue} countValue={countValue} setIsResetting={setIsResetting}
                         isResetting={isResetting}/>
        </div>
    );
};

export {AppContainer};