import jquery from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import jsdom from 'jsdom';
import chai, { expect } from 'chai';
import chaiJquery from 'chai-jquery';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../src/reducers';

// Simulates a browser
// global.document = window.document
global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = global.document.defaultView;
// Get this DOM jquery
const $ = jquery(window);

// set up chaiJquery
chaiJquery(chai, chai.util, $); // used for HTML elements

function renderComponent(ComponentClass, props = {}, state = {}) {
  const componentInstance =  TestUtils.renderIntoDocument(
    <Provider store={createStore(reducers, state)}> // you can pass application state
      <ComponentClass {...props} />
    </Provider>
  );

  return $(ReactDOM.findDOMNode(componentInstance));
}

// Every jquery instance will have access to this function ($.fn)
$.fn.simulate = function(eventName, value) {
  // this will reference for example $('div').simulate -- the div part
  if (value) {
    this.val(value);
  }
  // we want to get the first div --> first div in the list
  TestUtils.Simulate[eventName](this[0]);
};

export {renderComponent, expect};
