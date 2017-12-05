'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FileView = function FileView(props) {
  var file = props.file,
      fileClickHandler = props.fileClickHandler,
      selectedFilePath = props.selectedFilePath,
      fileTemplate = props.fileTemplate;


  var fileClassName = (props.fileClassName || '') + ' item';
  var selectedClassName = props.selectedClassName || 'active';
  var cns = selectedFilePath === file.path ? selectedClassName + ' ' + fileClassName : fileClassName;
  var onclickFn = function onclickFn() {
    fileClickHandler && fileClickHandler(file);
  };

  return _react2.default.createElement(
    'li',
    {
      key: 'file-' + file.path,
      className: cns,
      onClick: onclickFn },
    _react2.default.createElement('i', { className: 'fa fa-file', 'aria-hidden': 'true' }),
    fileTemplate && fileTemplate({ name: file.name }) || _react2.default.createElement(
      'a',
      null,
      file.name
    )
  );
};

exports.default = FileView;