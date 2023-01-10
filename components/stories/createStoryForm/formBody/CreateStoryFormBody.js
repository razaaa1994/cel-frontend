import React, { useState } from 'react';
import styles from './CreateStoryFormBody.module.scss';
import Fieldset_Histoire from './fieldset_Histoire/Fieldset_Histoire';
import Fieldset_Professionel from './fieldset_Professionel/Fieldset_Professionel';
import Fieldset_Ressource from './fieldset_Ressource/Fieldset_Ressource';
import Fieldset_Anonym from './fieldset_Anonym/Fieldset_Anonym';

function CreateStoryFormBody({ user }) {
  const [story, setStory] = useState({
    writter: user?.id,
    theme: '',
    title: '',
    content: '',
    professionalConsulted: '', // ObjectId
    professionalToCreate: null,
    ressource: '', // ObjectID
    ressourceToCreate: null,
    physicalTransformation: {
      isSelected: false,
      bodyPart: '',
      treatment: '',
      beforePictureUrl: '',
      afterPictureUrl: '',
      isSatisfied: true,
    },
    isAnonym: false,
  });
  //
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('histoire à poster : ', story);
  };
  //
  return (
    <>
      <div className={styles.formBody}>
        <form
          id='createStoryForm'
          className={styles.form}
          // onSubmit={(e) => handleLoginSubmit(e)}
        >
          <Fieldset_Histoire
            story={story}
            setStory={setStory}></Fieldset_Histoire>
          <Fieldset_Professionel
            story={story}
            setStory={setStory}></Fieldset_Professionel>
          <Fieldset_Ressource
            user={user}
            story={story}
            setStory={setStory}></Fieldset_Ressource>
          <Fieldset_Anonym story={story} setStory={setStory}></Fieldset_Anonym>
          <div className={styles.btnWrapper}>
            <button className={styles.button} onClick={handleSubmit}>
              Soumettre mon histoire
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default CreateStoryFormBody;
