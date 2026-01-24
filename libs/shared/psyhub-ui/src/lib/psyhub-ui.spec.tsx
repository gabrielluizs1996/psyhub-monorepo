import { render } from '@testing-library/react';

import OrgPsyhubUi from './psyhub-ui';

describe('OrgPsyhubUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<OrgPsyhubUi />);
    expect(baseElement).toBeTruthy();
  });
});
