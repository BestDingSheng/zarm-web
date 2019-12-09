import React from 'react';
import { render, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Switch from '../index';

describe('Switch', () => {
  it('renders normal Switch correctly', () => {
    const wrapper = render(
      <div>
        <Switch />
      </div>,
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders Switch correctly with more props', () => {
    const wrapper = render(
      <div>
        <Switch disabled size="sm" />
      </div>,
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('behaves correctly when receving new value', () => {
    const wrapper = mount(
      <Switch defaultChecked={false} />,
    );

    expect(wrapper.find('.ui-switch').hasClass('checked')).toBeFalsy();
    wrapper.setProps({ checked: true });
    expect(wrapper.find('.ui-switch').hasClass('checked')).toBeTruthy();
  });

  it('behaves correctly when toggling status', () => {
    const onChange = jest.fn();
    const wrapper = mount(
      <Switch defaultChecked={false} onChange={onChange} />,
    );

    wrapper.find('.ui-switch').simulate('click');
    expect(onChange).toHaveBeenCalledWith(true);
  });
});
