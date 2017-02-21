import React, { PropTypes } from 'react';
import ProgressLessonContent from './ProgressLessonContent';
import FontAwesome from '../FontAwesome';
import color from "@cdo/apps/util/color";
import { levelType } from './progressTypes';

const styles = {
  main: {
    background: color.lightest_gray,
    borderWidth: 1,
    borderColor: color.border_gray,
    borderStyle: 'solid',
    borderRadius: 2,
    padding: 20,
    marginBottom: 12
  },
  heading: {
    fontSize: 18,
    fontFamily: '"Gotham 5r", sans-serif',
  },
  headingText: {
    marginLeft: 10
  },
  hidden: {
    background: color.white,
    borderStyle: 'dashed',
    borderWidth: 2,
    opacity: 0.6
  },
  icon: {
    marginRight: 5,
    fontSize: 18,
    color: color.cyan
  },
  unlockedIcon: {
    color: color.orange
  }
};

const ProgressLesson = React.createClass({
  propTypes: {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    levels: PropTypes.arrayOf(levelType).isRequired,
    hiddenForStudents: PropTypes.bool.isRequired,
    lockable: PropTypes.bool.isRequired,
    locked: PropTypes.bool.isRequired
  },

  getInitialState() {
    return {
      collapsed: false
    };
  },

  toggleCollapsed() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  },

  render() {
    const { title, description, levels, hiddenForStudents, lockable, locked } = this.props;
    const icon = this.state.collapsed ? "caret-right" : "caret-down";

    // TODO - students cant click through locked levels

    return (
      <div
        style={{
          ...styles.main,
          ...(hiddenForStudents && styles.hidden)
        }}
      >
        <div
          style={styles.heading}
          onClick={this.toggleCollapsed}
        >
          {hiddenForStudents &&
            <FontAwesome
              icon="eye-slash"
              style={styles.icon}
            />
          }
          {lockable &&
            <FontAwesome
              icon={locked ? 'lock' : 'unlock'}
              style={{
                ...styles.icon,
                ...(!locked && styles.unlockedIcon)
              }}
            />
          }
          <FontAwesome icon={icon}/>
          <span style={styles.headingText}>{title}</span>
        </div>
        {!this.state.collapsed &&
          <ProgressLessonContent
            description={description}
            levels={levels}
          />
        }
      </div>
    );
  }
});

export default ProgressLesson;
