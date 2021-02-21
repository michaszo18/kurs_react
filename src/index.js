

        class Title extends React.Component {
            constructor(props) {
                super(props);
            }

            render() {
                return <h1>{this.props.value}</h1>
            }
        }

        const Blog = () => {
            const posts = [
                {
                    title: "Wojak Zyczajny",
                    short_content: "Najlepiej smakuje pity po janowsku, czyli na rynku przy studni",
                    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse eaque ipsum amet eum eius ea totam deleniti maiores fugit cum quasi quae, error nihil est accusantium ipsa voluptate, voluptatem enim.",
                }
            ];

            const postsList = posts.map(post => (
                <Post
                    key={post.title}
                    {...post}
                />
            ));

            return (
                <div>
                    <Title value="Blog o piwach Janowskich" />
                    {postsList}
                </div>
            );
        }

        const Post = (props) => {

            return (
                <div>
                    <h2>{props.title}</h2>
                    <p>{props.short_content}</p>
                    <ShowContent
                        content={props.content}
                    />
                </div>
            );
        }

        class ShowContent extends React.Component {

            constructor(props) {
                super(props);
                this.state = {
                    show_content: true
                }
            }
    
            showMoreContent = () => {
                this.setState({
                    show_content: !this.state.show_content
                });
            }

            render() {
                if (this.state.show_content == false) {
                    return <button onClick={() => this.showMoreContent()}>Czytaj więcej</button>
                } else {
                    return (
                        <div>
                            <p>{this.props.content}</p>
                            <button onClick={() => this.showMoreContent()}>Czytaj mniej</button>
                        </div>
                    );
                }
            }
        }

        ReactDOM.render(
            <Blog />,
            document.getElementById('root')
        );

    