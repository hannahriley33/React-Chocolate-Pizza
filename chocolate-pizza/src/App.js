import React, { Component } from 'react';
import './App.css';
import Header from './header.js'
import Body from './body.js'
import Footer from './footer.js'

export default class App extends Component {
  render() {
  
    return (
      <div className='App'>
        <Header 
          logo={'logo.png'} 
          name={'Delicious'}
          description={'The best food blog on the web.'}
          fblogo={'fb-icon.png'}
          twitlogo={'twit-icon.png'}
          gplus={'gp-icon.png'}
          ig={'insta-icon.png'}
          flic={'flic-icon.png'}
          pint={'pint-icon.png'}
          wifi={'rss-icon.png'}
          mail={'mail-icon.png'}
        />
        <Body 
          mainPic={'choco-pizza.png'}
          paragraph1={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}
          paragraph2={'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. '}
          paragraph3={'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?'}
          li={'1 1/2 cups milk'}
          li1={'1/2 cup mascarpone'}
          li2={'1/2 tsp pink salt'}
          li3={'1 lb Black Mission Figs'}
          li4={'1/2 cup brown sugar'}
          li5={'2-4 tbsp water'}
          li6={'1 1/2 cups heavy cream'}
          li7={'1/3 granulated sugar'}
          li8={'2 egg yolks'}
          li9={'1 lemon, juiced'}
          li10={'2 tbsp butter'}
          li11={'1 cup honey roasted pecans, roughly chopped'}
        />

        <Footer 
          author={'author.png'}
          authorName={'Vanessa Stevenson'}
          authorText={'Food enthusiast, photography fan. Add a pinch of raw foodism and that\'s pretty much who I am'}
          bottomText={'Delicious © 2013 • All Rights Reserved. Proudly published with Ghost.'}
        />
      </div>
    );
  }  
}


