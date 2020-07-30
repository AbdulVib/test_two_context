import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme'
import App from './App'

import { findTestByAttr } from '../utils/testUtils'

/**
 * @returns {ShallowWrapper}
 */
const setUp = () => {
    return shallow(<App />)
}

describe('renders without crashing', () => {
    it('renders app component', () => {
        const wrapper = setUp()
        const component = findTestByAttr(wrapper, 'component-app') 
        expect(component.length).toBe(1)
    });
});