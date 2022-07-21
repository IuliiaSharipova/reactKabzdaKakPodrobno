import React, {useState} from 'react';

import './App.css';
import OnOff from './components/OnOff/OnOff';
import UncontrolledAccordion from './components/UncontrolledAccordion/UncontrolledAccordion';
import {UncontrolledRating} from './components/UncontrolledRating/UncontrolledRating';
import Accordion from './components/Accordion/Accordion';
import {Rating, RatingValueType} from './components/Rating/Rating';
import UncontrolledOnOff from './components/UncontrolledOnOff/UncontrolledOnOff';

function App() {
    console.log('App rendering');

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0);

    let [accordionCollapsed, setAccordionCollapsed] = useState(false);

    let[switchOn,setSwitchOn]=useState(false)

    return (
        <div className={'App'}>
            <OnOff on={switchOn} onChange={setSwitchOn}/> {switchOn.toString()}
            <UncontrolledOnOff onChange={setSwitchOn}/>
            <UncontrolledAccordion titleValue={'Menu'}/>
            <Accordion
                 titleValue={'Friends'}
                 collapsed={accordionCollapsed}
                 onChange={() => {
                setAccordionCollapsed(!accordionCollapsed);
            }}/>
            <UncontrolledRating/>
            <Rating value={3} onClick={setRatingValue}/>
        </div>
);
}

type PageTitleType =
    {
        title: string;
    }

function PageTitle(props: PageTitleType)
    {
        console.log('PageTitle rendering');
        return <h1>{props.title}</h1>;
    }

export default App;
