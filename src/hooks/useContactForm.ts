/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useRef } from 'react';

const FORMSPREE_URL = 'https://formspree.io/f/xvzwwppb';

export function useContactForm() {
  const [selectedPackage, setSelectedPackage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setFormSubmitted(true);
        form.reset();
        setSelectedPackage('');
      }
    } catch {
      // silent fail
    }
  };

  return { selectedPackage, setSelectedPackage, formSubmitted, formRef, handleSubmit };
}
