const myURL = new URL('https://nodejs.org/dist/latest-v18.x/docs/api/url.html');
myURL.pathname = '/a/b/c';
myURL.search = '?d=e';
myURL.hash = '#fgh';
console.log(myURL)