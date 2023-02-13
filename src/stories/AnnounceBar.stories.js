import AnnounceBar from '../components/AnnounceBar';

const story = {
  title: 'AnnounceBar',
  component: AnnounceBar,
};

export default story;

function TemplateStory(args) {
  // eslint-disable-next-line react/react-in-jsx-scope
  return <AnnounceBar {...args} />;
}

const WithTypeSuccess = TemplateStory.bind({});
WithTypeSuccess.args = {
  title: 'Success',
  content: 'This is a success message',
  type: 'success',
};

const WithTypeError = TemplateStory.bind({});
WithTypeError.args = {
  title: 'Error',
  content: 'This is an error message',
  type: 'error',
};

const WithTypeWarning = TemplateStory.bind({});
WithTypeWarning.args = {
  title: 'Warning',
  content: 'This is a warning message',
  type: 'warning',
};

const WithTypeInfo = TemplateStory.bind({});
WithTypeInfo.args = {
  title: 'Info',
  content: 'This is an info message',
  type: 'info',
};

export {
  WithTypeSuccess,
  WithTypeError,
  WithTypeWarning,
  WithTypeInfo,
};
