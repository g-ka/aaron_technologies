import React, { useEffect, useState } from 'react';
import ArticlesIntro from './articles_components/ArticlesIntro';
import Feeds from './articles_components/Feeds';
import ScrollTop from './ScrollTop';

const Articles = () => {

  const URL = 'https://newsdata.io/api/1/news?apikey=pub_308388f4d15b898eab080ff13c433ade26ff1&q=tech%20AND%20(google%20OR%20facebook%20OR%20apple%20OR%20meta%20OR%20elon%20musk%20OR%20ai%20OR%20software%20OR%20hardware%20OR%20open%20ai%20OR%20microsoft%20OR%20computer%20OR%20X%20OR%20nvidia%20OR%20digital%20OR%20hcl%20OR%20virtual%20OR%20cyber%20OR%20transistor%20OR%20web%20OR%20intel%20OR%20android%20OR%20whatsapp%20OR%20baidu%20OR%20ernie%20OR%20ceo)&language=en';

  const [ data , set_data ] = useState(() => {});
  const [ titles , set_titles ] = useState(() => []);
  const [ descriptions , set_descriptions ] = useState(() => []);
  const [ links , set_links ]  = useState(() => []);
  const [ next_page , set_next_page ] = useState(() => null);
  const [ is_loading , set_is_loading ] = useState(() => true);
  const [ error , set_error ] = useState(() => null);

  const [ check , set_check ] = useState(false);

  useEffect(() =>
  {
    const feed_fetch = async () =>
    {
      set_is_loading(true);
      set_error(null);
      try
      {
        const response = await fetch(next_page ? URL+`&page=${next_page}` : URL);
        if(response.status == 429) throw Error("You have exceeded your plan limit! Please try again later after 15 minutes")
        else if(response.status != 200) throw Error("sorry! requested files can't be fetched");
        const data = await response.json();  
        set_data(data);
        set_titles(prev_titles => [...new Set([...prev_titles, ...data.results.map(article => article.title)])]);
        set_descriptions(prev_descriptions => [...new Set([...prev_descriptions, ...data.results.map(article => article.description)])]);
        set_links(prev_links => [...new Set([...prev_links, ...data.results.map(article => article.link)])]);
      }
      catch(err)
      {
        set_error(err.message);
      }
      finally
      {
        set_is_loading(false);
      }    
    }

    feed_fetch();
    console.log('useeffect finished running');
  }, [ next_page ]);

  return (
    <main className='articles' onWheel={() => window.pageYOffset>500 ? set_check(true) : set_check(false)}>
      <ArticlesIntro />
      <Feeds 
        titles={titles}
        descriptions={descriptions}
        links={links}
        is_loading={is_loading}
        error={error}
        set_next_page={set_next_page}
        data={data}
      />
      {check && <ScrollTop 
                  set_check={set_check}
                />} 
    </main>
  )
}

export default Articles
