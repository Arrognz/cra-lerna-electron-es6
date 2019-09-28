import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import Commons from 'crale-commons';
import User from './User';

const { models } = Commons;
const UserModel = models.User;
// const basicUser = new UserModel('Felix Ganz', 'Software Engineer');

const stories = storiesOf('User', module);
stories.addDecorator(withKnobs);

stories.add('Default', () => {
  const name = text('Name', 'Felix Ganz');
  const job = text('Job', 'Software Engineer');
  const mail = text('Mail', 'felix.ganz.94@gmail.com');
  const user = new UserModel(name, job);
  user.mail = mail;
  return <User user={user} />;
});

stories.add('Skeleton', () => {
  const user = new UserModel();
  return <User user={user} skeleton />;
});
