export default {
  fonts: {
    body: '"Inter", system-ui, sans-serif',
    heading: 'inherit',
    monospace: '"Operator Mono", monospace'
  },
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125
  },
  colors: {
    text: '#434C6C',
    background: '#ffffff',
    link: '#3880FF',
    pre: '#f0f',
    preBackground: '#011627',
    code: '#434C6C',
    primary: '#3880FF',
    secondary: '#30c',
    muted: '#f6f6f6',
    heading: '#151D34'
  },
  styles: {
    h1: {
      color: 'primary',
      fontSize: '2em',
      fontWeight: 900,
      textTransform: 'uppercase',
      marginTop: 0,
      marginBottom: 0,
      textAlign: 'center'
    },
    blockquote: {
      fontStyle: 'italic',
      width: '80%',
      textAlign: 'center'
    },
    h2: {
      fontSize: '3.5em',
      fontWeight: 900,
      marginBottom: 0,
      marginTop: 0,
      textTransform: 'uppercase',
      wordSpacing: 20,
      textAlign: 'center',
      color: 'heading'
    },
    h3: {
      fontSize: '1.75em',
      marginBottom: 10,
      fontWeight: 900,
      marginTop: 10,
      textTransform: 'uppercase',
      wordSpacing: 10,
      textAlign: 'center',
      color: 'primary',
    },
    h4: {
      textAlign: 'center',
      color: 'heading'
    },
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
      fontSize: 16
    },
    p: {
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body',
      textAlign: 'center'
    },
    a: {
      color: 'text',
      textDecoration: 'none',
      transition: "color 0.15s ease",
      ':hover': {
        color: 'link'
      },
      '::after': {
        content: '""',
        display: 'block',
        width: '100%',
        height: 2,
        backgroundColor: 'primary',
        opacity: 0,
        transform: 'translate3D(0,10px, 0)',
        transition: 'opacity 0.3s, transform 0.3s',
      },
      ':hover::after': {
        opacity: 1,
        transform: 'translate3D(0,0,0)',
      }
    },
    pre: {
      fontFamily: 'monospace',
      overflowX: 'auto',
      textAlign: 'left !important',
      fontWeight: 500,
      code: {
        color: 'inherit'
      }
    },
    code: {
      fontFamily: 'monospace',
      fontSize: 'inherit',
    },
    table: {
      width: '100%',
      borderCollapse: 'separate',
      borderSpacing: 0
    },
    th: {
      textAlign: 'left',
      borderBottomStyle: 'solid'
    },
    td: {
      textAlign: 'left',
      borderBottomStyle: 'solid'
    },
    img: {
      maxWidth: '100%'
    },
    ol: {
      textAlign: 'left'
    },
    ul: {
      textAlign: 'center',
      listStyle: 'none',
      lineHeight: 1.6,
      paddingInlineStart: 0
    }
  }
};
