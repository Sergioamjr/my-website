import { useFirebase } from "gatsby-plugin-firebase";
import { useState, useEffect } from "react";

export const useGetFirebase = ({ id }) => {
  const [state, setState] = useState({ qnty: 0 });
  useFirebase(firebase => {
    firebase
      .database()
      .ref(id)
      .once("value")
      .then(snapshot => {
        setState(snapshot.val() || { qnty: 0 });
      });
  });

  return state;
};

export const useFirebaseCounter = ({ id, title }) => {
  const [high5, setHigh5] = useState(0);
  const { qnty } = useGetFirebase({
    id
  });

  useEffect(() => {
    setHigh5(qnty);
  }, [qnty]);

  const submitHigh5 = () => setHigh5(v => v + 1);

  useFirebase(
    firebase => {
      if (high5) {
        firebase
          .database()
          .ref(id)
          .set({
            qnty: high5,
            id,
            title
          });
      }
    },
    [high5]
  );

  return [high5, submitHigh5];
};
