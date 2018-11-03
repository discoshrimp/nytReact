import React, { Component } from 'react';
import API from "./utils/API";
import Saved from "./components/Saved";
import Article from "./components/Article";
import Results from "./components/Results";

class App extends Component {
  state = {
    topic: "",
    articles: [],
    saved: []
  };
  getArticles = event => {
    console.log('button clicked')
    event.preventDefault();
    API.newSearch(this.state.topic).then(data => {
      console.log(`article: ${JSON.stringify(data.data.response.docs)}\n-----\n${data.copyright}`)
      this.setState({ articles: data.data.response.docs });
    });
  };
  handleTopicChange = event => {
    this.setState({ topic: event.target.value });
  };
  getSavedArticles = () => {
    API.getArticle().then(res => {
      this.setState({ saved: res.data });
    });
  };

  handleSaveButton = id => {
    const findArticleByID = this.state.articles.find(el => el._id === id);
    this.state.articles.find(el => console.log(el));
    console.log(this.state.articles.find(el => el._id === id));
    const newSave = {
      title: findArticleByID.headline.main,
      url: findArticleByID.web_url
    };
    API.saveArticle(newSave).then(this.getSavedArticles());
  };

  handleDeleteButton = id => {
    API.deleteArticle(id).then(this.getSavedArticles());
  };
  renderSavedArticles = () => {
    return this.state.saved.map(save => (
      <Saved
        title={save.title}
        url={save.url}
        handleDeleteButton={this.handleDeleteButton}
        getSavedArticles={this.getSavedArticles}
      />
    ));
  };
  renderArticles = () => {
    return this.state.articles.map(article => (
      <Results
        _id={article._id}
        key={article._id}
        title={article.headline.main}
        url={article.web_url}
        handleSaveButton={this.handleSaveButton}
        getSavedArticles={this.getSavedArticles}
      />
    ));
  };
  // import "./Articles.css";
  // componentDidMount() {
  //   this.getSavedArticles();
  render() {
    return (
      <div>
        <Article
          handleTopicChange={this.handleTopicChange}
          getArticles={this.getArticles}
          renderArticles={this.renderArticles}
        />
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="panel article">
                <div className="panel-heading">
                  <h3 className="panel-title">
                    <strong>
                      <i className="fa fa-download" aria-hidden="true" /> Saved
                      Articles
                        </strong>
                  </h3>
                </div>
                <div className="panel-body">
                  <ul className="list-group">{this.renderSavedArticles()}</ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
