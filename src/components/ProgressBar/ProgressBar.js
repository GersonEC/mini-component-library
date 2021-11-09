/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    height: 8 + 'px',
    padding: 0,
    radius: 4 + 'px',
  },
  medium: {
    height: 12 + 'px',
    padding: 0,
    radius: 4 + 'px',
  },
  large: {
    height: 16 + 'px',
    padding: 4 + 'px',
    radius: 8 + 'px',
  },
};
const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size];

  if (!styles) {
    throw new Error(`Unknown size passed to ProgressBar: ${size}`);
  }
  if (size)
    return (
      <>
        <Wrapper
          role='progressbar'
          aria-valuenow={value}
          aria-valuemin='0'
          aria-valuemax='100'
          style={{
            '--padding': styles.padding,
            '--radius': styles.radius,
          }}
        >
          <VisuallyHidden>{value} %</VisuallyHidden>
          <Bar style={{ '--width': value + '%', '--heigth': styles.height }} />
        </Wrapper>
      </>
    );
};

const Wrapper = styled.div`
  color: black;
  padding: var(--padding);
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: var(--radius);
  /* trim off corners when bar is near 100% */
  overflow: hidden;
`;
const Bar = styled.div`
  width: var(--width);
  height: var(--heigth);
  background-color: ${COLORS.primary};
  border-radius: 4px 0 0 4px;
`;

export default ProgressBar;
