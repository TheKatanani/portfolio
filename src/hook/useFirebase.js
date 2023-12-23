import { useEffect, useState } from 'react';
import { collection, onSnapshot, doc, deleteDoc, addDoc, updateDoc, getDoc } from 'firebase/firestore';
import { DB } from '../firebase/config';
import { actions } from '../assets/actions';

// Collection reference
export const colRef = (path) => collection(DB, path);
export const colRefDoc = (path, id) => doc(DB, path, id);

const useFirebase = (type, payload) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    let unsubscribe;
    
    switch (type) {
      case actions.GET_ALL:
        unsubscribe = onSnapshot(colRef(payload.path), (snapshot) => {
          const newData = snapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }));
          setData(newData);
          setLoading(false);
        }, (error) => {
          setError(error);
          setLoading(false);
        });
        break;
        
      case actions.GET_ONE:
        const fetchSingleDoc = async () => {
          try {
            setLoading(true);
            const docSnapshot = await getDoc(colRefDoc(payload.path, payload.id));
            if (docSnapshot.exists()) {
              const singleDoc = { ...docSnapshot.data(), id: docSnapshot.id };
              setData(singleDoc);
            } else {
              setData(null);
            }
            setLoading(false);
          } catch (error) {
            setError(error);
            setLoading(false);
          }
        };
        fetchSingleDoc();
        break;
        
      case actions.DELETE_ONE:
        const deleteSingleDoc = async () => {
          try {
            setLoading(true);
            await deleteDoc(colRefDoc(payload.path, payload.id));
            setLoading(false);
          } catch (error) {
            setError(error);
            setLoading(false);
          }
        };
        deleteSingleDoc();
        break;
        
      case actions.ADD:
        const addSingleDoc = async () => {
          try {
            setLoading(true);
            await addDoc(colRef(payload.path), payload.data);
            setLoading(false);
          } catch (error) {
            setError(error);
            setLoading(false);
          }
        };
        addSingleDoc();
        break;
        
      case actions.UPDATE_ONE:
        const updateSingleDoc = async () => {
          try {
            setLoading(true);
            await updateDoc(colRefDoc(payload.path, payload.id), payload.data);
            setLoading(false);
          } catch (error) {
            setError(error);
            setLoading(false);
          }
        };
        updateSingleDoc();
        break;
        
      default:
        console.log('Add correct action');
    }

    return () => {
      unsubscribe&&unsubscribe();
    };
  }, [type, payload.path, payload.id, payload.data]);

  return {
    data,
    loading,
    error,
  };
};

export default useFirebase;