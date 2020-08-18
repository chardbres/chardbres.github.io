import React from 'react'
import { shallow } from 'enzyme'

import Intro from './Intro'

describe('Intro', () => {
  it('should render correctly', () => {
    const component = shallow(<Intro />)
    expect(component).toMatchSnapshot()
  })
})
