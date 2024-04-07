describe('httpbin test 1', () => {
    const request = {
        method: 'GET',
        url: 'https://httpbin.org/get',
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:124.0) Gecko/20100101 Firefox/124.0',
            'Sec-Fetch-Mode': 'cors',
        },
      };
    it('response code should be 200', () => {
        cy.request(request).then(response => {
            assert.equal(200, response.status);
            assert.equal("Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:124.0) Gecko/20100101 Firefox/124.0", response.requestHeaders['User-Agent']);
            assert.equal("cors", response.requestHeaders['Sec-Fetch-Mode']);
        });
    });
});

describe('httpbin test 2', () => {
    const request = {
        method: 'POST',
        url: 'https://httpbin.org/post',
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:124.0) Gecko/20100101 Firefox/124.0',
            'Sec-Fetch-Mode': 'cors',
        },
      };
    it('response code should be 200', () => {
        cy.request(request).then(response => {
            assert.equal(200, response.status);
            assert.equal("Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:124.0) Gecko/20100101 Firefox/124.0", response.requestHeaders['User-Agent']);
            assert.equal("cors", response.requestHeaders['Sec-Fetch-Mode']);
        });
    });
});

describe('httpbin test 3', () => {
    const request = {
        method: 'PUT',
        url: 'https://httpbin.org/put',
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:124.0) Gecko/20100101 Firefox/124.0',
            'Sec-Fetch-Mode': 'cors',
        },
      };
    it('response code should be 200', () => {
        cy.request(request).then(response => {
            assert.equal(200, response.status);
            assert.equal("Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:124.0) Gecko/20100101 Firefox/124.0", response.requestHeaders['User-Agent']);
            assert.equal("cors", response.requestHeaders['Sec-Fetch-Mode']);
        });
    });
});

describe('httpbin test 4', () => {
    const request = {
        method: 'GET',
        url: 'https://httpbin.org/headers',
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:124.0) Gecko/20100101 Firefox/124.0',
            'Sec-Fetch-Mode': 'cors',
        },
      };
    it('response code should be 200', () => {
        cy.request(request).then(response => {
            assert.equal(200, response.status);
            assert.equal("Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:124.0) Gecko/20100101 Firefox/124.0", response.requestHeaders['User-Agent']);
            assert.equal("cors", response.requestHeaders['Sec-Fetch-Mode']);
        });
    });
});

describe('httpbin test 5 + 6', () => {
    const request = {
        method: 'GET',
        url: 'https://httpbin.org/cookies/set/ciasteczko/piegusek',
        headers: {
            'Cookie': 'ciasteczko=piegusek',
        },
        failOnStatusCode: false,
      };
    it('response code should be 200', () => {
        cy.request(request).then(response => {
            assert.equal(200, response.status);
            assert.equal("ciasteczko=piegusek", response.requestHeaders['Cookie']);
        });
    });
    it('test duration', () => {
        cy.request(request).then(response => {
          assert.isTrue(response.duration <= 500)
        });
      });
});

describe('httpbin test 7', () => {
    it('test random ids', () => {
      for(let i = 0; i < 10; i++) {
        const randomId = getRandomInt(10000000);
          const request = {
          url: 'https://httpbin.org/headers',
          id: randomId
        }
          cy.request(request).then(response => {
          assert.isTrue(response.status == 200)
        });
      };
    });
  });
  
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  };

  describe('httpbin test 8', () => {
    const request = {
      url: 'https://httpbin.org/get',
      qs: {
        "origin": "109.106.5.104"
      },
      failOnStatusCode: false
    };
    it('response code should be 200', () => {
      cy.request(request).then(response => {
        assert.equal("109.106.5.104", response.body.args.origin);
      });
    });
  });

  describe('httpbin test 9 i 10', () => {
    const request = {
      url: 'https://httpbin.org/get',
      failOnStatusCode: false
    };
    it('test complex response body', () => {
        cy.request(request).then(response => {
            const expectedBody = {
                "args": {},
                "headers": {
                  "Accept": "application/json",
                  "Accept-Encoding": "gzip, deflate, br",
                  "Accept-Language": "pl,en-US;q=0.7,en;q=0.3",
                  "Cookie": "undefined=undefined; ciasto=sernik",
                  "Host": "httpbin.org",
                  "Referer": "https://httpbin.org/",
                  "Sec-Fetch-Dest": "empty",
                  "Sec-Fetch-Mode": "cors",
                  "Sec-Fetch-Site": "same-origin",
                  "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:124.0) Gecko/20100101 Firefox/124.0",
                  "X-Amzn-Trace-Id": "Root=1-6612fe48-0a9bc69e5b78b3f87b1aa2b4"
                },
                "origin": "109.106.5.104",
                "url": "https://httpbin.org/get"
              };
            assert.equal(expectedBody, response.body);
        })
      })
    it('test single response body key', () => {
        cy.request(request).then(response => {
          assert.equal('109.106.5.104', response.body['origin']);
        });
      });
  });  