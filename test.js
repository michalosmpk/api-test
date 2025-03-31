const test = async () => {
  const response = await fetch('https://api-test-s831.onrender.com', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'user-agent': 'Node.js/18.0.0',
      locale: 'en-US test',
    },
    body: JSON.stringify({ query: 'test' }),
  });
};

test();