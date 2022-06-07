import React from 'react'
import Footer from './Footer';
import Nav from './Nav';

function News() {
  return (
    <div className="extra">
    <Nav />
    <h1>Latest News</h1>
    <p>Curabitur sed sapien arcu. Phasellus tincidunt quam nulla, sit amet volutpat lectus tristique sit amet. Nulla imperdiet, nulla vel dapibus cursus, massa ipsum posuere lectus, eu rutrum est metus ut massa. Mauris in fermentum odio. Nullam eu hendrerit metus, in euismod nisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis eget est turpis. Pellentesque augue enim, convallis quis sollicitudin ac, sagittis posuere ligula. Donec suscipit erat at accumsan feugiat. Donec a porta mauris. In blandit imperdiet scelerisque. Nullam tristique purus at lectus consequat cursus. Maecenas congue dignissim erat, a accumsan mi sagittis ut. Suspendisse elementum lacus et purus luctus hendrerit.</p>
    <Footer />
    </div>
  )
}

export default News;