import React from 'react';
import { TagCloud } from 'react-tagcloud';

const IconCloud = ({ iconSlugs }) => (
  <TagCloud
    minSize={12}
    maxSize={35}
    tags={iconSlugs.map(slug => ({ value: slug, count: Math.floor(Math.random() * 50) + 1 }))}
    className="simple-cloud"
  />
);

export default IconCloud;
