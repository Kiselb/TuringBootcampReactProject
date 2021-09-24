import React from 'react'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'

import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import configureStore from 'redux-mock-store'
import configureMockStore from 'redux-mock-store'

import SignIn from './SignIn'
import { render } from '@testing-library/react'

Enzyme.configure({ adapter: new Adapter() });

const initState = {
    user: {
        nickName: '',
        email: '',
        signedIn: false
    }
}

const sagaMiddleware = createSagaMiddleware()
const mockStore = configureMockStore([sagaMiddleware]);

const store = mockStore(initState)
const wrapper = mount(<Provider store={store}><SignIn /></Provider>)

describe("SignIn", () => {
    it("should render component - ref", () => {
        console.log(wrapper.find({ name: 'email' }))
        expect(wrapper.find({ name: 'email' })).toHaveLength(4)
    })
    it("should render component - ref", () => {
        expect(wrapper.find({ name: 'password' })).toHaveLength(4)
    })
    it("should render component - inputs", () => {
        expect(wrapper.find('input').length).toEqual(2)
    })
    it("should render component - button", () => {
        expect(wrapper.find('button').length).toEqual(1)
    })
    it("should render component - a help ref", () => {
        expect(wrapper.find('a').length).toEqual(1)
    })
})
describe("SignIn Action", () => {
    it("should signin user", () => {
        const mockSignIn = jest.fn();
        const wrapper = shallow(<button onClick={mockSignIn}/>);
        wrapper.find('button').at(0).simulate('click')
        expect(mockSignIn).toHaveBeenCalled()
    })
})
