import React from 'react';
import QuestionCollection from '../allquestion/QuestionCard';
import Header from '../header/Header';
import Footer from '../footer/Footer';

const DisplayFaq = (props) =>{
    return(
        <div>
         <Header currentUser={props.currentUser} />
        <QuestionCollection />
        <Footer />
        </div>
    );
}

export default DisplayFaq;