export default `
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700');
  :root {
    --body-bg: #fff;
    --body-bg-alt: #F5F5F5;
    --link-alt: #302D2F;
    --accent: #6DC1FF;
    --accent-dark: #36a6f7;
    --accent-darker: #1c8bdb;
    --text-default: #777;
    --text-header: #302D2F;
    --text-mute: #D4D4D4;
    --pad: 20px;
    --footer-bg: #302D2F;
    --footer-color: #fff;
  }
  html {
    scroll-behavior: smooth;
    background-color: var(--footer-bg);
  }
  body {
    background-color: var(--body-bg);
  }
  html, body {
    font-family: Roboto;
    color: var(--text-default);  
  }
  p, h1, h2, h3, h4, h5, h6, li, ul {
    line-height: 1.35;
    font-size: 1rem;
  }
  p, h1, h2, h3, h4, h5, h6, ul {
    margin-bottom: 1rem;
  }
  li {
    margin-bottom: .25rem;
  }
  p:last-child, h1:last-child, h2:last-child, h3:last-child, h4:last-child, h5:last-child, h6:last-child, ul:last-child {
    margin-bottom: 0;
  }
  a {
    pointer: cursor;
  }
`