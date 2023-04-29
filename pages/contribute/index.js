import { Input } from '../../components/';
import { Formik, Form, Field, ErrorMessage } from 'formik';
export default function index() {
  return (
    <div>
      <header>
        <h4>Submit a Post to our community</h4>
      </header>

      <div>
        <Formik
          initialValues={{ title: '' }}
          validate={(values) => {
            const errors = {};
            if (!values.title) {
              errors.title = 'Required';
            } else {
              errors.title = 'Invalid title';
            }
            if (!values.description) {
              errors.description = 'Required';
            } else {
              errors.description = 'Invalid description';
            }
            if (!values.content) {
              errors.content = 'Required';
            } else {
              errors.content = 'Invalid content';
            }
            if (!values.tags) {
              errors.tags = 'Required';
            } else {
              errors.tags = 'Invalid tags';
            }
            if (!values.category) {
              errors.category = 'Required';
            } else {
              errors.category = 'Invalid category';
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <Form>
              <Field
                type="text"
                name="title"
                value={values.title}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="title"
              />
              <ErrorMessage name="title" component="div" />

              <Field
                type="text"
                name="description"
                value={values.description}
                placeholder="description"
              />
              <ErrorMessage name="description" component="div" />

              <Field
                type="text"
                name="content"
                value={values.content}
                placeholder="content"
              />
              <ErrorMessage name="content" component="div" />

              <Field
                type="text"
                name="tags"
                value="tags"
                value={values.tags}
                placeholder="tags"
              />
              <ErrorMessage name="tags" component="div" />

              <Field
                type="text"
                name="category"
                value={values.category}
                placeholder="category"
              />
              <ErrorMessage name="category" component="div" />

              <footer>
                <button
                  className="btn btn-primary"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Submit Post
                </button>
                <button className="btn btn-default">Cancel Post</button>
              </footer>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
