import { Formik, Form, Field, ErrorMessage } from 'formik';
import { NavLink } from 'react-router-dom';
import './LoginForm.scss';
import * as yup from 'yup';

const validationSchema = yup.object({
  email: yup
    .string()
    .email('Invalid email address')
    .required('Email is required')
    .max(30, 'Are you really sure that your email is that big?'),
  password: yup
    .string()
    .required('Password is required')
    .min(4, 'Must be more than 4 characters'),
});

export const LoginForm = () => {
  const handleFormSubmit = () => {
    console.log(123);
  }
    return (
        <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validateOnBlur={false}
        validationSchema={validationSchema}
        onSubmit={(values) => handleFormSubmit(values)}
      >
        {({ values }) => (
          <Form className="f-login">
            <h1 className="f-login__title">Utask</h1>
            <div className="f-login__row">
              <label htmlFor="email" className="f-login__field-label">
                Почта:
              </label>
              <br />
              <Field
                type="email"
                id="email"
                name="email"
                className="f-login__field"
                value={values.email}
                placeholder="Почта"
              />
              <ErrorMessage
                name="email"
                component={({ children }) => (
                  <p className="f-login__field-error">{children}</p>
                )}
              />
            </div>

            <div className="f-login__row">
              <label htmlFor="password" className="f-login__field-label">
                Пароль:
              </label>
              <br />
              <Field
                type="password"
                id="password"
                name="password"
                className="f-login__field"
                placeholder="Пароль"
              />
              <ErrorMessage
                name="password"
                component={({ children }) => (
                  <p className="f-login__field-error">{children}</p>
                )}
              />
            </div>

            <button type="submit" className="f-login__btn-submit">
              Войти
            </button>

            <div className="f-login__row-links">
              <NavLink to="/registration" className="f-login__btn-registration">Зарегестрироваться</NavLink>
              <NavLink to="/password" className="f-login__btn-forgot-password">Забыли пароль?</NavLink>
            </div>
          </Form>
        )}
      </Formik>
    )
}