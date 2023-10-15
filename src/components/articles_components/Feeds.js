import React from 'react';

const Feeds = ({
    titles,
    descriptions,
    links,
    is_loading,
    error, 
    set_next_page,
    data }) => 
  {
    return (
      <div className='articles_feeds_section'>
        {error ? <p className='articles_feeds_section_error'>ERROR: {error}</p> :
          titles.map(( title , index ) =>
            (
              <div className={`articles_feeds_section_article articles_feeds_section_article_${index}`} key={title}>
                <div className='articles_feeds_section_article_title'>
                  {title}
                </div>
                {
                  descriptions[index] ? 
                    <div className='articles_feeds_section_article_description'>
                      {descriptions[index]}
                    </div> : 
                      <></>
                }    
                <a target='_blank' href={links[index]} className='articles_feeds_section_article_link_button'>
                  <button>
                    visit
                  </button>
                </a>
              </div>            
            )
          )
        }
        {is_loading ? 
          <div className='articles_feeds_section_loading'>
            <span className='articles_feeds_section_loading_arrows'>↓</span>
            <span className='articles_feeds_section_loading_arrows' style={{"--delay": "0.1s"}}>↓</span>
            <span className='articles_feeds_section_loading_arrows' style={{"--delay": "0.3s"}}>↓</span>
            <span className='articles_feeds_section_loading_arrows' style={{"--delay": "0.4s"}}>↓</span>
            <span className='articles_feeds_section_loading_arrows' style={{"--delay": "0.5s"}}>↓</span>
          </div> :
            error ? <></> :
              <button
                onClick={() => set_next_page(data.nextPage)}
                className='articles_feeds_section_load_button'
              >
                load next 10 articles
              </button>
        }
      </div>
    )
  }

export default Feeds
