
    import React from 'react';
    import { storiesOf } from '@storybook/react';
    const stories = storiesOf('antDesign.alert', module);
  import { Alert } from 'antd';

stories.addWithJSX('banner', () => (
    
  <div>
    <Alert message="Warning text" banner />
    <br />
    <Alert message="Very long warning text warning text text text text text text text" banner closable />
    <br />
    <Alert showIcon={false} message="Warning text without icon" banner />
    <br />
    <Alert type="error" message="Error text" banner />
  </div>

  ))