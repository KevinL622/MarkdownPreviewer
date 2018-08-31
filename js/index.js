var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}marked.setOptions({
  breaks: true });


var defaultText = "# header1\n## header2\n### header3\n#### header4\n##### header5\n###### header6\n\n---\n*italic* or _italic_\n\n**bold** or __bold__\n\n~~strikethrough~~\n\n---\nBlockquote nest with > next to eachother or with a space in between\n>nested quote\n>>more nested quote\n> > >super nested quote\n\n---\nUse -, +, or * at the start for unordered lists\n* star\n- minus\n+ plus\n   + create sublist by indenting twice first\n        - you can indent as much as needed for new lists\n\n---\n1. Use number . to make a numbered list.\n1. you can use 1. as well as many times as you want.\n* Or use *\n- dashes are OK too\n\n---\nA [link to freecodecamp.org](https://www.freecodecamp.org)\n\n`<p>This is a line of code</p>`\n\n\`\`\`\n<div>\n <h1>This is a block of code</h1>\n</div>\n\`\`\`\n\n---\nThis is an image ![image](https://www.w3schools.com/images/w3schools_green.jpg)";

var giveLink = new marked.Renderer();
giveLink.link = function (href, title, text) {
  return "<a target=\"_blank\" href=\"" + href + "\">" + text + "</a>";
};var

App = function (_React$Component) {_inherits(App, _React$Component);
  function App(props) {_classCallCheck(this, App);var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this,
    props));
    _this.state = {
      input: defaultText };

    _this.handleChange = _this.handleChange.bind(_this);
    _this.clearInput = _this.clearInput.bind(_this);
    _this.resetDefault = _this.resetDefault.bind(_this);return _this;
  }_createClass(App, [{ key: "handleChange", value: function handleChange(

    event) {
      this.setState({
        input: event.target.value });

    } }, { key: "clearInput", value: function clearInput()

    {
      this.setState({
        input: "" });

    } }, { key: "resetDefault", value: function resetDefault()

    {
      this.setState({
        input: defaultText });

    } }, { key: "render", value: function render()

    {
      return (
        React.createElement("div", { id: "wrapper" },
          React.createElement("h1", { id: "title" }, "Markdown Previewer"),
          React.createElement("div", { id: "container" },
            React.createElement("div", null,
              React.createElement("h2", { className: "heading" }, "Editor",
                React.createElement("button", { onClick: this.clearInput }, "Clear"),
                React.createElement("button", { onClick: this.resetDefault }, "Reset to Default")),

              React.createElement("textarea", { id: "editor", cols: "70", rows: "50", value: this.state.input, onChange: this.handleChange })),

            React.createElement("div", null,
              React.createElement("h2", { className: "heading" }, "Preview Window"),
              React.createElement("div", { id: "preview", dangerouslySetInnerHTML: { __html: marked(this.state.input, { renderer: giveLink }) } })))));




    } }]);return App;}(React.Component);


ReactDOM.render(React.createElement(App, null), document.getElementById('app'));