import { firestore } from './firebase.utils';
import { setDoc, doc } from 'firebase/firestore';
//save new items

export const saveItem = async (data) => {
  console.log('is it this data ', data)
    await setDoc(doc(firestore, "foodBank", `${Date.now()}`), data, {
      merge: true,
    });
  };


  export const saveDiary = async (data) => {
    console.log('Diary ', data)
      await setDoc(doc(firestore, "Diary", `${Date.now()}`), data, {
        merge: true,
      });
    };

  //getting food items

