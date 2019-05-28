import React from 'react';
import { mount } from 'enzyme';

import Container from '@components/container';
import App from '@components/container/App';

describe('<Container />', () => {
    const wrap = mount(<Container />);
    it('renders', () => {
        expect(wrap.find(Container).exists()).toBe(true);
    });

    it('contains App component', () => {
        expect(wrap.find(App).exists()).toBe(true);
    });
});
