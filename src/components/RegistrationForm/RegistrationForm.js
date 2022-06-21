import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import './RegistrationForm.scss';

const validationSchema = yup.object({
    email: yup
      .string()
      .email('Invalid email address')
      .required('Email is required')
      .max(30, 'Are you really sure that your email is that big?'),
    password: yup
      .string()
      .required('Password is required')
      .min(6, 'Must be more than 6 characters')
      .max(30, 'Are you sure that your password is that big?'),
    passwordConfirmation: yup
      .string()
      .oneOf([yup.ref('password'), null], 'Passwords must match')
  });

export const RegistrationForm = () => {
    const handleFormSubmit = () => {
        console.log(123);
      }
    return (
            <Formik
            initialValues={{
              email: '',
              password: '',
              passwordConfirmation: '',
            }}
            validateOnBlur={false}
            validationSchema={validationSchema}
            onSubmit={(values) => handleFormSubmit(values)}
          >
            {({ values }) => (
              <Form className="f-reg">
                <h1 className="f-reg__title">Utask</h1>
                <div className="f-reg__row">
                  <label htmlFor="email" className="f-reg__field-label">
                    Почта:
                  </label>
                  <br />
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    className="f-reg__field"
                    value={values.email}
                    placeholder="Почта"
                  />
                  <ErrorMessage
                    name="email"
                    component={({ children }) => (
                      <p className="f-reg__field-error">{children}</p>
                    )}
                  />
                </div>
    
                <div className="f-reg__row">
                  <label htmlFor="password" className="f-reg__field-label">
                    Пароль:
                  </label>
                  <br />
                  <Field
                    type="password"
                    id="password"
                    name="password"
                    className="f-reg__field"
                    placeholder="Пароль"
                  />
                  <ErrorMessage
                    name="password"
                    component={({ children }) => (
                      <p className="f-reg__field-error">{children}</p>
                    )}
                  />
                </div>

                <div className="f-reg__row">
                  <label htmlFor="passwordConfirmation" className="f-reg__field-label">
                    Подтвердите пароль:
                  </label>
                  <br />
                  <Field
                    type="password"
                    id="passwordConfirmation"
                    name="passwordConfirmation"
                    className="f-reg__field"
                    placeholder="Подтвердите пароль"
                  />
                  <ErrorMessage
                    name="passwordConfirmation"
                    component={({ children }) => (
                      <p className="f-reg__field-error">{children}</p>
                    )}
                  />
                </div>
    
                <button type="submit" className="f-reg__btn-submit">
                  Зарегестрироваться
                </button>
              </Form>
            )}
          </Formik>
        
    )
}