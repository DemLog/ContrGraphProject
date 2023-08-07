import React, {useEffect, useRef, useState} from "react";
import {ContributionGraphElementProps} from "@components/ContributionGraph/ContributionGraphElement/props";
import {ElementLevelsEnum} from "@core/types/enums/contribution";

import './style.scss';

export const ContributionGraphElement: React.FC<ContributionGraphElementProps> = (props: ContributionGraphElementProps) => {
    const [isShowTooltip, setIsShowTooltip] = useState<boolean>(false);
    const buttonRef = useRef<HTMLButtonElement>(null);

    const handleClick = () => {
        setIsShowTooltip(prevState => !prevState);
    };

    const onGetElementLevel = () => {
        if (props.data.score === 0) {
            return ElementLevelsEnum.one;
        }

        if (props.data.score <= 9) {
            return ElementLevelsEnum.two;
        }

        if (props.data.score <= 19) {
            return ElementLevelsEnum.three;
        }

        if (props.data.score <= 29) {
            return ElementLevelsEnum.four;
        }

        return ElementLevelsEnum.five;
    }

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (buttonRef.current && !buttonRef.current.contains(event.target as Node)) {
                setIsShowTooltip(false);
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);

    return (
        <div className={`contribution-graph-element ${onGetElementLevel()}`}>
            <button ref={buttonRef} onClick={handleClick}></button>
            {isShowTooltip &&
                <div className="contribution-graph-element__info">
                    {props.children}
                </div>
            }
        </div>
    );
};