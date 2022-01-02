const MDXStyles = {
  p: (props) => <p style={{ fontSize: '18px' }} {...props} />,
  body: (props) => (
    <body
      style={{ backgroundColor: '${props => props.theme.background}' }}
      {...props}
    />
  ),
};

export default MDXStyles;
