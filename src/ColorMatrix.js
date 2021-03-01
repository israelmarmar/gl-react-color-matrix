const GL = require("gl-react");
const React = require("react");
const PropTypes = require("prop-types");

const shaders = GL.Shaders.create({
  ColorMatrix: {
    frag: `precision highp float;
varying vec2 uv;
uniform sampler2D t;
uniform mat4 m;

void main () {
  gl_FragColor = m * texture2D(t, uv);
}`
  }
});

module.exports = GL.create(
  ({ children: t, matrix: m }) =>
  <GL.Node
    shader={shaders.ColorMatrix}
    uniforms={{ t, m }}
  />,
{
  displayName: "ColorMatrix",
  propTypes: {
    children: PropTypes.any.isRequired
  }
});
