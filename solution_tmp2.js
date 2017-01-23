// BEGIN (write your solution here)
const iter = (data) => {
  const tag = data[0];
  if (data[0] instanceof Array) {
    return data.map(iter).join('');
  } else if (data[1] instanceof Array && data.length === 2) {
    const body = iter(data[1]);
    return `<${tag}>${body}</${tag}>`;
  } else if (data[2] instanceof Array) {
    const options = data[1];
    const body = iter(data[2]);
    const attrsLine = Object.keys(options).reduce((acc, key) =>
      `${acc} ${key}="${options[key]}"`, '');
    return `<${tag}${attrsLine}>${body}</${tag}>`;
  } else if (data.length === 1) {
    return `<${tag}></${tag}>`;
  } else if (typeof data[1] === 'string') {
    const body = data[1];
    return `<${tag}>${body}</${tag}>`;
  } else if (data[1] instanceof Object && data.length === 2) {
    const options = data[1];
    const attrsLine = Object.keys(options).reduce((acc, key) =>
      `${acc} ${key}="${options[key]}"`, '');
    return `<${tag}${attrsLine}></${tag}>`;
  } else if (data[1] instanceof Object && data.length === 3) {
    const options = data[1];
    const body = data[2];
    const attrsLine = Object.keys(options).reduce((acc, key) =>
      `${acc} ${key}="${options[key]}"`, '');
    return `<${tag}${attrsLine}>${body}</${tag}>`;
  }
};

const buildHtml = (data) => {
  return iter(data);
};
// END

/////////////////////////////////////////////////////////

const data1 = ['html', [
  ['meta', [
    ['title', 'hello, hexlet!'],
  ]],
  ['body', {
      class: 'container'
    },
    [
      ['h1', {
        class: 'header'
      }, 'html builder example'],
      ['div', [
        ['span', 'span text2'],
        ['span', 'span text3'],
      ]],
    ]
  ],
]];

const data2 = ['html', [
  ['head', [
    ['title', 'hello, hexlet!'],
  ]],
  ['body', {
      class: 'container'
    },
    [
      ['h1', {
        class: 'header'
      }, 'html builder example'],
      ['div', [
        ['span'],
        ['span', {
          class: 'text',
          id: 'uniq-key'
        }],
      ]],
    ]
  ],
]];

const data3 = ['html', [
  ['body', [
    ['h2', {
      class: 'header'
    }, 'first header'],
    ['div', [
      ['p', 'hello, world'],
      ['p', 'good bye, world'],
      ['a', {
        class: 'link',
        href: 'https://hexlet.io'
      }, 'hexlet.io'],
    ]],
  ]],
]];

const testData1 = '<html><meta><title>hello, hexlet!</title></meta><body class="container"><h1 class="header">html builder example</h1><div><span>span text2</span><span>span text3</span></div></body></html>';
const testData2 = '<html><head><title>hello, hexlet!</title></head><body class="container"><h1 class="header">html builder example</h1><div><span></span><span class="text" id="uniq-key"></span></div></body></html>';
const testData3 = '<html><body><h2 class="header">first header</h2><div><p>hello, world</p><p>good bye, world</p><a class="link" href="https://hexlet.io">hexlet.io</a></div></body></html>'
console.log(buildHtml(data1) === testData1);
console.log(buildHtml(data2) === testData2);
console.log(buildHtml(data3) === testData3);
