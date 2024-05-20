// import React from 'react';
// import useBaseUrl from '@docusaurus/useBaseUrl';

// export default function Figure({ src, caption }) {
//   return (
//     <figure style={{ border: '1px solid #888', padding: 20 }}>
//       <img src={useBaseUrl(src)} alt={caption} />
//       <figcaption>{`Figure: ${caption}`}</figcaption>
//     </figure>
//   );
// }



import styles from './styles.modules.css';

// https://github.com/facebook/docusaurus/discussions/4633
export default function Figure({src, caption}) {
  return (
    <div>
      <figure>
        <img src={src} alt={caption} />
        <figcaption className={styles.figcaption}>{caption}</figcaption>
      </figure>
    </div>
  );
}