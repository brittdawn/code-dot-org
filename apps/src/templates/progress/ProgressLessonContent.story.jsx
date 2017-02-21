import React from 'react';
import ProgressLessonContent from './ProgressLessonContent';

const levels = [
  {
    status: 'not_tried',
    url: '/step1/level1'
  },
  {
    status: 'perfect',
    url: '/step2/level1',
  },
  {
    status: 'not_tried',
    url: '/step2/level2',
  },
  {
    status: 'not_tried',
    url: '/step2/level3',
  },
  {
    status: 'not_tried',
    url: '/step2/level4',
  },
  {
    status: 'not_tried',
    url: '/step2/level5',
  },
];

export default storybook => {
  storybook
    .storiesOf('ProgressLessonContent', module)
    .addStoryTable([
      {
        name:'progress lesson content',
        story: () => (
          <ProgressLessonContent
            description={"At some point we reach a physical limit of how fast " +
              "we can send bits and if we want to send a large amount of " +
              "information faster, we have to finds ways to represent the same " +
              "information with fewer bits - we must compress the data."}
            levels={levels}
            disabled={false}
          />
        )
      },
      {
        name:'disabled',
        story: () => (
          <ProgressLessonContent
            description={"At some point we reach a physical limit of how fast " +
              "we can send bits and if we want to send a large amount of " +
              "information faster, we have to finds ways to represent the same " +
              "information with fewer bits - we must compress the data."}
            levels={levels}
            disabled={true}
          />
        )
      }
    ]);
};
