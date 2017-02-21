import React from 'react';
import ProgressBubble from './ProgressBubble';
import { BUBBLE_COLORS } from '@cdo/apps/code-studio/components/progress/ProgressDot';
import { LevelStatus } from '@cdo/apps/util/sharedConstants';

const statuses = Object.keys(BUBBLE_COLORS);

export default storybook => {
  storybook
    .storiesOf('ProgressBubble', module)
    .addStoryTable(
      statuses.map(status => ({
        name: `bubble status: ${status}`,
        story: () => (
          <ProgressBubble
            number={3}
            status={status}
            disabled={false}
            url="/foo/bar"
          />
        )
      })).concat([{
        name:'bubble with no url',
        story: () => (
          <ProgressBubble
            number={3}
            status={LevelStatus.perfect}
            disabled={false}
          />
        )
      }, {
        name: 'Disabled bubble',
        description: 'Should not end up with a url. Should not turn orange on mouseover',
        story: () => (
          <ProgressBubble
            number={1}
            status={LevelStatus.perfect}
            disabled={true}
            url="/foo/bar"
          />
        )
      }
    ])
  );
};
