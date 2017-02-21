import React, { PropTypes } from 'react';
import Radium from 'radium';
import color from "@cdo/apps/util/color";

// TODO - not sure I like these bubble color styles being keyed by these strings.
// In a future PR, share with ProgressDot, likely by using an Enum of different
// allowable values.
import { BUBBLE_COLORS } from '@cdo/apps/code-studio/components/progress/ProgressDot';

export const DOT_SIZE = 30;

const styles = {
  main: {
    fontFamily: '"Gotham 5r", sans-serif',
    width: DOT_SIZE,
    height: DOT_SIZE,
    borderRadius: DOT_SIZE,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: color.lighter_gray,
    fontSize: 12,
    letterSpacing: -0.11,
    lineHeight: DOT_SIZE + 'px',
    textAlign: 'center',
    display: 'inline-block',
    marginLeft: 3,
    marginRight: 3,
    marginTop: 5,
    marginBottom: 5,
    transition: 'background-color .2s ease-out, border-color .2s ease-out, color .2s ease-out',
  },
  enabled: {
    ':hover': {
      textDecoration: 'none',
      color: color.white,
      backgroundColor: color.level_current
    }
  }
};

const ProgressBubble = React.createClass({
  propTypes: {
    number: PropTypes.number.isRequired,
    status: PropTypes.oneOf(Object.keys(BUBBLE_COLORS)).isRequired,
    url: PropTypes.string,
    disabled: PropTypes.bool.isRequired
  },

  render() {
    const { number, status, url, disabled } = this.props;

    const style = {
      ...styles.main,
      ...(!disabled && styles.enabled),
      ...BUBBLE_COLORS[status]
    };

    let href = '';
    if (!disabled && url) {
      href = url + location.search;
    }

    // Only wrap in an anchor if we need to
    let bubble = (
      <div style={style}>
        {number}
      </div>
    );
    if (href) {
      bubble = <a href={href}>{bubble}</a>;
    }
    return bubble;
  }
});

// Expose our height, as ProgressBubbleSet needs this to stick the little gray
// connector between bubbles
ProgressBubble.height = DOT_SIZE + styles.main.marginTop + styles.main.marginBottom;

export default Radium(ProgressBubble);
