import React from 'react';

import './App.css';
import OnOff from './components/OnOff/OnOff';
import UncontrolledAccordion from './components/UncontrolledAccordion/UncontrolledAccordion';
import {UncontrolledRating} from './components/UncontrolledRating/UncontrolledRating';
import Accordion from './components/Accordion/Accordion';
import {Rating} from './components/Rating/Rating';

function App() {
    console.log('App rendering');
    return (
        <div className={'App'}>
            <OnOff/>
            <UncontrolledAccordion titleValue={'Menu'}/>
            <Accordion titleValue={'Friends'} collapsed={false}/>
            <UncontrolledRating/>
            <Rating value={3}/>
        </div>
    );
}

type PageTitleType = {
    title: string
}

function PageTitle(props: PageTitleType) {
    console.log('PageTitle rendering');
    return <h1>{props.title}</h1>;
}

export default App;
