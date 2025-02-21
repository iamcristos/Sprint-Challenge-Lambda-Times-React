import React from 'react';
import PropTypes from 'prop-types'
const Tab = props => {
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
  return (
    <div
      className={props.tab === props.selectedTab ? 'tab active-tab' : 'tab' }
      onClick={() => {
         props.selectedHandler(props.tab)
      }}
    >
      {props.tab.toUpperCase()}
    </div>
  );
};

// Make sure you include PropTypes on your props.
Tab.propTypes = {
  props: PropTypes.shape({
    tab: PropTypes.string,
    selectedTab: PropTypes.string,
    selectedHandler: PropTypes.func
  })
}
export default Tab;
