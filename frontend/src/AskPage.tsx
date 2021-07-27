import React from 'react';

// Components.
import { Page } from './Page';

// Styles.
import {
  Fieldset,
  FieldContainer,
  FieldLabel,
  FieldInput,
  FieldTextArea,
  FormButtonContainer,
  PrimaryButton,
  FieldError,
} from './Styles';
import { useForm } from 'react-hook-form';

type FormData = {
  title: string;
  content: string;
};

export const AskPage = () => {
  const {
    register,
    formState: { errors },
  } = useForm<FormData>({ mode: 'onBlur' });

  return (
    <Page title="Ask a question">
      <form>
        <Fieldset>
          {/* Title input. */}
          <FieldContainer>
            <FieldLabel htmlFor="title">Title</FieldLabel>
            <FieldInput
              id="title"
              type="text"
              {...register('title', { required: true, minLength: 10 })}
            />
            {/* Required validation message. */}
            {errors.title && errors.title.type === 'required' && (
              <FieldError>You must enter the question title</FieldError>
            )}
            {/* Minimum length validation message. */}
            {errors.title && errors.title.type === 'minLength' && (
              <FieldError>The title must be at least 10 characters</FieldError>
            )}
          </FieldContainer>
          {/* Content text area. */}
          <FieldContainer>
            <FieldLabel htmlFor="content">Content</FieldLabel>
            <FieldTextArea
              id="content"
              {...register('content', { required: true, minLength: 50 })}
            />
            {/* Required validation message. */}
            {errors.content && errors.content.type === 'required' && (
              <FieldError>You must enter the question content</FieldError>
            )}
            {/* Minimum length validation message. */}
            {errors.content && errors.content.type === 'minLength' && (
              <FieldError>
                The content must be at lesat 50 characters
              </FieldError>
            )}
          </FieldContainer>

          {/* Submit button. */}
          <FormButtonContainer>
            <PrimaryButton type="submit">Submit Your Question</PrimaryButton>
          </FormButtonContainer>
        </Fieldset>
      </form>
    </Page>
  );
};

export default AskPage;
