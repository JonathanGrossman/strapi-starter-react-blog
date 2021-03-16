import React from "react";
import Articles from "../../components/Articles";
import Query from "../../components/Query";
import ARTICLES_QUERY from "../../queries/article/articles";
import Widget from "rasa-webchat";

const Home = () => {
  const CustomWidget = () => {
    return (
      <Widget
        initPayload={"/get_started"}
        socketUrl={"http://localhost:5500"}
        socketPath={"/socket.io/"}
        customData={{ language: "en" }} // arbitrary custom data. Stay minimal as this will be added to the socket
        title={"Title"}
      />
    );
  };
  return (
    <div>
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          <h1>The Land of Ozbot</h1>
          <CustomWidget />
          <Query query={ARTICLES_QUERY}>
            {({ data: { articles } }) => {
              return <Articles articles={articles} />;
            }}
          </Query>
        </div>
      </div>
    </div>
  );
};

export default Home;
