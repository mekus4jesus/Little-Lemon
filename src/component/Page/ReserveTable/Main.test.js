// Main.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Main from './Main';

describe('initializeTimes function', () => {
  it('should return an array of available times', () => {
    const expectedTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    const actualTimes = Main.initializeTimes();
    expect(actualTimes).toEqual(expectedTimes);
  });
});

describe('updateTimes function', () => {
  it('should return the same value provided in the state', () => {
    const state = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    const updatedTimes = Main.updateTimes(state);
    expect(updatedTimes).toEqual(state);
  });
});
