import { Input } from '../../components/';
import { Formik } from 'formik';
export default function index() {
  return (
    <div>
      <header>
        <h4>Submit a Post to our community</h4>
      </header>

      <div>
        {/* <Formik
          initialValues={{ title: 'enter your title' }}
          validate={(values) => {
            const errors = {};
            if (!values.title) {
              errors.title = 'Required';
            } else {
              errors.title = 'Invalid title ';
            }
            if (!values.description) {
              errors.description = 'Required';
            } else {
              errors.description = 'Invalid description ';
            }
            if (!values.content) {
              errors.content = 'Required';
            } else {
              errors.content = 'Invalid content ';
            }
            if (!values.tags) {
              errors.tags = 'Required';
            } else {
              errors.tags = 'Invalid tags ';
            }
            if (!values.category) {
              errors.category = 'Required';
            } else {
              errors.category = 'Invalid category ';
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
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="title"
                id="title"
                name="title"
                value={values.title}
                className="form-control"
                onChange={handleChange}
              />
              {errors.name}
              <button
                type="submit"
                className="btn btn-primary"
                disabled={isSubmitting}
              >
                Submit{isSubmitting}
              </button>
              {/* <Input
                label="title"
                name="title"
                id="title"
                onInputChange={handleChange}
                value={values.title}
                errors={errors}
              />
              <Input
                label="short description"
                name="description"
                onInputChange={handleChange}
                value={values.description}
                errors={errors}
              />
              <Input
                label="content goes here"
                name="content"
                onInputChange={handleChange}
                value={values.content}
                errors={errors}
              />
              <Input
                label="tags"
                name="tags"
                onInputChange={handleChange}
                value={values.tags}
                errors={errors}
              />
              <Input
                label="category"
                name="category"
                onInputChange={handleChange}
                value={values.category}
                errors={errors}
              /> 
              <footer>
                <button className="btn btn-default">Cancel Post</button>
              </footer>
            </form>
          )}
        </Formik> */}
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
            <form onSubmit={handleSubmit}>
              <Input
                type="text"
                label="title"
                name="title"
                onChange={handleChange}
                errors={errors.title}
              />
              <Input
                label="short description"
                name="description"
                onInputChange={handleChange}
                value={values.description}
                errors={errors.description}
              />
              <Input
                label="content goes here"
                name="content"
                onInputChange={handleChange}
                value={values.content}
                errors={errors.content}
              />
              <Input
                label="tags"
                name="tags"
                onInputChange={handleChange}
                value={values.tags}
                errors={errors.tags}
              />
              <Input
                label="category"
                name="category"
                onInputChange={handleChange}
                value={values.category}
                errors={errors.category}
              />

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
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
}
