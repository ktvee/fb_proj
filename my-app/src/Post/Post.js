/*global FB*/

import React from 'react'
import { useFormik } from 'formik';

const Poster = () => {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      text: '',
    },
    onSubmit: values => {
      console.log(JSON.stringify(values, null, 2));
      FB.api(
        '/170107151801959/feed',
        'POST',
        {"message" : formik.values.text},
        function(response) {
            console.log('response: ', response);
        }
      );
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="text">Post to Your Facebook Page: </label>
      <input
        id="text"
        name="text"
        type="text"
        placeholder="Write Your Text Here"
        onChange={formik.handleChange}
        value={formik.values.text}
      />

      <button type="submit">Submit To Facebook</button>
    </form>
  );
};

export default Poster;