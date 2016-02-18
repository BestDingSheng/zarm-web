
import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

class FormItem extends Component {

  render () {
    const props = this.props;
    const { help, theme, className, controlCol, children, ...others } = props;

    const cls = classnames({
      'ui-form-item': true,
      [className]   : !!className,
    });

    const controlCls = classnames({
      'ui-form-item-control': true,
      [controlCol]          : !!controlCol,
      [`theme-${theme}`]    : !!theme,
    });

    return (
      <div className={cls} {...others}>
        {this._renderLabel()}
        <div className={controlCls}>
          {children}
          <div className="ui-form-explain">{help}</div>
        </div>
      </div>
    );
  }

  _getId() {
    return this.props.children.props && this.props.children.props.id;
  }

  _renderLabel() {
    const { id, label, labelCol } = this.props;

    const labelCls = classnames({
      [labelCol]: !!labelCol,
    });

    return ('label' in this.props) ? (
      <label className={labelCls} htmlFor={id || this._getId()}>
        {label}
      </label>
    ) : null;
  }
}

FormItem.propTypes = {
  theme: PropTypes.oneOf(['success', 'warning', 'error', 'validating']),
};

// FormItem.defaultProps = {
// };

export default FormItem;