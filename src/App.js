import React from 'react';
import Article from './components/Article';
import ArticleBox from './components/ArticleBox';

function App() {
  return (
    <div>
      <Article title="Tytuł komponetu funkcyjnego" description="Opis funkcyjny 1" />
      <ArticleBox title="Tytuł 1" description="Opis 1" />
      <ArticleBox title="Tytuł 2" description="Opis 2" />
      <ArticleBox title="Tytuł 3" description="Opis 3" />
    </div>
  );
}

export default App;
