import React from 'react';

const LandingFeatured = ({urls}) => (
  <section className='top5'>
    <div className='large-6 large-offset-3'>
      <h2>Top 5</h2>
      <table>
        <tbody>
          {urls.slice(0,5).map((url) => (
            <tr>
              <td><a href={url.url}>{url.shortUrl}</a></td>
              <td className='counter'>{url.hitsFormatted}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </section>
)

export default LandingFeatured;
