import { BackButton, SubmitButton } from '@/components/common/buttons';
import Title from '../../Title';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useFormState } from '@/components/providers/FormContext';

interface FieldWithErrorProps {
  label: string;
  name: string;
  placeholder: string;
}

interface PersonalDataFormProps {
  initialValues: {
    firstName: string;
    lastName: string;
    email: string;
    phone?: string;
  };
  handleSubmit: (values: typeof initialValues) => void;
}

const PersonalDataSchema = Yup.object().shape({
  firstName: Yup.string().required('Imię jest wymagane'),
  lastName: Yup.string().required('Nazwisko jest wymagane'),
  email: Yup.string()
    .email('Nieprawidłowy adres email')
    .required('Adres email jest wymagany'),
  phone: Yup.string().optional(),
});

const FieldWithError = ({ label, name, placeholder }: FieldWithErrorProps) => (
  <div className="flex flex-col gap-1">
    <div className="flex justify-between">
      <label className="text-zinc-50" htmlFor={name}>
        {label}
      </label>
      <ErrorMessage name={name} component="div" className="text-red-500" />
    </div>
    <Field
      className="text-zinc-50 bg-zinc-800 px-4 py-2 outline outline-zinc-400 rounded-md focus:outline-orange-400 focus:outline-2"
      type="text"
      id={name}
      name={name}
      placeholder={placeholder}
    />
  </div>
);

const PersonalDataForm = ({
  initialValues,
  handleSubmit,
}: PersonalDataFormProps) => (
  <Formik
    initialValues={initialValues}
    validationSchema={PersonalDataSchema}
    onSubmit={handleSubmit}
  >
    <Form className="flex flex-col justify-between h-full">
      <Title>Podaj dane osobowe</Title>
      <FieldWithError label="Imię*" name="firstName" placeholder="np. Jan" />
      <FieldWithError
        label="Nazwisko*"
        name="lastName"
        placeholder="np. Kowalski"
      />
      <FieldWithError
        label="Adres e-mail*"
        name="email"
        placeholder="np. jan.kowalski@gmail.com"
      />
      <FieldWithError
        label="Telefon"
        name="phone"
        placeholder="np. +48 123 456 789"
      />
      <div className="flex justify-between">
        <BackButton text={'Powrót'} />
        <SubmitButton text={'Dalej'} />
      </div>
    </Form>
  </Formik>
);

export default function PersonalData() {
  const { formData, setFormData, handleNext } = useFormState();

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  };

  const handleSubmit = (values: any) => {
    setFormData({ ...formData, ...values });
    handleNext();
  };

  return (
    <PersonalDataForm
      initialValues={initialValues}
      handleSubmit={handleSubmit}
    />
  );
}
