import React, { useState } from 'react';
import data from '../../faqdata/data';
import SingleQuestion from '../faqcomponent/FaqPage.components';
import './questionCard.scss'

const QuestionCollection = () =>{
    const [questions] = useState(data);
    return(
        <main className='display-faq'>
              <h1 className='heading'>Frequently Asked Questions</h1>
              <section className='info'>
               {questions.map((question) => {
                return (
                    <div className='faq'>
                    <SingleQuestion key={question.id} {...question}  />
                    </div>
                );
               })}
              </section>
        </main>
    );
}

export default QuestionCollection;