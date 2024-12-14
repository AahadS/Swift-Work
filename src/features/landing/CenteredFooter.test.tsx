import { render, screen } from '@testing-library/react';
import { NextIntlClientProvider } from 'next-intl';

import { CenteredFooter } from './CenteredFooter';

// Replace the messages import with a minimal mock
const mockMessages = {
  Footer: {
    copyright: '© Copyright',
  },
};

describe('CenteredFooter', () => {
  describe('Render method', () => {
    it('should have copyright information', () => {
      render(
        <NextIntlClientProvider locale="en" messages={mockMessages}>
          <CenteredFooter logo={null} name="" iconList={null} legalLinks={null}>
            Random children
          </CenteredFooter>
        </NextIntlClientProvider>,
      );

      const copyright = screen.getByText(/© Copyright/);

      expect(copyright).toBeInTheDocument();
    });
  });
});
