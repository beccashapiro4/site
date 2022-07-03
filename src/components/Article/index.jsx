import React from 'react';
import { Link } from 'react-router-dom';

const Article = () => {
  return (
    <article className="mt-90">
      <header className="text-center mb-40">
        <h3>
          <a href="blog-single.html">Good Blog Article</a>
        </h3>
        <div className="link-color-default fs-12">
          <a href="#">John Grady Cole</a>--
          <time>May 13, 1932</time>
        </div>
      </header>
      <a href="blog-single.html">
        <img className="rounded" src="assets/img/raves/rave-4.JPG" alt="..." />
      </a>
      <div className="card-block">
        <p className="text-justify">
          He sat down on the lump of human flesh rotting and yellow and smelling of rot.
          He tossed a skull back and forth with Toadvine, passing the whiskey, tossing the skull
          and when it fell it made no sound at all. Not even when it cracked across the forehead.
          Toadvine turned it over. His mother had the same scar, he said, right across her forehead
          where she'd fallen as a girl.
        </p>
        <p className="text-center mt-40">
          <Link className="btn btn-black btn-round" to="/article/some-title-slug">Read more</Link>
        </p>
      </div>
    </article>

  );
};

export default Article;