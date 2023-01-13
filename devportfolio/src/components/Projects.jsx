import React from "react";

export default function Projects() {
  return (
    <div>
      <h2 className="contactMe"> Projects</h2>
      <div className="projectCards">
        <div className="cards">
          <div className="imgCardTodo"></div>
          <h2>Todoing</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
          <div className="readmore">
            <span className="spanBtn">
              <a
                href="https://github.com/camcoem/todo"
                target="_blank"
                className="readMoreLink"
              >
                <button className="btn">Github Repo</button>
              </a>
            </span>
          </div>
        </div>

        <div className="cards">
          <div className="imgCardMeme"></div>
          <h2>MemeYourself</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
          <div className="readmore">
            <span className="spanBtn">
              <a
                href="https://github.com/camcoem/meme-yourself"
                target="_blank"
                className="readMoreLink"
              >
                <button className="btn">Github Repo</button>
              </a>
            </span>
          </div>
        </div>

        <div className="cards">
          <div className="imgCardShop"></div>
          <h2>MI ALMA coffee shop</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
          <div className="readmore">
            <span className="spanBtn">
              <a
                href="https://github.com/camcoem/The-Bean-Machine"
                target="_blank"
                className="readMoreLink"
              >
                <button className="btn">Github Repo</button>
              </a>
            </span>
          </div>
        </div>

        <div className="cards">
          <div className="imgCardBlog"></div>
          <h2>thebarista.dev Blog</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
          <div className="readmore">
            <span className="spanBtn">
              <a href="#" className="readMoreLink">
                <button className="btn construction">under construction</button>
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
