import React from 'react';
import languageSpecificCopy from './languageSpecificCopy';
import LanguageContext from './LanguageContext';

//  In order to use context this will need to be a class component.
class GreatGrandChild extends React.Component {
    static contextType = LanguageContext;
  render() {
    // We're using an "or an empty object" logic when creating the copy constant with the syntax || {}. 
    // This is similar to defaultProps but languageSpecificCopy isn't a prop so we can't use defaultProps.
    const copy = languageSpecificCopy[this.context.lang] || {};
    return (
      <section>
        <h2>{copy.title}</h2>
        <p>{copy.body}</p>
        <button
            onClick={ () => this.context.setLang('klingon')}>
                Klingon!{' '}
                {/* yes I know it's a vulcan salut but star-wars */}
+               <span role='img' aria-label='klingon'>🖖</span>
        </button>
      </section>
    )
  }
}

export default GreatGrandChild