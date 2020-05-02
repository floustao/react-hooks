import React from 'react'
import PropTypes from 'prop-types'

export default function Loading ({ speed = 300, text = 'loading' }) {
  const [content, setContent] = React.useState(text);

  React.useEffect(() => {
    const interval = window.setInterval(() => {
      content === text + '...'
        ? setContent(text)
        : setContent(content => content + '.')
    }, speed);

    return () => window.clearInterval(interval);
  }, [text,speed])

  return (
    <p style={styles.content}>
      {content}
    </p>
  )
}

Loading.propTypes = {
  text: PropTypes.string.isRequired,
  speed: PropTypes.number.isRequired,
}

const styles = {
  content: {
    fontSize: '35px',
    position: 'absolute',
    left: '0',
    right: '0',
    marginTop: '20px',
    textAlign: 'center',
  }
}