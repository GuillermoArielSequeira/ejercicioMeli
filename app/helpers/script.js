const React = require('react');
const { string } = require('prop-types');

const Script = ({ children, src }) => (
  <div dangerouslySetInnerHTML={{
    __html: children
      ? `<script>${children}</script>`
      : `<script>${src}</script>`
  }} />
)

Script.propTypes = {
  children: string,
  src: string
}

Script.defaultProps = {
  children: '',
  src: ''
}

module.exports = Script;
