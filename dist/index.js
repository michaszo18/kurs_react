var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Title = function (_React$Component) {
    _inherits(Title, _React$Component);

    function Title(props) {
        _classCallCheck(this, Title);

        return _possibleConstructorReturn(this, (Title.__proto__ || Object.getPrototypeOf(Title)).call(this, props));
    }

    _createClass(Title, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "h1",
                null,
                this.props.value
            );
        }
    }]);

    return Title;
}(React.Component);

var Blog = function Blog() {
    var posts = [{
        title: "Wojak Zyczajny",
        short_content: "Najlepiej smakuje pity po janowsku, czyli na rynku przy studni",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse eaque ipsum amet eum eius ea totam deleniti maiores fugit cum quasi quae, error nihil est accusantium ipsa voluptate, voluptatem enim."
    }];

    var postsList = posts.map(function (post) {
        return React.createElement(Post, Object.assign({
            key: post.title
        }, post));
    });

    return React.createElement(
        "div",
        null,
        React.createElement(Title, { value: "Blog o piwach Janowskich" }),
        postsList
    );
};

var Post = function Post(props) {

    return React.createElement(
        "div",
        null,
        React.createElement(
            "h2",
            null,
            props.title
        ),
        React.createElement(
            "p",
            null,
            props.short_content
        ),
        React.createElement(ShowContent, {
            content: props.content
        })
    );
};

var ShowContent = function (_React$Component2) {
    _inherits(ShowContent, _React$Component2);

    function ShowContent(props) {
        _classCallCheck(this, ShowContent);

        var _this2 = _possibleConstructorReturn(this, (ShowContent.__proto__ || Object.getPrototypeOf(ShowContent)).call(this, props));

        _this2.showMoreContent = function () {
            _this2.setState({
                show_content: !_this2.state.show_content
            });
        };

        _this2.state = {
            show_content: true
        };
        return _this2;
    }

    _createClass(ShowContent, [{
        key: "render",
        value: function render() {
            var _this3 = this;

            if (this.state.show_content == false) {
                return React.createElement(
                    "button",
                    { onClick: function onClick() {
                            return _this3.showMoreContent();
                        } },
                    "Czytaj wi\u0119cej"
                );
            } else {
                return React.createElement(
                    "div",
                    null,
                    React.createElement(
                        "p",
                        null,
                        this.props.content
                    ),
                    React.createElement(
                        "button",
                        { onClick: function onClick() {
                                return _this3.showMoreContent();
                            } },
                        "Czytaj mniej"
                    )
                );
            }
        }
    }]);

    return ShowContent;
}(React.Component);

ReactDOM.render(React.createElement(Blog, null), document.getElementById('root'));