import React from 'react';
import SummaryProgressRow from './SummaryProgressRow';
import { LevelStatus } from '@cdo/apps/util/sharedConstants';

const lesson = {
  name: 'Jigsaw',
  id: 1
};

const levels = [
  {
    status: LevelStatus.not_tried,
    url: '/step1/level1',
  },
  {
    status: LevelStatus.not_tried,
    url: '/step3/level1',
  },
];

const defaultProps = {
  dark: true,
  lesson,
  levels,
  lessonNumber: 1,
  hiddenForStudent: false,
  lockable: false,
  locked: false
};

export default storybook => {
  storybook
    .storiesOf('SummaryProgressRow', module)
    .addStoryTable([
      {
        name:'light SummaryProgressRow',
        story: () => (
          <SummaryProgressRow
            {...defaultProps}
            dark={false}
          />
        )
      },
      {
        name:'dark SummaryProgressRow',
        story: () => (
          <SummaryProgressRow
            {...defaultProps}
            dark={true}
          />
        )
      },
      {
        name:'teacher view of hidden SummaryProgressRow',
        story: () => (
          <SummaryProgressRow
            {...defaultProps}
            hiddenForStudents={true}
          />
        )
      },
      {
        name:'teacher view of locked SummaryProgressRow',
        story: () => (
          <SummaryProgressRow
            {...defaultProps}
            lockable={true}
            locked={true}
          />
        )
      },
      {
        name:'teacher view of unlocked SummaryProgressRow',
        story: () => (
          <SummaryProgressRow
            {...defaultProps}
            lockable={true}
            locked={false}
          />
        )
      },
      {
        name:'teacher view of hidden unlocked SummaryProgressRow',
        story: () => (
          <SummaryProgressRow
            {...defaultProps}
            hiddenForStudents={true}
            lockable={true}
            locked={false}
          />
        )
      }
    ]);
};
